/* eslint-disable react/prop-types */
import {  VoucherContainer } from "./style"

import {  List, Skeleton ,Image} from 'antd';
import { useEffect, useState } from 'react';
import { getVouchers } from "../../home/components/slice";
import { useDispatch } from "react-redux";
import { themes } from "../../../utils/theme";
const count = 3;
import { useParams } from "react-router-dom";
import localStorageUtils from "../../../utils/localStorageUtils";
import productApi from "../../../utils/api/productApi";
import { toastWarning } from "../../../components/Toast";
function VoucherList({setCurrentVoucher}) {
  const dispatch=useDispatch();
    const [initLoading, setInitLoading] = useState(true);


  const [list, setList] = useState([]);
  const token=localStorageUtils.getItem("Authorization");
  const {id} = useParams();

  useEffect(() => {
    let type= (id == "applyAll");
    const fetchData=async ()=>{
      
      const res = await productApi.getVoucher(type,id,count,token);

      if(res.data.status==200){
        setInitLoading(false);
       

        setList(res.data.data);
        dispatch(getVouchers(res));
      }else{
        setInitLoading(false);


        setList(res.data.data);
        dispatch(getVouchers(res));
        toastWarning("We don't find any voucher related to this");
      }
   
      
       
      
    }
    fetchData();
  }, [token]);
  
  const handleClickVoucher = (item) => {
    setCurrentVoucher(item);
  }
    
  return (
    <VoucherContainer>
        <List
      className="loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"

      dataSource={list}
      renderItem={(item) => (
        <List.Item
    
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta onClick={()=>handleClickVoucher(item)}
              avatar={<Image src={item?.voucherImg?.startsWith("http")||item?.voucherImg?.startsWith("data:image") ? item?.voucherImg : `data:image/jpeg;base64,${item?.voucherImg}`} style={{width:200,objectFit:"contain",background:`${themes.colors.background}`}}/>}
              title={item?.name}
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