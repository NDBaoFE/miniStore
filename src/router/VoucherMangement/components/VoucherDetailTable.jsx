import { Container } from "../style";
import React from "react";
import { Space, Table, Button } from "antd";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useState } from "react";
import { formatNumberWithDecoration } from "../../../utils";
import productApi from "../../../utils/api/productApi";







const columns = [
  {
    title: "Voucher Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Voucher Description",
    dataIndex: "description",
    key: "description",

  
  },

  {
    title: 'Is Apply to All',
    key: 'isApplyAll',
    render: (isApplyAll) => {
      if (isApplyAll === true) {
        return (
          <div
   
          >
            Yes
          </div>
        );
      } else {
        return (
          <div
      
          >
            No
          </div>
        );
      }
    },
  },


  {
    title: "Quantity",
    dataIndex: "quantity",
    
  },

  {
    title: "Min Total",
    dataIndex: "minTotal",
   
  },

  {
    title: "Min Item",
    dataIndex: "minItem",
   
  },

  
  {
    title: "Percent Discount (%)",
    dataIndex: "percentDiscount",
    render: (percentDiscount) => {
      const multipliedValue = percentDiscount * 100;
      return <span>{multipliedValue}</span>;
    },
  },

  {
    title: 'Expire Date',
    dataIndex: 'expireDate',
    key: 'expireDate',
    render: (_, record) => (

        <div >{record.expireDate||"None"}</div>
     
    ),
    // sorter: (a, b) => a.minTotal - b.minTotal,
    // sortDirections: ['descend', 'ascend'],
  },

  
  
];


const VoucherDetailTable = () => {
  const [voucherDetail, setVoucherDetail] = useState([])
  const token = localStorage.getItem('Authorization')
  const { id } = useParams();
  useEffect(()=>{
    async function fetchData() {
      try {
        const response = await productApi.getVoucherDetail(id,token);
        setVoucherDetail(response.data.data);
  
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();

  }, [token])

console.log(voucherDetail);

  return (
    <Container>
       <div style={{margin: 25, fontSize: 30}}>
        Voucher Detail of #{id}
      </div>


      <Table columns={columns} dataSource={[voucherDetail]} />

      <Button><Link to={`/voucher`}>Back to voucher</Link></Button> 

  
    </Container>
  );
};

export default VoucherDetailTable;
