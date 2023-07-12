/* eslint-disable react/prop-types */

import Employee from './Employee';
import Placeholder from './PlaceHolder';
import { StyledModal } from './style';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useRef } from 'react';
const AssignModal = ({ openModal, setOpenModal,selectedValue,setPositions,positions, }) => {
  const sliderRef = useRef(null);
  const handleDrop = (employee,currentShift) => {

    setPositions(positions.map((pos) => {
      if(pos.userShiftId===currentShift.userShiftId){
        return {...pos,user:employee}
      }else{  
        return pos;      }
    }
    ));
   // Check if all positions are full
 
  
    sliderRef.current.slickNext();
   
   
  };


  const handleCancel = () => {
    setOpenModal(false);
  };


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable:false,
  };
  return (
    <StyledModal
      open={openModal}
      footer={null}
      onCancel={handleCancel}
      centered
      closable={true}
      width={900}
      height={700}
      style={{padding:20}}
    >
      <div>
       
       <Slider  ref={sliderRef} prevArrow={<AiOutlineLeft style={{fontSize:"30px"}} scale={2}/>}
       nextArrow={<AiOutlineRight style={{fontSize:30}}/>} {...settings}>
  {selectedValue.map((pos,index)=>{

      return <div key={index}> <div className="container" >
        <Placeholder onDrop={handleDrop} position={positions[index].user} currentShift={pos} className="pos"  />
        <div className="employee-list">
         
         { pos.requestEmployees.length > 0 &&  <>
          <h2> Request List :</h2>
          {pos.requestEmployees.map((employee, index) => (
            <Employee key={index} employee={employee}  draggable={true}/>
              ))}
         </>
          }
          { pos.availableEmployees.length > 0 &&  <>
               <h2>Available List :</h2>
          {pos.availableEmployees.map((employee, index) => (
            <Employee key={index} employee={employee}  draggable={true}/>
              ))}
              </>
          }
              { pos.leaveEmployees.length > 0 &&  <>
          <h2> Unavailable :</h2>
          {pos.leaveEmployees.map((employee, index) => (
            <Employee key={index} employee={employee}  draggable={false}/>
              ))}
         </>
          }
            </div>
            
          </div></div>
     })}
       </Slider>
     </div>
      
    </StyledModal>
  );
};

export default AssignModal;
