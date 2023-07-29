/* eslint-disable react/prop-types */

import { Image } from 'antd'
import {  Body, Email, EmployeeCard, HeroWrapper, Name, Wrapper } from './style'

function EmployeeRank({data}) {
  return (
    <Wrapper style={{marginTop: '50px', marginBottom: '50px',flexDirection:'column',width:'49%',justifyContent:"flex-start"}}>
        <HeroWrapper> <h2>Our Top Employees
        </h2></HeroWrapper>
       {data &&  <Body style={{background:"#fff",padding:"0 20px",height:"100%"}}>
            {data.userRank.map(item =>{
            
            return(<EmployeeCard key={item[0].user.userId}>
                <div style={{display:'flex',justifyContent:'space-between'}}><Image src={item[0]?.user?.userImg} />
                    <div>
                        <Name>{item[0].user.name}</Name>
                        <Email>{item[0].user.email}</Email>
                    </div></div>
                    <div>{Math.floor(item[1].totalRevenue/data.allTimeRevenue[0].revenue*100)}%</div>
                    
            </EmployeeCard>)})}
        </Body>}
       
    </Wrapper>
  )
}

export default EmployeeRank