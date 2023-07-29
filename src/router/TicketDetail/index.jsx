/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import {  useState } from 'react';


import { useEffect } from 'react';
import { toastError, toastSuccess } from '../../components/Toast';

import useAuth from '../../utils/useAuth';
import { Body, Container, Description, Employee, Header, NotiModal, Row, StyledButton, Title } from './style'
import { Image, Tag } from 'antd'
import { useNavigate } from 'react-router-dom';
import productApi from '../../utils/api/productApi';
import { Card, Img, Info, ShiftName, ShiftTime, ShiftType, Team } from './cardStyle';
import { EmployeeCard } from '../weeklyschedule/style';
import { Status } from '../weeklyschedule/components/style';
function TicketDetail() {
    const navigate=useNavigate();
    const params=useParams();
    const [detail,setDetail]=useState();
    const {profile,userRole}=useAuth();

        const [loaded, setLoaded] = useState(false);
        const token=localStorage.getItem("Authorization");
    useEffect(() => {

        async function fetchData() {
            try {
                const response = await productApi.getTicketDetail(parseInt(params.id),token);
                    console.log(response);
                setDetail(response.data.data);
              
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [loaded,token]);
    const handleApply=()=>{
        NotiModal.confirm({
          maskClosable: true,
          title: 'You sure you want to approve for this ticket ?',
          content: 'Remember , once you submit , you have to deal with the changes in the application',
          okText: 'Confirm',
          cancelText: 'Cancel',
          onOk: async  () => {
            const token=localStorage.getItem("Authorization");
            const res=await  productApi.ticketApproval(parseInt(params.id),true,token);
            if(res.data.status==200){
                toastSuccess("Succesfully");
                navigate("/ticket");
            }else{
                toastError("Error approving this ticket")
            }
            
          },
      });
      }
      const handleDecline= async ()=>{
        NotiModal.confirm({
          maskClosable: true,
          title: 'You sure you want to decline for this ticket ?',
          content: `Remember , once you submit , you can't change the application status again`,
          okText: 'Confirm',
          cancelText: 'Cancel',
          
          onOk: async () => {
            const token=localStorage.getItem("Authorization");
            const response=await productApi.ticketApprove(parseInt(params.id),false,token);
            if(response.data.status==200){
                toastSuccess("Succesfully");
                navigate("/ticket");
            }else{
                toastError("Error declining this ticket")
            }
          },
      });
      }
  return (
    <Container>
        <Header>
            <Row style={{marginBottom:'30px'}}>
            
            </Row>
          { detail && <Row style={{alignItems:"center"}}>
            <Image src={detail.ticket.user.userImg}/>
             
                <Employee>
                <Row style={{alignItems:"center"}}>
                <h4>{detail.ticket.user.name}</h4>
                <div>{`<${detail.ticket.user.email}>`}</div>
                </Row>
                <Row style={{alignItems:"center",marginLeft:"14px"}}>
                <div style={{fontSize:"10px"}}>from a while ago</div>
                </Row>
                </Employee>
            </Row>}  
        </Header>
        {   detail && <Body>
            <Title>{detail.ticket.ticketTypeId == 1 ? `${detail.ticket.user.name} wanted to Request for a leave`: `${detail.ticket.user.name} had request for  a replacement on the following shift`}</Title>
           <div> <strong>Title</strong>:  {detail.ticket.title}</div>
           <div> <strong>Description</strong>:  {detail.ticket.description}</div>
            <Description style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            {detail.ticket.ticketTypeId == 1 &&
             <Row style={{justifyContent:"space-between"}}>
           
             <h3>
                 Start-time :{new Date(detail.ticket.startTime*1000).toLocaleString('en-GB', {
         day: '2-digit',
         month: '2-digit',
         year: 'numeric',
         hour: '2-digit',
         minute: '2-digit',
      
       })}
             </h3>
             <h3>
                 End-time : {new Date(detail.ticket.endTime*1000).toLocaleString('en-GB', {
         day: '2-digit',
         month: '2-digit',
         year: 'numeric',
         hour: '2-digit',
         minute: '2-digit',
        
       })}
             </h3>
             </Row>
            }
            {detail.ticket.ticketTypeId == 2 && 
            
            <Card  style={{height:170,margin: 20}}>
          <Img  alt="" src={"https://i.imgur.com/eHkCrmR_d.webp?maxwidth=520&shape=thumb&fidelity=high"} />
       <Info>
         <ShiftName style={{color: `${detail.userShift.shift.type == ("saler-night" || "guard-night")? "white":"inherit"}`}}>{detail.userShift.shift.type}</ShiftName>
         <ShiftTime style={{color: `${detail.userShift.shift.type ==("saler-night" || "guard-night")? "white":"inherit"}`}}>{`${detail.userShift.shift.startWorkHour}:00-${detail.userShift.shift.endWorkHour}:00`}</ShiftTime>
       </Info>
       <Team>
      { detail.userShift.user? 
      <>
      <EmployeeCard >
     <Image src={detail.userShift.user.userImg} alt=""  style={{width:50,height:50,borderRadius:50}}  />
     <span style={{marginLeft:20,fontSize:"20px",marginBottom:"10px"}}>{detail.userShift.user.name}</span>
     <Tag color={`${detail.userShift.user.role.name == "admin"? "red": detail.userShift.user.role.name == "saler" ?"green":"blue" }`}  style={{marginLeft:20 ,width:80}}>{detail.userShift.user.role.name}</Tag>
    </EmployeeCard>
      </> : <h2>Empty</h2>} 
   
       </Team>
       
       </Card>
            }
           
              
            </Description>
            {userRole == 'admin' && detail.ticket.isApproved == null && <Row style={{justifyContent:"space-around",marginTop:"60px" ,padding: "0 150px"}}>
                <StyledButton onClick={handleDecline} >Decline</StyledButton>
                <StyledButton type="primary" onClick={handleApply}>Approve</StyledButton>
            </Row>}
            
        </Body>}
       
    </Container>
  )
}

export default TicketDetail