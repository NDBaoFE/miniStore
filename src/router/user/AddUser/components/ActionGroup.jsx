import ConfirmModal from "../../../../components/ConfirmModal";
import { useState } from "react";
import { GroupWrapper,FinishButton } from "./style"

/* eslint-disable react/prop-types */

function ActionGroup({confirm}){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () =>{
        setIsModalOpen(true);
    }

    
  const handleClose = () => {
    setIsModalOpen(false);
  };




    
      return (
        <GroupWrapper>
            <ConfirmModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}
             content={<><h2>Sale Finish Confirmation</h2>
             <p>Transaction Successful!</p>
             <p>Thank you for completing the sale.</p></>} title="Sale Confirmation" handleClose={handleClose} showModal={showModal}/>
            <div>Discard Change</div>
            <FinishButton onClick={()=>confirm()} id="add-button">Add User</FinishButton>
        </GroupWrapper>
      )
}

export default ActionGroup