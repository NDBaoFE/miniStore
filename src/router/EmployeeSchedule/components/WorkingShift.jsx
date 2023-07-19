/* eslint-disable react/prop-types */


import { Image } from 'antd';
import { EmployeeCard, TimeSlotWrapper } from '../style';
import {  StyledButton, WorkingShiftContainer } from './style'
import { shiftStatus } from '../data';
import useAuth from '../../../utils/useAuth';

function WorkingShift({workingShift}) {
    const {profile}=useAuth();
        const applyStatus = (status) => {
        const matchedItem = Object.values(shiftStatus).find((item) =>
          item.data.includes(status)
        );
        if (matchedItem) {
          return matchedItem.color;
        }
        return "#ff9683"; // Default color if no matching status found
      };
      
       const TimeSlot = ({ shift, onClick }) => {
        
        return (
          <TimeSlotWrapper
          status={applyStatus(shift.status)}
            className={`time-slot `}
            onClick={onClick}
          >{shift.user ?  <EmployeeCard >
            <Image src={shift.user.userImg} alt=""  style={{width:30,height:30,borderRadius:50}}  />
            <span >{shift.user.name} </span>
           
            <div>6am-12am </div>
                {profile.userId == shift.user.userId && (shift.user.IsCheckin != true ? <StyledButton style={{marginLeft:20,marginTop:10}}>Checkin</StyledButton> :<StyledButton style={{marginLeft:20,marginTop:20}}>Checkout</StyledButton> )}
           </EmployeeCard> : <div className="time-slot"> </div> }
           
         
          </TimeSlotWrapper>
        );
      };
  return (
    <WorkingShiftContainer>
        
        <h2>Working Shift</h2>
    {workingShift && <> <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {workingShift.map((slot) => (
                    <TimeSlot
                    workingShift={workingShift}
                      key={slot.id}
                      shift={slot}
                      class="time-slot"
                    />
                  ))}
        </div></>}    
   
    </WorkingShiftContainer>
  )
}

export default WorkingShift