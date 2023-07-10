
import { Image } from 'antd'
import {  Body, Email, EmployeeCard, HeroWrapper, Name, Wrapper } from './style'
import { employees } from './data'
function TicketList
() {
  return (
    <Wrapper style={{marginTop: '50px', marginBottom: '50px',flexDirection:'column',width:'49%'}}>
        <HeroWrapper> <h2>Latest Ticket
        </h2></HeroWrapper>
       
        <Body style={{background:"#fff",padding:"0 20px"}}>
            {employees.map(item =>{
            
            return(<EmployeeCard key={item.id}>
                <div style={{display:'flex',justifyContent:'space-between'}}><Image src={item.image} />
                    <div>
                        <Name>{item.name}</Name>
                        <Email>{item.email}</Email>
                    </div></div>
                    <div>40%</div>
                    
            </EmployeeCard>)})}
        </Body>
    </Wrapper>
  )
}

export default TicketList
