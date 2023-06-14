/* eslint-disable react/prop-types */

import { GroupWrapper,FinishButton, NotiModal } from "./style"

import { BsExclamationCircle } from "react-icons/Bs";
import { toastError, toastSuccess } from "../../../components/Toast";
import productApi from "../../../utils/api/productApi";

function ActionGroup({setOpen,selectedValue,allPositions}) {

function completeUserShiftsWithUserId(userShifts, positions) {
  const completedUserShifts = userShifts.map((userShift,index) => {
    const userId=positions[index].employeeId;
  
    return { userShiftId: userShift.userShiftId, userId };
  });

  return completedUserShifts;
}

const completedUserShifts = completeUserShiftsWithUserId(selectedValue, allPositions);

  const handleOk = async () => {
      const res= await productApi.assignEmployee(completedUserShifts);
      if(res.data.status === 200 ){
        toastSuccess(res.data.message);
        setOpen(false);
            }else{
              toastError(res.data.message);
              setOpen(false);
            }
  }

  const handleConfirm = () => {
    handleOk(); // Call the handleOk function passed as prop
   
  };
  const confirm = async() => {
    NotiModal.confirm({
        maskClosable: true,
        title: 'Are you sure you want to assign theses people into This position ?',
        icon: <BsExclamationCircle />,
        content: 'Are you sure you want to assign theses people into This position ?',
        okText: 'Ok',
        cancelText: 'Cancel',
        onOk: async() => {
          handleConfirm();
        },
    });
  };
const handleCancel = () => {
  setOpen(false);
}
  return (
    <GroupWrapper>
       
        <div onClick={handleCancel}>Cancel</div>
        <FinishButton onClick={()=>confirm()}>Confirm</FinishButton>
    </GroupWrapper>
  )
}

export default ActionGroup