/* eslint-disable react/prop-types */


import { Table } from 'antd';

import { Link } from 'react-router-dom';
const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    
  },
  {
    title: 'Description',
    dataIndex: 'description',
    
  },
  {
    title: 'User',
    dataIndex: 'user',
    render: (_, record) => (
      <span>{record.user.name}</span>
    ),
  },
  {
    title: 'Start Time',
    dataIndex: 'startTime',
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
    title: 'End Time',
    dataIndex: 'endTime',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.endTime - b.endTime,
    render: (_, record) => (
      <span>{new Date(record.endTime * 1000).toLocaleString('en-GB', {
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
    title: 'Type',
    dataIndex: 'type',
    render: (_, record) => (
      <span>{record.ticketType.name}</span>
    ),
  },
  {
    title: 'Approved',
    dataIndex: 'isApproved',
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

function TicketTable({tickets}) {

 

  return (
    <Table columns={columns} dataSource={tickets} onChange={onChange} />
  )
}

export default TicketTable