import { useState } from 'react';
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import { Table } from 'antd';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import productApi from '../../utils/api/productApi';
import { TableContainer } from './style';
const columns = [
  {
    title: 'OrderID',
    dataIndex: 'orderId',
    
  },
  {
    title: 'Saler Name',
    dataIndex: 'saler-name',
    render: (_, record) => (
      <span>{record.orderUser.name}</span>
    ),
  },

  {
    title: 'Date',
    dataIndex: 'date',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.date - b.date,
    render: (_, record) => (
      <span>{new Date(record.date ).toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })}</span>
    ),
  },
 
  {
    title: 'Total',
    dataIndex: 'total',
    render: (_, record) => (
      <span>{record.total}</span>
    ),
  },

  {
    title: 'Action',
    key: 'action',
    dataIndex:'action',
    render: (_, record) => (
      <span>
        <Link to={`/orderDetail/${record.orderId}`}>View </Link>
       
     </span>
    ),
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

function OrderTable() {
  const [orders,setOrders] = useState([]);
  const token=localStorage.getItem("Authorization");
  useEffect(() => {

    async function fetchData() {
        try {
            const response = await productApi.getAllOrder(token);
                setOrders(response.data.data);
          
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
}, [token]);
 

  return (
    <TableContainer>
      <h2>Latest Order</h2>
    <Table columns={columns} dataSource={orders} onChange={onChange} />
    </TableContainer>
  )
}

export default OrderTable