/* eslint-disable react/prop-types */
import {  VoucherContainer } from "./style"

import {  Button, List, Skeleton ,Image} from 'antd';
import { useEffect, useState } from 'react';
import { getVouchers } from "../../home/components/slice";
import { useDispatch } from "react-redux";
import { themes } from "../../../utils/theme";
const count = 3;
import { useParams } from "react-router-dom";
import localStorageUtils from "../../../utils/localStorageUtils";
import productApi from "../../../utils/api/productApi";
function VoucherList({setCurrentVoucher}) {
  const dispatch=useDispatch();
    const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const token=localStorageUtils.getItem("Authorization");
  const {id} = useParams();
  const voucherByProduct = `http://localhost:8080/ministore/getVoucherByProductId?productId=${id}&results=${count}`;
  const voucherApplyAll=`http://localhost:8080/ministore/getAllVouchers?results=${count}`;
  useEffect(() => {
    let type= (id == "applyAll");
    const fetchData=async ()=>{
      
      const res = await productApi.getVoucher(type,id,count,token);
      console.log(res.data.status);
      if(res.data.status==200){
        setInitLoading(false);
        setData(res.data.data);
        console.log(res.data.data);
        setList(res.data.data);
        dispatch(getVouchers(res));
      }
   
      
       
      
    }
    fetchData();
  }, [token]);
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          picture:{},
        })),
      ),
    );
      fetch(id == "applyAll"?  voucherApplyAll: voucherByProduct ,)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res);
        dispatch(getVouchers(newData));
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
  };
  const handleClickVoucher = (item) => {
    setCurrentVoucher(item);
  }
    const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
  return (
    <VoucherContainer>
        <List
      className="loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
    
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta onClick={()=>handleClickVoucher(item)}
              avatar={<Image src={item?.voucherImg?.startsWith("http")||item?.voucherImg?.startsWith("data:image") ? item?.voucherImg : `data:image/jpeg;base64,${item?.voucherImg}`} style={{width:200,objectFit:"contain",background:`${themes.colors.background}`}}/>}
              title={"Summer 2023 Voucher"}
              description={item.description}
            />
          </Skeleton>
        </List.Item>
      )}
    />
    </VoucherContainer>
  )
}

export default VoucherList