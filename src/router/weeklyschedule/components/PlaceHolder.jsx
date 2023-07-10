/* eslint-disable react/prop-types */

import { useDrop } from 'react-dnd';
import { Card, Coefficient, Date, Img, Info, ShiftName, ShiftTime, ShiftType, Team } from './style';
import { userShifts } from './data';
import Employee from './Employee';
const Placeholder = ({ onDrop,currentShift,position }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'employee',
    drop: (item) => onDrop(item,currentShift),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  const backgroundColor = isActive ? 'lightgreen' : 'white';
  const index=currentShift.index-1;
  return (
    <Card key={userShifts[index].shiftName} >
             <Img  alt="" src={userShifts[index].shiftImg} />
          <Info>
            <ShiftName style={{color: `${userShifts[index].shiftType == "Night"? "white":"inherit"}`}}>{userShifts[index].shiftName}</ShiftName>
            <ShiftType style={{color: `${userShifts[index].shiftType == "Night"? "white":"inherit"}`}}>{userShifts[index].shiftType}</ShiftType>
            {/* <Date>{selectedValue[0]}</Date> */}
            <Date style={{color: `${userShifts[index].shiftType == "Night"? "white":"inherit"}`}}>{userShifts[index].pos}</Date>
            <ShiftTime style={{color: `${userShifts[index].shiftType == "Night"? "white":"inherit"}`}}>{userShifts[index].shiftTime}</ShiftTime>
          </Info>
          <Coefficient>Coefficient: {userShifts[index].coefficient}</Coefficient>
          <Team>
          
          <div ref={drop} className="placeholder" style={{ backgroundColor }}>
          {position? <Employee  employee={position} className='employee'/> : "Drag Employee Here"}
    
    
    </div>
          </Team>
          </Card>
   
  );
};

export default Placeholder;
