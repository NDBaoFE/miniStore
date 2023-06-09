/* eslint-disable no-unused-vars */
import { useState } from 'react';
/* eslint-disable react/prop-types */
import {  Button, Modal } from 'antd';
import UploadFile from '../Import/index';
import { Container, Hero, Left, Right, Section, Step, Text } from './style';
import  Import from "../../../../assets/image/Import.png"
const CustomModal = ({ setOpen, open,setOpenImportList }) => {
    const [openUpload, setOpenUpload] = useState(false);
const steps=[
    {id:1,name:"Download template with examples",action:true},
    {id:2,name:"Add your products data, one per line",description:"You can add up to 10 products per line"},
    {id:3,name:"Send the file",description:"Then just check if everything is right, and that's it!"},
]

  const handleCancel=()=>{
    setOpen(false);
  
  }

  return (
    <Modal
      open={open}
      footer={null}
      onCancel={handleCancel}
      centered
      closable={true}
      width={800}
    >
         <Hero>Import products</Hero>
    <Container>
       
        <Left>
            <img src={Import} alt="Import" />
        </Left>
        <Right>
       {steps.map((step)=>{
        return(
            <Step key={step.id}>
                <Section> 
                    <div>{step.id}</div>
                <Text>  <h2>{step.name}</h2>
                        <h3>{step.description}</h3></Text>
                        
                </Section>
               {step.action &&  <Button type="primary" onClick={()=>{setOpenImportList(true)}}>Export Template</Button>}
              
            </Step>
        )
       })}
        </Right>
        
    </Container>
       <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>  <Button type="primary" onClick={() => setOpenUpload(true)}>Import</Button></div>
  
   
       <UploadFile openUpload={openUpload} setOpenUpload={setOpenUpload} ></UploadFile>
    </Modal>
  );
};

export default CustomModal;
