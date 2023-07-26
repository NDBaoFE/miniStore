/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import {  useState } from 'react';


import { useEffect } from 'react';
import { toastError, toastSuccess } from '../../components/Toast';

import useAuth from '../../utils/useAuth';
import { Body, Container, Description, Employee, Header, NotiModal, Row, StyledButton, Title } from './style'
import { Image } from 'antd'
import { useNavigate } from 'react-router-dom';
import productApi from '../../utils/api/productApi';
function TicketDetail() {
    const navigate=useNavigate();
    const params=useParams();
    const [detail,setDetail]=useState();
    const {profile,userRole}=useAuth();
    console.log(userRole);
    console.log(profile);
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
          title: 'You sure you want to decline for this ticket ?',
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
            <Image src={detail.user.userImg}/>
             
                <Employee>
                <Row style={{alignItems:"center"}}>
                <h4>{detail.user.name}</h4>
                <div>{`<${detail.user.email}>`}</div>
                </Row>
                <Row style={{alignItems:"center",marginLeft:"14px"}}>
                <div style={{fontSize:"10px"}}>from a while ago</div>
                </Row>
                </Employee>
            </Row>}  
        </Header>
        {  detail && <Body>
            
            <Title>{detail.title}</Title>
            
            <Description style={{textAlign:"justify"}}>
            <Row style={{justifyContent:"space-between"}}>
            <h3>
                Start-time :{new Date(detail.startTime*1000).toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
     
      })}
            </h3>
            <h3>
                End-time : {new Date(detail.endTime*1000).toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
       
      })}
            </h3>
            </Row>
               {detail.description} 
            </Description>
            {userRole == 'admin' && detail.isApproved == null && <Row style={{justifyContent:"space-around",marginTop:"60px" ,padding: "0 150px"}}>
                <StyledButton onClick={handleDecline} >Decline</StyledButton>
                <StyledButton type="primary" onClick={handleApply}>Approve</StyledButton>
            </Row>}
            
        </Body>}
       
    </Container>
  )
}

export default TicketDetail