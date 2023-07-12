/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
import {    Image, Tag } from 'antd';
import {  useState } from 'react';
import {  Card, Img, Info,
  ShiftName,
  ShiftTime,
  ShiftType,
  
  Team
   } from './cardStyle';
import {ModalContainer ,StyledModal, EmployeeCard, Left, Right, StyledButton, ButtonContainer} from "./style"


import ActionGroup from "./ActionGroup"
import AssignModal from './AssignModal';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { userShifts } from './data';
import useAuth from '../../../utils/useAuth';
const ScheduleComponent = ({open,setOpen,selectedValue,positions,setPositions,setLoaded}) => {
  const {userRole}=useAuth();
  const [openModal,setOpenModal] = useState(false);



  const handleCancel = () => {
    setOpen(false);
  }
    
  return (
    
      <StyledModal
      open={open}
      footer={null}
      onCancel={handleCancel}
      centered
      closable={true}
      width={1200}
      
    >
      
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
    </EmployeeCard> : <h2>Empty</h2>} 
    {userRole == positions[index]?.user?.role?.name &&<ButtonContainer> <StyledButton type='primary'>Checkin</StyledButton> <StyledButton type='primary'>I can't do it </StyledButton></ButtonContainer>  }
       </Team>
       
       </Card>
        }):<Card>No Shift Available Here</Card>}
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
      { positions[index].user ? <EmployeeCard >
     <Image src={positions[index].user.userImg} alt=""  style={{width:50,height:50,borderRadius:50}}  />
     <span style={{marginLeft:20}}>{positions[index].user.name}</span>
     <Tag color={`${positions[index].user.role.name == "admin"? "red": positions[index].user.role.name == "saler" ?"green":"blue" }`}  style={{marginLeft:20}}>{positions[index].user.role.name}</Tag>
    </EmployeeCard>
      
     : <h2>Empty</h2>
    
    } 
   {userRole == positions[index]?.user?.role?.name &&<ButtonContainer> <StyledButton type='primary'>Edit</StyledButton> <StyledButton type='primary'>I can't do it </StyledButton></ButtonContainer>  }
       </Team>  
      
       </Card>
        }):<Card>No Shift Available Here</Card>}</Right>
      <ActionGroup setOpen={setOpen} positions={positions}  setOpenModal={setOpenModal} setLoaded={setLoaded}/>
     </ModalContainer>
     <DndProvider backend={HTML5Backend}>
     <AssignModal openModal={openModal} setOpenModal={setOpenModal}  selectedValue={selectedValue} setPositions={setPositions} positions={positions} />
        </DndProvider>
      </StyledModal>
  );
};
export default ScheduleComponent; 