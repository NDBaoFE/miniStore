
import { Image } from 'antd'
import {  Body, Email, EmployeeCard, HeroWrapper, Name, Wrapper } from './style'

import { useEffect, useState } from 'react';
import productApi from '../../utils/api/productApi';
function TicketList
() {
  const [data,setData]=useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await productApi.getAllTicket();
    
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <Wrapper style={{marginTop: '50px', marginBottom: '50px',flexDirection:'column',width:'49%'}}>
       {data && <><HeroWrapper> <h2>Latest Ticket
        </h2></HeroWrapper>
       
        <Body style={{background:"#fff",padding:"0 20px"}}>
            {data.unprocessedTickets.slice(0,5).map(item =>{
            
            return(<EmployeeCard key={item.ticketId}>
                <div style={{display:'flex',justifyContent:'space-between'}}><Image src={item.user.userImg} />
                    <div>
                        <Name>{item.title}</Name>
                        <Email>{item.user.name}</Email>
                    </div></div>
                    <div>View</div>
                    
            </EmployeeCard>)})}
        </Body></>} 
    </Wrapper>
  )
}

export default TicketList
