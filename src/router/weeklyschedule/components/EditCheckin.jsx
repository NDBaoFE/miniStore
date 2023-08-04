import { useState } from 'react';
/* eslint-disable react/prop-types */

import { Row, Select } from "antd";
import { StyledModal } from "./style";
import Button from '../../../components/Button';
import productApi from '../../../utils/api/productApi';
import { toast } from 'react-toastify';
import { toastError, toastSuccess } from '../../../components/Toast';

const EditModal = ({ openEdit, setOpenEdit,selectedValue,setLoaded,loaded}) => {
  const [isCheckin, setCheckin] = useState(selectedValue.isCheckedIn);
  const [isCheckout, setCheckout] = useState(selectedValue.isCheckedOut);
    console.log(selectedValue);
  const handleCheckin = (value) => {
    setCheckin(value === 'true'); // Convert 'true' to true, 'false' to false
  };

  const handleCheckout = (value) => {
    setCheckout(value === 'true'); // Convert 'true' to true, 'false' to false
  };

  const handleCancel = () => {
    setOpenEdit(false);
  };
  const handleConfirm = async() => {
    const token=localStorage.getItem("Authorization");
    const res=await productApi.editCheckin(isCheckin,isCheckout,selectedValue,token);
    if(res.data.status == 200){
        toastSuccess("Edit Checkin Successfully");
        setOpenEdit(false);
        setLoaded(!loaded);
    }else{
        toastError("Edit Checkin Error, please try again later");
    }
  }

  return (
    <StyledModal
      open={openEdit}
      footer={null}
      onCancel={handleCancel}
      centered
      closable={true}
      width={900}
      height={700}
      style={{ padding: 20 }}
    >
        <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h1>Edit Checkin</h1>
        <h3>Is This user Checkin?</h3>
      <Select
        value={isCheckin ? 'true' : 'false'}
        style={{
          width: 120,
        }}
        onChange={handleCheckin}
        options={[
          {
            value: 'true',
            label: 'True',
          },
          {
            value: 'false',
            label: 'False',
          },
        ]}
      />
       <h3>Is This user Checkout?</h3>
      <Select
        value={isCheckout ? 'true' : 'false'}
        style={{
          width: 120,
        }}
        onChange={handleCheckout}
        options={[
          {
            value: 'true',
            label: 'True',
          },
          {
            value: 'false',
            label: 'False',
          },
        ]}
      />
      <Row>
      <Button title="Cancel" onClick={handleCancel} />
      <Button title="Confirm" onClick={handleConfirm} />
      </Row>
      


        </div>
       
    </StyledModal>
  );
};

export default EditModal;
