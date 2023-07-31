/* eslint-disable react/prop-types */

import { StyledModal } from "./components/style";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { FocusBtn, Slide } from "./style";

import Rfid from "../../assets/image/rfid.jpg"
import {  useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { themes } from "../../utils/theme";
import { toastError, toastSuccess } from "../../components/Toast";

import productApi from "../../utils/api/productApi";
import payslip from "../../utils/api/payslipApi";

const CheckinModal = ({ openCheckin,setOpenCheckin,checkinShift,type,setLoaded,loaded,open,setOpen}) => {
    const inputRef = useRef(null);
    const [isFocus,setFocus] = useState(false);
    const [success, setSuccess] = useState(false);
    const [greeny, setGreeny] = useState(false);
    const [isFail,setFail] = useState(false);
  const [input,setInput]=useState("");
    useEffect(() => {
      if (openCheckin && inputRef.current) {
        inputRef.current.focus();
      }
    }, [openCheckin]);

  const handleCancel = () => {
    setOpenCheckin(false);
    setSuccess(false);
    setGreeny(false);
    setFocus(false);
    setFail(false);
  };

  const handleInputChange = async (event,checkinShift) => {
    const input = event.target.value;
    setInput(input);
    
    if (input.length === 8) {
      event.target.value = ''; // Clear the input field
      const token=localStorage.getItem("Authorization");
    if( checkinShift?.user?.rfid == input){
      if(type ==true ){
        const res= await productApi.checkin(checkinShift.userShiftId,token);
        if(res.data.status == 200){
          setTimeout(() => {
            setSuccess(true);
          setGreeny(true);
          toastSuccess("You have successfully checked in");
        
        }, 1000);
        setTimeout(() => {
           setLoaded(!loaded);
           setOpenCheckin(false);
          setSuccess(false);
      }, 2000);
      setTimeout(() => {
        setOpen(false);
        }, 3000);

        
        }else{
          setTimeout( async () => {
            setFocus(false);
            setFail(true);
            toastError(res.data.message);
    
          }, 1000);
        }
      }else{
        const res= await productApi.checkout(checkinShift.userShiftId,token);
        if(res.data.status == 200){
          setTimeout(() => {
            setSuccess(true);
          setGreeny(true);
          toastSuccess("You have successfully checked out");
        }, 1000);
        setTimeout(() => {
          setLoaded(!loaded);
          setOpenCheckin(false);
          setSuccess(false);
     }, 2000);
     setTimeout(() => {
      setOpen(false);
      }, 3000);
        
        await payslip.paySalary(token);
        }else{
          setTimeout( async () => {
            setFocus(false);
            setFail(true);
            toastError(res.data.message);
    
          }, 1000);
        }
      }
      
      
    }else{
      setTimeout(() => {
        setFocus(false);
        setFail(true);
        toastError("Wrong ID Card , Please use the right one ");

      }, 1000);
    }
     
   
      
    
    
    }
  }
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable:false,
  };
  const handleFocusBtn=()=>{
    if(isFocus == false ){
      setGreeny(false);
      inputRef.current.focus();
      setFail(false);
      setFocus(!isFocus);
    }
    if(isFocus == true ){
      setGreeny(false);
      setFail(false);
      setFocus(!isFocus);
    }
   setInput("");

   
    

  }
  const applyColor=(status)=>{

      return status ? themes.colors.primary : "#FF6961";
  }
  return (
    <StyledModal
      open={openCheckin}
      footer={null}
      onCancel={handleCancel}
      centered
      closable={true}
      width={900}
      height={700}
      style={{padding:20}}
    >    
      {checkinShift && <Slider   prevArrow={<AiOutlineLeft style={{fontSize:"30px"}} scale={2}/>}
       nextArrow={<AiOutlineRight style={{fontSize:30}}/>} {...settings}>
        <Slide>
          { checkinShift && <h3>{checkinShift.shift.type}</h3>} 
            <img src={Rfid} height={400} style={{marginBottom: "40px"}} />
            <h5>{type == true ? "Checkin Section" : "Checkout Section" }</h5>
          
        </Slide>
        <Slide>


      <input
        value={input}
        ref={inputRef}
         type="password"
        onChange={()=>handleInputChange(event,checkinShift)}
         style={{ position: 'absolute', left: '-9999px' }} // Hide the input field off-screen

      />
      <FocusBtn onClick={handleFocusBtn} status={applyColor(isFocus)} className={success ? 'success' : ''}>
        <h2>{isFocus ? " We are all set , get ready to swipe your card":"Press the button first, wait for the green light to shine"}</h2>
        {greeny && <icon className="greeny" />}
       { isFail && <div className="svg-box" style={{ transform: 'scale(2)' }}>
    <svg className="circular red-stroke">
        <circle className="path" cx="75" cy="75" r="50" fill="none" strokeWidth="5" strokeMiterlimit="10" />
    </svg>
    <svg className="cross red-stroke">
        <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-502.652,-204.518)">
            <path className="first-line" d="M634.087,300.805L673.361,261.53" fill="none" />
        </g>
        <g transform="matrix(-1.28587e-16,-0.79961,0.79961,-1.28587e-16,-204.752,543.031)">
            <path className="second-line" d="M634.087,300.805L673.361,261.53" />
        </g>
    </svg>
</div>

}
      </FocusBtn>
        </Slide>
       </Slider>} 
    </StyledModal>
  );
};

export default CheckinModal;
