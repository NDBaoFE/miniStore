/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { GroupWrapper,FinishButton, NotiModal, CancelButton } from "./styled"
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
import { paymentApi } from "../../../utils/api/paymentApi";

function ActionGroup({change}) {
  
  const componentRef = useRef();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {orderList,paymentMethod,totalPrice} = useSelector(selector);
  const handleOk = async () => {
    const modifiedOrderList = {
      ...orderList,
      data: orderList.data.map((order) => {
       let {productId,price,cartQuantity,voucherId,name}=order;
       let quantity1= cartQuantity;
        return {productId,price,quantity:quantity1,voucherId,name};
      }),
    };
    console.log(modifiedOrderList);
    delete modifiedOrderList.percentDiscount;
    const token= localStorage.getItem("Authorization");
    if(paymentMethod == 2){
    localStorage.setItem("cart",JSON.stringify(modifiedOrderList));
    localStorage.setItem("fullcart",JSON.stringify(orderList));
    // console.log(JSON.parse(localStorage.getItem("cart")));
    const res= await paymentApi.vnPay(totalPrice,token);
    if(res.data.status  ==200){
      window.location.href=res.data.data;
    }
    }else{
      if(totalPrice > parseInt(change)){
        toastError("Change is not enough");
      }else{
        delete modifiedOrderList.name;
        const res= await productApi.makeOrder(modifiedOrderList,token)  ;
        if(res.data.status  ==200){
          toastSuccess("Make order Successfully");
          dispatch(clearOrder());
          handlePrint();
          navigate(-1);
        }else{
          toastError(res.data.message);
        }
      }
     
    }
   
  }


  
  const handleConfirm = () => {
    handleOk(); // Call the handleOk function passed as prop
   
  };
  const confirm = async() => {
    NotiModal.confirm({
        maskClosable: true,
        title: 'Are you sure you want to make an order ?',
        icon: <BsExclamationCircle />,
        content: 'Make sure you have enough products for the customer',
        okText: 'Confirm',
        cancelText: 'Cancel',
        onOk: async() => {
          handleConfirm();
        },
    });
  };
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  const backToPrevious = () => {
    navigate('/home')
  }

  return (
    <GroupWrapper>
       
       <CancelButton onClick={() => backToPrevious()}>Discard Order</CancelButton>
        <FinishButton onClick={()=>confirm()}>Finish Sale</FinishButton>
      
        <ComponentToPrint ref={componentRef} change={change} orderList={orderList.data}/>
    </GroupWrapper>
  )
}

export default ActionGroup