/* eslint-disable react/prop-types */

import ConfirmModal from "../../../components/ConfirmModal";
import { GroupWrapper,FinishButton } from "./style"
import { useState } from "react";
import { useSelector } from "react-redux";
import { selector } from "../../home/components/slice/selector";
import productApi from "../../../utils/api/productApi";
import { useNavigate } from "react-router-dom";
function ActionGroup({confirm}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {orderList} = useSelector(selector);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
  const token = localStorage.getItem("Authorization");
  const handleOk = () => {
    productApi.makeOrder(orderList,token);
  }

  const handleConfirm = () => {
    handleOk(); // Call the handleOk function passed as prop
    handleClose(); // Close the modal
  };
  const navigate = useNavigate()
  const backToPrevious = () => {
    navigate('/voucher')
  }


  return (
    <GroupWrapper>
        <ConfirmModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}
         content={<><h2>Sale Finish Confirmation</h2>
         <p>Transaction Successful!</p>
         <p>Thank you for completing the sale.</p></>} title="Sale Confirmation"
          handleConfirm={handleConfirm} handleClose={handleClose} showModal={showModal}/>
        <div onClick={() => backToPrevious()}>Discard Add</div>
        <FinishButton onClick={()=>confirm()}>Add Voucher</FinishButton>
    </GroupWrapper>
  )
}

export default ActionGroup