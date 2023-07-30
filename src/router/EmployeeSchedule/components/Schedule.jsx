/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
import {    Image, Tag } from 'antd';
import {  Card, Img, Info,
  ShiftName,
  ShiftTime,
  ShiftType,
  
  Team
   } from './cardStyle';
import {ModalContainer ,StyledModal, EmployeeCard, Left, Right, StyledButton, ButtonContainer, NotiModal,Status} from "./style"


import ActionGroup from "./ActionGroup"


import { userShifts } from './data';
import { shiftStatus1 } from '../data';
import useAuth from '../../../utils/useAuth';
import { toastError, toastSuccess } from '../../../components/Toast';
import productApi from '../../../utils/api/productApi';
import { Link } from 'react-router-dom';
import CheckinModal from '../CheckinModal';
import { useState } from 'react';

const ScheduleComponent = ({open,setOpen,selectedValue,positions,setLoaded,loaded,requests,openCheckin,setOpenCheckin}) => {
  const {userRole,userId}=useAuth();
  const [checkinShift,setCheckinShift]=useState();
  const [type,setType]=useState(true);

  const handleCancel = () => {
    setOpen(false);
  }
  const renderCheckinCheckoutButtons = (index) => {
    const hasUser = positions[index].user && positions[index].user.userId === userId;
    const isCheckedIn = selectedValue[index]?.isCheckedIn === true;
    const isCheckedInLate = selectedValue[index]?.isCheckedInLate === true;
    const isCheckedOut= selectedValue[index]?.isCheckedOut === true;
    if (hasUser && !isCheckedIn && !isCheckedInLate) {
      return (
        <ButtonContainer>
          <StyledButton type="primary" onClick={() => handleCheckin(selectedValue[index], true)}>
            Checkin
          </StyledButton>
          {selectedValue[index].status === "not yet" && (
            <StyledButton type="primary">
              <Link to="/ticket">I can't do it</Link>
            </StyledButton>
          )}
        </ButtonContainer>
      );
    }
  
    if (hasUser && (isCheckedIn ||isCheckedInLate) && !isCheckedOut) {
      return (
        <ButtonContainer>
          <StyledButton type="primary" onClick={() => handleCheckin(selectedValue[index], false)}>
            Checkout
          </StyledButton>
        </ButtonContainer>
      );
    }
  
    return null;
  };
  const handleApply=(id)=>{
    NotiModal.confirm({
      maskClosable: true,
      title: 'Do you sure you want to apply for this position ?  ',
      content: 'Remember , once you submit , the admin can see your request and assign you to this shift',
      okText: 'Confirm',
      cancelText: 'Cancel',
      onOk: async () => {
        const token=localStorage.getItem("Authorization");
        const res=await productApi.requestShift(id,token);
        if(res && res.status == 200){
          toastSuccess("You have successfully submitted your request");
          setLoaded(!loaded);
          setOpen(false);
        }
        else{
          toastError("Something went wrong");
          setLoaded(!loaded);

        }
         
      },
  });
  }
    const handleCheckin=(shift,condition)=>{
      setOpenCheckin(true);
      setCheckinShift(shift);
      setType(condition);
    }
    const applyStatus = (status) => {
      const matchedItem = Object.values(shiftStatus1).find((item) =>
        item.data.includes(status)
      );
      if (matchedItem) {
        return matchedItem.color;
      }
      return "#ff9683"; // Default color if no matching status found
    };
  return (
    
      <StyledModal
      open={open}
      footer={null}
      onCancel={handleCancel}
      centered
      closable={true}
      width={1200}
      
    >
      <CheckinModal openCheckin={openCheckin} setOpenCheckin={setOpenCheckin} checkinShift={checkinShift} type={type} setLoaded={setLoaded} loaded={loaded}  open={open} setOpen={setOpen}/>
      <ModalContainer> 
        <Left>{selectedValue ? selectedValue.slice(0,3).map((item,index)=>{
    
          return  <Card key={userShifts[index].id}  style={{height:170,margin: 20}}>
          <Img  alt="" src={userShifts[index].shiftImg} />
       <Info>
         <ShiftName style={{color: `${userShifts[index].shiftType == "Night"? "white":"inherit"}`}}>{userShifts[index].shiftName}</ShiftName>
         <ShiftTime style={{color: `${userShifts[index].shiftType == "Night"? "white":"inherit"}`}}>{userShifts[index].shiftTime}</ShiftTime>
       </Info>
       <Team>
       <ShiftType>{userShifts[index].shiftType}</ShiftType>
      { positions[index].user? <EmployeeCard >
     <Image src={positions[index].user.userImg} alt=""  style={{width:50,height:50,borderRadius:50}}  />
     <span style={{marginLeft:20}}>{positions[index].user.name}</span>
     <Tag color={`${positions[index].user.role.name == "admin"? "red": positions[index].user.role.name == "saler" ?"green":"blue" }`}  style={{marginLeft:20}}>{positions[index].user.role.name}</Tag>
    </EmployeeCard> : (userRole == "saler"? (requests.find(request=> request.userShiftId == positions[index].userShiftId)? <h4>You already applied for this shift</h4>: <StyledButton onClick={()=>handleApply(positions[index].userShiftId)}>Apply</StyledButton>) : <h2>Empty</h2>)} 
    {positions[index].user && renderCheckinCheckoutButtons(index)}
    <Status color={applyStatus(selectedValue[index].status)}> <span>Status: </span>{selectedValue[index].status}</Status>
       </Team>
       
       </Card>
        }):<Card>No Shift Available Here</Card>}1
        </Left>
        <Right>{selectedValue ? selectedValue.slice(3).map((item,index)=>{

          index+=3;
          return  <Card key={userShifts[index].id}  style={{height:170,margin: 20}}>
          <Img  alt="" src={userShifts[index].shiftImg} />
        <Info>
          <ShiftName style={{color: `${userShifts[index].shiftType == "Night"? "white":"inherit"}`}}>{userShifts[index].shiftName}</ShiftName>
          <ShiftTime style={{color: `${userShifts[index].shiftType == "Night"? "white":"inherit"}`}}>{userShifts[index].shiftTime}</ShiftTime>
        </Info>
       <Team>
       <ShiftType>{userShifts[index].shiftType}</ShiftType>
      { positions[index].user ?<> <EmployeeCard >
     <Image src={positions[index].user.userImg} alt=""  style={{width:50,height:50,borderRadius:50}}  />
     <span style={{marginLeft:20}}>{positions[index].user.name}</span>
     <Tag color={`${positions[index].user.role.name == "admin"? "red": positions[index].user.role.name == "saler" ?"green":"blue" }`}  style={{marginLeft:20}}>{positions[index].user.role.name}</Tag>
    </EmployeeCard>
    <Status color={applyStatus(selectedValue[index].status)}> <span>Status: </span>{selectedValue[index].status}</Status>
      </>
     : userRole == "guard" ? <StyledButton  onClick={()=>handleApply(positions[index].userShiftId)}>Apply</StyledButton> : <h2>Empty</h2>
    
    } 
   {userId == positions[index]?.user?.userId &&<ButtonContainer> <StyledButton type='primary'>Checkin</StyledButton> {selectedValue[index].status == "not yet" && <StyledButton type='primary'>I can't do it </StyledButton>}</ButtonContainer>  }
       </Team>  
      
       </Card>
        }):<Card>No Shift Available Here</Card>}</Right>
      <ActionGroup setOpen={setOpen} positions={positions}  setLoaded={setLoaded}/>
     </ModalContainer>
   
      </StyledModal>
  );
};
export default ScheduleComponent; 