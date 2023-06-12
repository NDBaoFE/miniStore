/* eslint-disable no-case-declarations */
import {    Calendar, Image, Tag } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Card, CardWrapper, Coefficient, Container, Date, Img, Info, ModalContainer,
   ShiftName, ShiftTime, ShiftType, StyledModal, Team, Wrapper,PositionList,PositionSlot,EmployeeList,Title,EmployeeCard
   } from './style';
import { data } from './data';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { scheduleSelector } from './slice/selector';

import {FiTrash}   from 'react-icons/fi';
import { useSelector } from 'react-redux';


import {toastError,toastSuccess} from "../../../components/Toast"

const ScheduleComponent = () => {
  const {userList}=useSelector(scheduleSelector);
  console.log(userList);
  const [employees, setEmployees] = useState(userList);

  const [morningPos, setMorningPos] = useState([
    { id: '1', title: 'Saler', employeeId: null },
    { id: '2', title: 'Guard', employeeId: null},
  ]);
  const [afternoonPos, setAfternoonPos] = useState([
    { id: '1', title: 'Saler', employeeId: null },
    { id: '2', title: 'Guard', employeeId: null },
  ]);
  const [nightPos, setNightPos] = useState([
    { id: '1', title: 'Saler', employeeId: null },
    { id: '2', title: 'Guard', employeeId: null },
  ]);
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const draggableId = source.droppableId;
    const droppableId = destination.droppableId;
    const draggableIndex = source.index;
    const droppableIndex = destination.index;

    if (draggableId === droppableId) {
      if (draggableId === 'employees') {
        // Reorder employees within the employee list
        const newEmployeeList = Array.from(employees);
        const [removed] = newEmployeeList.splice(draggableIndex, 1);
        newEmployeeList.splice(droppableIndex, 0, removed);
        setEmployees(newEmployeeList);
      }
    } else {
      if (droppableId.startsWith('morningSlot')) {
        // Assign an employee to a position
        const positionIndex = parseInt(droppableId.replace('morningSlot', ''), 10);
        const newPositionList = Array.from(morningPos);
        const employeeId = employees[draggableIndex].userId;
        newPositionList[positionIndex].employeeId = employeeId;
        setMorningPos(newPositionList);
      }
      else if(droppableId.startsWith('afternoonSlot')){
        const positionIndex = parseInt(droppableId.replace('afternoonSlot', ''), 10);
        const newPositionList = Array.from(afternoonPos);
        const employeeId = employees[draggableIndex].userId;
        newPositionList[positionIndex].employeeId = employeeId;
        setAfternoonPos(newPositionList);
      }else{
        const positionIndex = parseInt(droppableId.replace('nightSlot', ''), 10);
        const newPositionList = Array.from(nightPos);
        const employeeId = employees[draggableIndex].userId;
        newPositionList[positionIndex].employeeId = employeeId;
        setNightPos(newPositionList);
      }
    }
  };
  const [value, setValue] = useState(() => dayjs());
  const [selectedValue, setSelectedValue] = useState(() => dayjs());
  const [open, setOpen] = useState(false);
  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
    setOpen(true);
  };
  const onPanelChange = (newValue) => {
    setValue(newValue);
  };
  const handleCancel = () => {
    setOpen(false);
  }
  const handleDelete = ( slotType, slotIndex) => {
    // Update the state based on the slotType
    try{ switch (slotType) {
      case 'morning':
        const updatedMorningPos = [...morningPos];
        updatedMorningPos[slotIndex].employeeId = null; // Remove the employee from the slot
        setMorningPos(updatedMorningPos);
        toastSuccess("Remove Employee Successfully");
        break;
      case 'afternoon':
        const updatedAfternoonPos = [...afternoonPos];
        updatedAfternoonPos[slotIndex].employeeId = null; // Remove the employee from the slot
        setAfternoonPos(updatedAfternoonPos);
        toastSuccess("Remove Employee Successfully");
        break;
      case 'night':
        const updatedNightPos = [...nightPos];
        updatedNightPos[slotIndex].employeeId = null; // Remove the employee from the slot
        setNightPos(updatedNightPos);
        toastSuccess("Remove Employee Successfully");
        break;
      default:
        break;
        
    }}catch{
      toastError("Remove Unsuccessfully")
    }
   
  };
  return (
    <Container>
      <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
      <StyledModal
      open={open}
      footer={null}
      onCancel={handleCancel}
      centered
      closable={true}
      width={1400}
      
    >
      
      <ModalContainer>
      <DragDropContext onDragEnd={onDragEnd}>
     <Wrapper>
     
      <CardWrapper>
        {data.map((item)=>{
//determine the cols for each of the shift 
const positions = item.shiftName === 'Shift I' ? morningPos :
item.shiftName === 'Shift II' ? afternoonPos :
item.shiftName === 'Shift III' ? nightPos : [];



          return <Card key={item.shiftName}>
             <Img  alt="" src={item.shiftImg} />
          <Info>
            <ShiftName>{item.shiftName}</ShiftName>
            <ShiftType>{item.shiftType}</ShiftType>
            <Date>{selectedValue?.format('DD/MM/YYYY')}</Date>
            <ShiftTime>{item.shiftTime}</ShiftTime>
          </Info>
          <Coefficient>Coefficient: {item.coefficient}</Coefficient>
          <Team>
          <Droppable droppableId={`${item.droppableId}`}>
          {(provided) => (
            <PositionList ref={provided.innerRef} {...provided.droppableProps}>
              {positions.map((position, index) => (
                <Droppable key={position.id} droppableId={`${item.ItemDroppableId}${index}`}>
                  {(provided, snapshot) => (
                    <PositionSlot
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      isDragging={snapshot.isDragging}
                      employeeId={position.employeeId}
                    >
                      {position.title} :
                      {position.employeeId !== null ? employees.find((e) => e.userId === position.employeeId)?.userName
                        : ' '}
                       <FiTrash  onClick={()=> handleDelete(item.droppableId,index)}/>
                      {provided.placeholder}
                    </PositionSlot>
                  )}
                </Droppable>
              ))}
            </PositionList>
          )}
        </Droppable>
          </Team>
          </Card>
        })}
        
      </CardWrapper>
     </Wrapper>
     <Droppable droppableId="employees" >
          {(provided) => (
            <EmployeeList ref={provided.innerRef} {...provided.droppableProps} style={{width:300}}>
              <Title>Employee List</Title>
              {employees.map((employee, index) => (
                <Draggable key={employee.userId} draggableId={employee.userName} index={index}>
                  {(provided) => (
                    <EmployeeCard
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Image src={employee.userImg} alt=""  style={{width:50,height:50,borderRadius:50}}  />
                      <span style={{marginLeft:20}}>{employee.userName}</span>
                     <Tag color={`${employee.role == "admin"? "red": employee.role == "Saler"?"green":"blue" }`}  style={{marginLeft:20}}>{employee.role}</Tag>
                    </EmployeeCard>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </EmployeeList>
          )}
        </Droppable>

        </DragDropContext>
     </ModalContainer>
    </StyledModal>
    </Container>
  );
};
export default ScheduleComponent; 