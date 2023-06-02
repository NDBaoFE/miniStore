import {  VoucherContainer } from "./style"

import { Avatar, Button, List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { getVouchers, selectVoucher } from "../../home/components/slice";
import { useDispatch } from "react-redux";
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
function VoucherList() {
  const dispatch=useDispatch();
    const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        dispatch(getVouchers(res.results));
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
        console.log(res.results);
      });
  }, []);
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
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
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
     dispatch(selectVoucher(item));
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
              avatar={<Avatar src={item.picture.large}  shape="square" size={64}/>}
              title={"Summer 2023 Voucher"}
              description={"10% Discount on Nestle Maximum 12000đ"}
            />
          </Skeleton>
        </List.Item>
      )}
    />
    </VoucherContainer>
  )
}

export default VoucherList