import { Container } from "../style";
import React from "react";
import { Space, Table, Button } from "antd";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import orderManagementApi from "../../../utils/api/orderManagementApi";
import { useState } from "react";
const columns = [
  {
    title: "Product ID",
    dataIndex: "productId",
    key: "productId",
  },
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
    render: (product) => {
      return product.name;
    },
  },


  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },

  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "quantity",
  },
];


const OrderDetailTable = () => {
  const [orderDetail, setOrderDetail] = useState([])
  const token = localStorage.getItem('Authorization')
  const { id } = useParams();
  useEffect(()=>{
    async function fetchData() {
      try {
        const response = await orderManagementApi.getOrderDetail(id,token);
        console.log(response.data);
        setOrderDetail(response.data.data);
  
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();

  })

  return (
    <Container>
      <div style={{margin: 25, fontSize: 30}}>
        Order Detail of #{id}
      </div>


      <Table columns={columns} dataSource={orderDetail} />

      <Button><Link to={`/orderManagement`}>Back to order</Link></Button>
    </Container>
  );
};

export default OrderDetailTable;
