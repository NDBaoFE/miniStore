/* eslint-disable react/prop-types */
import {  StyledModal } from "./components/style"

import Late from "../../assets/image/late.svg"
import { LateModal, Row } from "./Banner-style"
import Button from "../../components/Button"
function Banner({openInstruction,setOpenInstruction}) {
  return (
    <StyledModal visible={openInstruction} onCancel={()=>{setOpenInstruction(false)}} 
     okButtonProps={{ style: { display: 'none' } }}
    cancelButtonProps={{ style: { display: 'none' } }}
    width={800}
    height={600}
    >
    <LateModal>
    <h2 style={{fontSize:40}}>Your Shift are comming </h2>
    <img src={Late} alt="late" />


      <div>
      <h2>
        Ready to checkin ? 
      </h2>
     <Button title="Checkin" onClick={()=>{console.log("si")}} style={{width:"100px",height:"40px",fontSize:"20px"}}/>
    
      </div>
      
 
    </LateModal>
  
    </StyledModal>
  )
}

export default Banner