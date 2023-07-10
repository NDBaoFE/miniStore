/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useState } from "react";
import { instruction} from "./data";
import { ActionHeader, Bar, ButtonContainer, Color, Container, DayCol, Daytime, EmployeeCard, IconWrapper, Info, Instruction, LeftButton, ParentContainer, RightButton, Row, TimeSlotWrapper, Value } from "./style";
import {shiftStatus} from "./data"

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Image, Tag } from "antd";
import { useEffect } from "react";
import productApi from "../../utils/api/productApi";

import ScheduleComponent from "./components/Schedule";
import {AiFillStar} from "react-icons/ai";



const daysOfWeek = [
  {
    id: 0,
    value: "Sunday",
  },
  {
    id: 1,
    value: "Saturday",
  },
  {
    id: 2,
    value: "Friday",
  },
  {
    id: 3,
    value: "Thursday",
  },
  {
    id: 4,
    value: "Wednesday",
  },
  {
    id: 5,
    value: "Tuesday",
  },
  {
    id: 6,
    value: "Monday",
  },
  {
    id: 7,
    value: "pos",
    value0: "Saler",
    value1: "Guard",
  },
];

const Timetable = () => {
  const [userShift, setUserShift] = useState([]);
  const [current, setCurrent ] = useState(0);
  const [workingShift, setWorkingShift ] = useState();
  const [loaded,setLoaded]=useState(false);
  const [selectedValue,setSelectedValue] = useState([]);
  const [open, setOpen] = useState(false);
  const [positions,setPositions]=useState([]);
  const today=new Date();
  var day = String(today.getDate()).padStart(2, "0");
  var month = String(today.getMonth() + 1).padStart(2, "0"); // Month starts from 0 (January is 0)
  var year = today.getFullYear();
  var dateString = day + "/" + month + "/" + year;
  const handleTimeSlotClick = (day, shift) => {
    // Handle time slot click event
  };

  async function fetchData() {
    try {
      const response = await productApi.getUserShift(current);
      
      const newArray = await response.data.data.userShifts.map((item) => {
        const timestamp = item.startTime;
        const date = new Date(timestamp * 1000);
        var day = String(date.getDate()).padStart(2, "0");
        var month = String(date.getMonth() + 1).padStart(2, "0"); // Month starts from 0 (January is 0)
        var year = date.getFullYear();
        var dateString = day + "/" + month + "/" + year;
        return {
          ...item,
          date: dateString
        };
      });
      if(response.data.data.inProgressUserShifts ){
        setWorkingShift( await response.data.data.inProgressUserShifts);
          console.log( await response.data.data.inProgressUserShifts)
      }

  
      const groupedShifts = Object.values(
        newArray.reduce((groups, shift) => {
          const date = shift.date;
          if (!groups[date]) {
            groups[date] = [];
          }
          groups[date].push(shift);
          return groups;
        }, {})
      );
  
      setUserShift(groupedShifts.reverse());
      

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [current,loaded]);
  
  
const handleColClick=(userShift)=>{
    const updatedDayUserShift = userShift.map((item, index) => ({
      ...item,
      index: index + 1,
    }));
  setSelectedValue(updatedDayUserShift);
  const extractedDataArray = updatedDayUserShift.map((item) => {
    const { userShiftId, user} = item;

    return {
        userShiftId,
      user: user,
      
    };
  });

  setPositions(extractedDataArray);

  setOpen(true);
}


  return  <> <div> <Container>
  <Instruction>

      {instruction.map((item)=>{
        return(
          <Row key={item.id}>
          <Color color={item.color}></Color>
          <Value>{item.title}</Value>
          </Row>
        )

      })}
     

  </Instruction>
  <div className="timetable" style={{ color: "black" }}>
    <ActionHeader>
      { userShift[0] && <Daytime>{userShift[userShift.length-1][0]?.date}-{userShift[0][0]?.date}</Daytime>}
      <ButtonContainer>
        <LeftButton type="primary" onClick={()=>setCurrent(current-1)}>
          <AiOutlineLeft />
        </LeftButton>
        <RightButton type="primary" onClick={()=>setCurrent(current+1)}>
          <AiOutlineRight />
        </RightButton>
      </ButtonContainer>
    </ActionHeader>
    <div className="col">
      {daysOfWeek.map((day) => {
        if (day.id !== 7) {
        
          const shifts = userShift[day.id]?.slice(0,3) || [];
          return (
            <DayCol key={day.id} className="day-column" onClick={()=>handleColClick(userShift[day.id])}>
              <div className="day-cell">{day.value}</div>
              <div className="shift-column">
                {shifts.map((slot) => (
                  <TimeSlot
                    key={slot.userShiftId}
                    shift={slot}
                    isOccupied={slot.isOccupied}
                    onClick={() => handleTimeSlotClick(day.id, slot.shift)}
                    workingShift={workingShift}
                  />
                ))}
              </div>
            </DayCol>
          );
        } else {
          return (
            <ParentContainer key={day.id}>
              <Bar>{day.value0}</Bar>
            </ParentContainer>
          );
        }
      })}
    </div>
    <div className="col">
      {daysOfWeek.map((day) => {
        if (day.id !== 7) {
          const shifts = userShift[day.id]?.slice(3) || [];
          return (
            <DayCol key={day.id} className="day-column" onClick={()=>handleColClick(userShift[day.id])}>
              <div className="shift-column">
                {/* Render Guard time slots */}
                {shifts
                  .map((slot) => (
                    <TimeSlot
                      key={slot.id}
                      shift={slot}
                      isOccupied={slot.isOccupied}
                      onClick={() => handleTimeSlotClick(day.id, slot.shift)}
                      workingShift={workingShift}
                    />
                  ))}
              </div>
            </DayCol>
          );
        } else {
          return (
            <ParentContainer key={day.id}>
              <Bar>{day.value1}</Bar>
            </ParentContainer>
          );
        }
      })}
    </div>
  </div>
</Container>
</div>
<ScheduleComponent open={open}  setOpen={setOpen} selectedValue={selectedValue} positions={positions} setPositions={setPositions}  setLoaded={setLoaded} /></> ;
};

const applyStatus = (status) => {
  const matchedItem = Object.values(shiftStatus).find((item) =>
    item.data.includes(status)
  );
  if (matchedItem) {
    return matchedItem.color;
  }
  return "#ff9683"; // Default color if no matching status found
};

const TimeSlot = ({ shift, onClick,workingShift }) => {
  let isNow=false;
   if(workingShift.filter((item ) => item.userShiftId == shift.userShiftId).length> 0){
   isNow=true;
   }
  return (
    <TimeSlotWrapper
    status={applyStatus(shift.status)}
      className={`time-slot `}
      onClick={onClick}
    >{shift.user ?  <EmployeeCard >
      <Image src={shift.user.userImg} alt=""  style={{width:30,height:30,borderRadius:50}}  />
      <span >{shift.user.name} </span>
      <div>6am-12am </div>
     </EmployeeCard> : <div className="time-slot"> </div> }
     
     {isNow  && <IconWrapper> <AiFillStar/></IconWrapper>}
    </TimeSlotWrapper>
  );
};

export default Timetable;
