
import { Image } from 'antd'
import {  Body, Email, EmployeeCard, HeroWrapper, Name, Wrapper } from './style'

import { useEffect, useState } from 'react';
import productApi from '../../utils/api/productApi';
function TicketList
() {
  const [data,setData]=useState(null);
  const token=localStorage.getItem("Authorization");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await productApi.getAllTicket(token);
    
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [token]);
  return (
    <Wrapper style={{marginTop: '50px', marginBottom: '50px',flexDirection:'column',width:'49%'}}>
       {data && <><HeroWrapper> <h2>Latest Ticket
        </h2></HeroWrapper>
       
        <Body style={{background:"#fff",padding:"0 20px"}}>
            {data.unprocessedTickets.slice(0,5).map(item =>{
            
            return(<EmployeeCard key={item.ticket.ticketId}>
                <div style={{display:'flex',justifyContent:'space-between'}}><Image src={item.ticket.user.userImg} />
                    <div>
                        <Name>{item.ticket.title}</Name>
                        <Email>{item.ticket.user.name}</Email>
                    </div></div>
                    <div>View</div>
                    
            </EmployeeCard>)})}
        </Body></>} 
    </Wrapper>
  )
}

export default TicketList
