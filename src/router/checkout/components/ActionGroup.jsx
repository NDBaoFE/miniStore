/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { GroupWrapper,FinishButton, NotiModal } from "./styled"
import { useSelector } from "react-redux";
import { selector } from "../../home/components/slice/selector";
import productApi from "../../../utils/api/productApi";
import { BsExclamationCircle } from "react-icons/Bs";
import { toastError, toastSuccess } from "../../../components/Toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useReactToPrint } from 'react-to-print';
import { clearOrder } from "../../home/components/slice";
import {ComponentToPrint} from "./bill"

import  { useRef } from 'react';

function ActionGroup({change}) {
  const componentRef = useRef();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {orderList} = useSelector(selector);
  const handleOk = async () => {
    const modifiedOrderList = {
      ...orderList,
      data: orderList.data.map((order) => {
       let {productId,price,quantity,voucherId}=order;
       
        return {productId,price,quantity,voucherId};
      }),
    };
    
    delete modifiedOrderList.percentDiscount;
    const token= localStorage.getItem("Authorization");
    const res= await productApi.makeOrder(modifiedOrderList,token);
      if(res.data.status  ==200){
        toastSuccess("Make order Successfully");
        dispatch(clearOrder());
        handlePrint();
        navigate(-1);
      }else{
        toastError("Make order Failed");
      }
  }

  const handleConfirm = () => {
    handleOk(); // Call the handleOk function passed as prop
   
  };
  const confirm = async() => {
    NotiModal.confirm({
        maskClosable: true,
        title: 'Bạn có muốn thay đổi thông tin tài khoản?',
        icon: <BsExclamationCircle />,
        content: 'Tài khoản sau khi đổi sẽ không còn còn lưu trữ thông tin trước đó được nữa.',
        okText: 'Xác nhận',
        cancelText: 'Huỷ',
        onOk: async() => {
          handleConfirm();
        },
    });
  };
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  console.log(orderList);
  return (
    <GroupWrapper>
       
        <div>Discard Sale</div>
        <FinishButton onClick={()=>confirm()}>$ Finish Sale</FinishButton>
      
        <ComponentToPrint ref={componentRef} change={change} orderList={orderList.data}/>
    </GroupWrapper>
  )
}

export default ActionGroup