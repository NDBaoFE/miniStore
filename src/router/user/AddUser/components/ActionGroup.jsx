import ConfirmModal from "../../../../components/ConfirmModal";
import { useState } from "react";
import { GroupWrapper,FinishButton, CancelButton } from "./style"
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */

function ActionGroup({confirm}){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () =>{
        setIsModalOpen(true);
    }

    
  const handleClose = () => {
    setIsModalOpen(false);
  };



  const navigate = useNavigate()
  const backToPrevious = () => {
    navigate('/user')
  }

    
      return (
        <GroupWrapper>
            <ConfirmModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}
             content={<><h2>Sale Finish Confirmation</h2>
             <p>Transaction Successful!</p>
             <p>Thank you for completing the sale.</p></>} title="Sale Confirmation" handleClose={handleClose} showModal={showModal}/>
             <div onClick={() => backToPrevious()}>Discard Add</div>
            <FinishButton onClick={()=>confirm()} id="add-button">Add User</FinishButton>
        </GroupWrapper>
      )
}

export default ActionGroup