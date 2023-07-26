/* eslint-disable react/prop-types */

import { NotiModalOrder } from '../components/style';
import { Table, Button,Modal } from 'antd';

import './style.css'

import { BsExclamationCircle } from 'react-icons/Bs';
import orderManagementApi from '../../../utils/api/orderManagementApi';
import { toastError, toastSuccess } from '../../../components/Toast';
import { useState } from 'react';



function OrderTable({tickets}) {

  const columns = [
    {
      title: 'OrderID',
      dataIndex: 'orderId',
      render: (_, record) => (
        <span>{record.orderId}</span>
      ),
      
    },
    {
      title: 'Saler Name',
      dataIndex: 'saler',
      render: (_, record) => (
        <span>{record.orderUser.name}</span>
      ),
      
    },
    {
      title: 'Date',
      dataIndex: 'date',
      defaultSortOrder: 'descend',
    
    },
    
    {
      title: 'Total',
      dataIndex: 'total',
      // render: (_, record) => (
      //   <span>{record.ticketType.name}</span>
      // ),
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentMethod',
      // render: (_, record) => (
      //   <span>{record.isApproved? 'Yes' : record.isApproved== false? 'No': 'Pending'}</span>
      // ),
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex:'action',
      render: (_, record) => (
        <span>
          <Button>View </Button>
          <Button danger style={{marginLeft: 20}} onClick={()=>confirm(record.orderId)}>Roll Back </Button>
       </span>
      ),
    },
  ];
  
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  const [reload,SetReload]=useState(false);
  const [search,setSearch]=useState("");
  const handleOrderDeleted = () => {
    // Refresh the vouchers by triggering a re-render of the VoucherList component
    // This can be done by incrementing the current page number or any other way to indicate a change
    SetReload(!reload);
  };
  
  const confirm = async (id) => {
    const modalContentStyle = {
      // paddingTop: '30px',
       // Adjust the value as per your requirement
    };
  
    const styleTitle = {
      paddingTop: 10
    }

    NotiModalOrder.confirm({
      maskClosable: true,
      title: (<div style={styleTitle}>Bạn có muốn xóa order này không?</div>),
      icon: <BsExclamationCircle />,
      content: (
        <div style={modalContentStyle}>
          Khi bạn nhấn đồng ý, order này sẽ bị xóa vĩnh viễn khỏi danh sách
        </div>
      ),
      okText: 'Xác nhận',
      centered: true,
      cancelText: 'Huỷ',
      onOk: async () => {
        const token = localStorage.getItem('Authorization');
        const res = await orderManagementApi.deleteOrder(id, token);
        if (res.status === 200) {
          toastSuccess('Delete Order Succesfully');
          setSearch(search);
        } else {
          toastError('Delete Order Failed');
        }
        handleOrderDeleted();
      },
    });
  };
  return (
    <Table columns={columns} dataSource={tickets} onChange={onChange} />
  )
}

export default OrderTable