/* eslint-disable react/prop-types */


import { Table } from 'antd';

import { Link } from 'react-router-dom';
const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    render: (_, record) => (
      <span>{record.ticket.title}</span>
    ),
  },
  {
    title: 'Description',
    dataIndex: 'description',
    render: (_, record) => (
      <span>{record.ticket.description}</span>
    ),
  },
  {
    title: 'User',
    dataIndex: 'user',
    render: (_, record) => (
      <span>{record.ticket.user.name}</span>
    ),
  },
  {
    title: 'Start Time',
    dataIndex: 'startTime',
   
    render: (_, record) => (
      <>
       {record.ticket.ticketType.ticketTypeId === 2 ? 'None' : new Date(record.ticket.startTime * 1000).toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })}</>
     
    ),
  },
  {
    title: 'End Time',
    dataIndex: 'endTime',
    
    render: (_, record) => (
      <>
       {record.ticket.ticketType.ticketTypeId === 2 ? 'None' : new Date(record.ticket.endTime * 1000).toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })}
      </>
     
    ),
  },
  {
    title: 'Shift',
    dataIndex: 'shift',

    render: (_, record) => (
      <>
       {record.ticket.ticketType.ticketTypeId === 1 ? 'None' : <span>record.</span>}
      </>
     
    ),
  },
  {
    title: 'Type',
    dataIndex: 'type',
    render: (_, record) => (
      <span>{record.ticket.ticketType.name}</span>
    ),
  },
  {
    title: 'Approved',
    dataIndex: 'isApproved',
    render: (_, record) => (
      <span>{record.ticket.isApproved? 'Yes' : record.ticket.isApproved== false? 'No': 'Pending'}</span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex:'action',
    render: (_, record) => (
      <span>
        <Link to={`/ticket/${record.ticket.ticketId}`}>View </Link>
       
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