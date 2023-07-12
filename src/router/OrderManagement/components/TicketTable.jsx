/* eslint-disable react/prop-types */


import { Table } from 'antd';

import { Link } from 'react-router-dom';
const columns = [
  {
    title: 'OrderID',
    dataIndex: 'orderId',
    
  },
  {
    title: 'Saler Name',
    dataIndex: 'saler',
    
  },
  {
    title: 'Date',
    dataIndex: 'date',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.startTime - b.startTime,
    render: (_, record) => (
      <span>{new Date(record.startTime * 1000).toLocaleString('en-GB', {
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
      <span>{record.ticketType.name}</span>
    ),
  },
  {
    title: 'Payment Method',
    dataIndex: 'paymentMethod',
    render: (_, record) => (
      <span>{record.isApproved? 'Yes' : record.isApproved== false? 'No': 'Pending'}</span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex:'action',
    render: (_, record) => (
      <span>
        <Link to={`/ticket/${record.ticketId}`}>View </Link>
       
     </span>
    ),
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

function OrderTable({tickets}) {

 

  return (
    <Table columns={columns} dataSource={tickets} onChange={onChange} />
  )
}

export default OrderTable