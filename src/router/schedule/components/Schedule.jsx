/* eslint-disable no-case-declarations */
import {    Calendar, Image, Tag } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import {  Card, Img, Info,
  ShiftName,
  ShiftTime,
  ShiftType,
  
  Team
   } from './cardStyle';
import {ModalContainer ,StyledModal,Container, EmployeeCard, Left, Right} from "./style"

import productApi from '../../../utils/api/productApi';
import ActionGroup from "./ActionGroup"
import AssignModal from './AssignModal';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { userShifts } from './data';
const ScheduleComponent = () => {
  const [openModal,setOpenModal] = useState(false);
  const [userShift,setUserShift] = useState([]);
  
  useEffect(() => {

    async function fetchData() {
        try {
            const response = await productApi.getUserShift(0);
           
             
              const newArray=  await response.data.data.map((item) => {
                const timestamp = item.startTime;
                const date = new Date(timestamp * 1000);
                var day = String(date.getDate()).padStart(2, "0");
                var month = String(date.getMonth() + 1).padStart(2, "0"); // Month starts from 0 (January is 0)
                var year = date.getFullYear();
                var dateString = day + "/" + month + "/" + year;
                console.log(dateString);
                return {
                  ...item,
                  date: dateString
                };
              });
                setUserShift ( await newArray);
                
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
}, []);



  console.log(userShift);
  const [value, setValue] = useState(() => dayjs());
  const [selectedValue, setSelectedValue] = useState([]);
  const [positions,setPositions]=useState([]);
  const [open, setOpen] = useState(false);
  const onSelect = (newValue) => {
  
    const dayUserShift=userShift.filter((item)=>{
      return item.date === newValue.format('DD/MM/YYYY');
    
    });

    
    // Add index value to each object in the dayUserShift array
    const updatedDayUserShift = dayUserShift.map((item, index) => ({
      ...item,
      index: index + 1,
    }));
    setSelectedValue(updatedDayUserShift);
    console.log(selectedValue);
    const extractedDataArray = updatedDayUserShift.map((item) => {
      const { userShiftId, user} = item;
    
    
      return {
          userShiftId,
        user: user,
        
      };
    });
    setPositions(extractedDataArray);

    setOpen(true);
  };
 
  
 
  const onPanelChange = (newValue) => {
    setValue(newValue);
  };
  const handleCancel = () => {
    setOpen(false);
  }
    
  return (
    <Container>
      <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
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
          console.log(userShifts[index].shiftName == "Night");
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
       </Team>
       </Card>
        }):<Card>No Shift Available Here</Card>}</Left>
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
    </EmployeeCard> : <h2>Empty</h2>} 
       </Team>
       </Card>
        }):<Card>No Shift Available Here</Card>}</Right>
      <ActionGroup setOpen={setOpen} positions={positions}  setOpenModal={setOpenModal}/>
     </ModalContainer>
     <DndProvider backend={HTML5Backend}>
     <AssignModal openModal={openModal} setOpenModal={setOpenModal}  selectedValue={selectedValue} setPositions={setPositions} positions={positions}/>
        </DndProvider>
      </StyledModal>
    
    </Container>
  );
};
export default ScheduleComponent; 