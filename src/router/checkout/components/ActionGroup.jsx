
import ConfirmModal from "../../../components/ConfirmModal";
import { GroupWrapper,FinishButton } from "./styled"
import { useState } from "react";
import { useSelector } from "react-redux";
import { selector } from "../../home/components/slice/selector";
import productApi from "../../../utils/api/productApi";
function ActionGroup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {orderList} = useSelector(selector);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    productApi.makeOrder(orderList);
  }

  const handleConfirm = () => {
    handleOk(); // Call the handleOk function passed as prop
    handleClose(); // Close the modal
  };

  return (
    <GroupWrapper>
        <ConfirmModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}
         content={<><h2>Sale Finish Confirmation</h2>
         <p>Transaction Successful!</p>
         <p>Thank you for completing the sale.</p></>} title="Sale Confirmation"
          handleConfirm={handleConfirm} handleClose={handleClose} showModal={showModal}/>
        <div>Discard Sale</div>
        <FinishButton onClick={()=>showModal()}>$ Finish Sale</FinishButton>
    </GroupWrapper>
  )
}

export default ActionGroup