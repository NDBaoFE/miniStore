/* eslint-disable react/prop-types */

import ConfirmModal from "../../../components/ConfirmModal";
import { GroupWrapper,FinishButton } from "./style"
import { useState } from "react";
function ActionGroup({confirm}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };




  return (
    <GroupWrapper>
        <ConfirmModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}
         content={<><h2>Sale Finish Confirmation</h2>
         <p>Transaction Successful!</p>
         <p>Thank you for completing the sale.</p></>} title="Sale Confirmation"
           handleClose={handleClose} showModal={showModal}/>
        <div>Discard Change</div>
        <FinishButton onClick={()=>confirm()}>Add Product</FinishButton>
    </GroupWrapper>
  )
}

export default ActionGroup