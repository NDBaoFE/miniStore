/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import ConfirmModal from "../../../components/ConfirmModal";
import { GroupWrapper,FinishButton, CancelButton } from "./style"
import { useState } from "react";
function ActionGroup({confirm}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };


  const navigate = useNavigate()
  const backToPrevious = () => {
    navigate('/product')
  }

  return (
    <GroupWrapper>
        <ConfirmModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}
         content={<><h2>Sale Finish Confirmation</h2>
         <p>Transaction Successful!</p>
         <p>Thank you for completing the sale.</p></>} title="Sale Confirmation"
           handleClose={handleClose} showModal={showModal}/>
        <CancelButton onClick={() => backToPrevious()}>Discard Add</CancelButton>
        <FinishButton onClick={()=>confirm()}>Update Product</FinishButton>
    </GroupWrapper>
  )
}

export default ActionGroup