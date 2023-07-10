/* eslint-disable react/prop-types */


import { Table } from 'antd';

import { Link } from 'react-router-dom';
import { RequestWrapper } from './style';
const columns = [
  {
    title: 'Shift',
    dataIndex: 'title',
    render: (_, record) => (
        <span>Shift {record.userShift.shiftId}</span>
      ),
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
    sorter: (a, b) => a.userShift.startTime - b.userShift.startTime,
    render: (_, record) => (
      <span>{new Date(record.userShift.startTime * 1000).toLocaleString('en-GB', {
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
  
    sorter: (a, b) => a.userShift.endTime - b.userShift.endTime,
    render: (_, record) => (
      <span>{new Date(record.userShift.endTime * 1000).toLocaleString('en-GB', {
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
      <span>{record.type == false? "Work Request":"Holiday Request"}</span>
    ),
  },
  {
    title: 'Approved',
    dataIndex: 'isApproved',
    render: (_, record) => (
      <span>True</span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex:'action',
    render: (_, record) => (
      <span>
        <Link to={`/ticket/${record.ticketId}`}>WithDraw </Link>
       
     </span>
    ),
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

function RequestTable({requests}) {

 

  return (
    <RequestWrapper>
        <h2>
            Your Shift Request 
        </h2>
         <Table columns={columns} dataSource={requests} onChange={onChange} />
    </RequestWrapper>
   
  )
}

export default RequestTable