/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useState } from "react";
import { instruction, userShifts,shiftStatus } from "./data";
import { ActionHeader, Bar, ButtonContainer, Color, Container, DayCol, Daytime, EmployeeCard, Header, IconWrapper, Info, Instruction, LeftButton, ParentContainer, RightButton, Row, TimeSlotWrapper, Value } from "./style";



import { AiOutlineLeft, AiOutlineRight,AiFillStar } from "react-icons/ai";
import { Image, Modal, Tag } from "antd";
import { useEffect } from "react";
import productApi from "../../utils/api/productApi";

import ScheduleComponent from "./components/Schedule";
import useAuth from "../../utils/useAuth";
import { StyledButton } from "./components/style";
import { useRef } from "react";
import ApplyTour from "./components/Instruction";
import Draggable from 'react-draggable';
import CheckinModal from "./CheckinModal";
import RequestTable from "./RequestTable";
import localStorageUtils from "../../utils/localStorageUtils";
import Banner from "./Banner";




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

const EmployeeTimetable = () => {
  const [userShift, setUserShift] = useState([]);
  const [current, setCurrent ] = useState(0);
  const [workingShift, setWorkingShift ] = useState();
  const {userRole,profile}=useAuth();
  const [loaded,setLoaded]=useState(false);
  const [selectedValue,setSelectedValue] = useState([]);
  const [open, setOpen] = useState(false);
  const [positions,setPositions]=useState([]);
  const [openTour,setOpenTour] = useState(false);
  const [checkinShift,setCheckinShift]=useState();
  const [openCheckin,setOpenCheckin]=useState(false);
  const [requests,setRequests]=useState([]);
  const [openInstruction,setOpenInstruction]=useState(true);
  const ref1=useRef(null);
  const ref2=useRef(null);
  const ref3=useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const today=new Date();
  var day = String(today.getDate()).padStart(2, "0");
  var month = String(today.getMonth() + 1).padStart(2, "0"); // Month starts from 0 (January is 0)
  var year = today.getFullYear();
  var dateString = day + "/" + month + "/" + year;
  const handleTimeSlotClick = (day, shift) => {
    // Handle time slot click event
  };
const token=localStorageUtils.getItem("Authorization");
  async function fetchData() {
    try {
      const response = await productApi.getUserShift(current,token);
      
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
      if(response.data.data.shiftRequests.length > 0 ){
        setRequests( await response.data.data.shiftRequests);
       
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
  }, [current,loaded,token]);
  
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

const handleDrag = (e, data) => {
  setPosition({ x: data.lastX, y: data.lastY });
};

  return  <> <div> <Container>
     

      <Draggable  position={{x:position.x,y:position.y}} onDrag={handleDrag}>
  <Instruction ref={ref1}>
      <Header></Header>
      {instruction.map((item)=>{
        return(
          <Row key={item.id}>
          <Color color={item.color}></Color>
          <Value>{item.title}</Value>
          </Row>
        )

      })}
     

  </Instruction>
  </Draggable>

     { workingShift && workingShift.find((item)=>item.userId==profile.userId) && 
     <Banner openInstruction={openInstruction}  setOpenInstruction={setOpenInstruction} 
     workingShift={workingShift} profile={profile}  setCheckinShift={setCheckinShift} setOpenCheckin={setOpenCheckin}/>
    
     } 
      <CheckinModal openCheckin={openCheckin} setOpenCheckin={setOpenCheckin} checkinShift={checkinShift} type={true}  setLoaded={setLoaded} loaded={loaded}/>
  <div className="timetable" style={{ color: "black" }} ref={ref3} >
    <ActionHeader ref={ref2}>

      { userShift[0] && <Daytime>{userShift[userShift.length-1][0]?.date}-{userShift[0][0]?.date}</Daytime>}
      <ButtonContainer>
      
        <StyledButton type="primary" onClick={()=>setOpenTour(true)}>How ?</StyledButton>
        <LeftButton type="primary" onClick={()=>setCurrent(current-1)}>
          <AiOutlineLeft />
        </LeftButton>
        <RightButton type="primary" onClick={()=>setCurrent(current+1)}>
          <AiOutlineRight />
        </RightButton>
      </ButtonContainer>
    </ActionHeader>
    <div className="col" >
      {daysOfWeek.map((day) => {
        if (day.id !== 7) {
        
          const shifts = userShift[day.id]?.slice(0,3) || [];
          return (
            <DayCol key={day.id} className="day-column" onClick={()=>handleColClick(userShift[day.id])} >
              <div className="day-cell">{day.value}</div>
              <div className="shift-column" style={{marginBottom:'20px'}}>
                {shifts.map((slot) => (
                  <TimeSlot
                  workingShift={workingShift}
                    key={slot.userShiftId}
                    shift={slot}
                    isOccupied={slot.isOccupied}
                    onClick={() => handleTimeSlotClick(day.id, slot.shift)}
                  />
                ))}
              </div>
            </DayCol>
          );
        } else {
          return (
            <ParentContainer key={day.id} style={{backgroundColor:'#2eb161',height:'280px',marginTop:'50px'}}>
            <Bar >{day.value0}</Bar>
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
            <DayCol key={day.id} className="day-column"  onClick={()=>handleColClick(userShift[day.id])}>
              <div className="shift-column">
                {/* Render Guard time slots */}
                {shifts
                  .map((slot) => (
                    <TimeSlot
                    workingShift={workingShift}
                      key={slot.id}
                      shift={slot}
                      isOccupied={slot.isOccupied}
                      onClick={() => handleTimeSlotClick(day.id, slot.shift)}
                    />
                  ))}
              </div>
            </DayCol>
          );
        } else {
          return (
            <ParentContainer key={day.id} style={{backgroundColor:'#2eb161',height:'180px',marginTop:'10px'}}>
            <Bar>{day.value1}</Bar>
          </ParentContainer>
          );
        }
      })}
    </div>
  </div>
</Container>
</div>
      {/* <div style={{width:"100%",display:"flex",justifyContent:"center",background:"#fff",marginTop:"20px"}}>
      <WorkingShift workingShift={workingShift}/>
      </div> */}
      
{requests && <RequestTable requests={requests}  />}
<ApplyTour openTour={openTour} setOpenTour={setOpenTour} ref1={ref1} ref2={ref2}  ref3={ref3} />

<ScheduleComponent open={open}  setOpen={setOpen} selectedValue={selectedValue} positions={positions} setPositions={setPositions}  setLoaded={setLoaded} loaded={loaded} requests={requests}  openCheckin={openCheckin} setOpenCheckin={setOpenCheckin}/></> ;
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

export const TimeSlot = ({ shift, onClick,workingShift }) => {
  let isNow=false;
   if(workingShift.filter((item ) => item.userShiftId == shift.userShiftId).length> 0){
   isNow=true;
}
  return (
    <TimeSlotWrapper
    status={applyStatus(shift.status)}
    isNow={isNow}
      className={`time-slot `}
      onClick={onClick}
    >{shift.user ?  <EmployeeCard >
      <Image src={shift.user.userImg} alt=""  style={{width:30,height:30,borderRadius:50}}  />
      <span >{shift.user.name} </span>
     
      <div>{`${shift.shift.startWorkHour}:00 - ${shift.shift.endWorkHour}:00`}</div>
    
     </EmployeeCard> : <div className="time-slot"> </div> }
     
 
    </TimeSlotWrapper>
  );
};

export default EmployeeTimetable;
