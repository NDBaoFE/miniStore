/* eslint-disable react/prop-types */

import { GroupWrapper,FinishButton, NotiModal } from "./style"

import { BsExclamationCircle } from "react-icons/Bs";
import { toastError, toastSuccess } from "../../../components/Toast";
import productApi from "../../../utils/api/productApi";

function ActionGroup({setOpen ,positions,setLoaded}) {

// function completeUserShiftsWithUserId(userShifts, positions) {

  const handleOk = async () => {
    const adjustedArray = positions.map(item => ({
      userShiftId: item.userShiftId,
      userId: item.user.userId
    }));
    const token=localStorage.getItem("Authorization");
      const res= await productApi.assignEmployee(adjustedArray,token);
      if(res.data.status === 200 ){
        toastSuccess(res.data.message);
        setLoaded(true);
        setOpen(false);
            }else{
              toastError(res.data.message);
              setOpen(false);
            }
      console.log("ok");
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