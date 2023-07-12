import { useState } from 'react'
import { Row } from "antd"
import EmployeeRank from "./EmployeeRank"
import LineChart from "./Line"
import CategoryChart from "./PieChart"
import ProductRank from "./ProductRank"
import { Container, Hero, Summary, Card, Header, Number, Action,IconWrapper, ChartContainer, Wrapper, Left, Right, Commercial, Info } from "./style"
import Scope from "../../assets/image/scope.png"

import { 
  BsFillGridFill,
 } from "react-icons/Bs"
import TicketList from "./TicketRank"
import OrderTable from "./OrderTable"
import { useEffect } from "react"
import productApi from "../../utils/api/productApi"
import AnimatedNumbers from 'react-animated-numbers'
import DayTimeAnalytic from './DayTimeAnalytic'

function Revenue() {
  const [data,setData]=useState(null);
  const [openAnalytic,setOpenAnalytic]=useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await productApi.dashboard();
        console.log(response.data.data);
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <Container>
      {data!=null &&<><Hero>DashBoard</Hero>
      <Wrapper>
        <Left>
        <Summary>
        <Card>
          <Header>
         <IconWrapper><BsFillGridFill fontSize={24}/></IconWrapper>
         <Info>All Time Revenue</Info>
          </Header>
         <Number><AnimatedNumbers
        animateToNumber={ data.allTimeRevenue[0].revenue||"100000"}
        fontStyle={{ fontSize: '32px' }}
        configs={(number, index) => {
          return { mass: 1, tension: 230 * (index + 1), friction: 140 };
        }}
      ></AnimatedNumbers>
          
         </Number>
         <Action>VNĐ</Action>
        </Card>
        <Card>
          <Header>
          <IconWrapper><BsFillGridFill  fontSize={24}/></IconWrapper>
          <Info >All Time Profit</Info>
          </Header>
         <Number>
         <AnimatedNumbers
        animateToNumber={ data.allTimeRevenue[1].profit||"100000"}
        fontStyle={{ fontSize: '32px' }}
        configs={(number, index) => {
          return { mass: 1, tension: 230 * (index + 1), friction: 140 };
        }}
      ></AnimatedNumbers>
         </Number>
         <Action>VNĐ</Action>
        </Card>
        <Card>
          <Header>
          <IconWrapper><BsFillGridFill  fontSize={24}/></IconWrapper>
          <Info>Product Sold</Info>
          </Header>
         <Number>
         <AnimatedNumbers
        animateToNumber={ data.totalProduct||"200"}
        fontStyle={{ fontSize: '32px' }}
        configs={(number, index) => {
          return { mass: 1, tension: 230 * (index + 1), friction: 140 };
        }}
      ></AnimatedNumbers></Number>
         <Action>Product sold</Action>
        </Card>
         <Card>
          <Header>
          <IconWrapper><BsFillGridFill  fontSize={24}/></IconWrapper>
         <Info>This Month Revenue</Info>
          </Header>
         <Number>
         <AnimatedNumbers
        animateToNumber={ 200000}
        fontStyle={{ fontSize: '32px' }}
        configs={(number, index) => {
          return { mass: 1, tension: 230 * (index + 1), friction: 140 };
        }}
      ></AnimatedNumbers></Number>
         <Action>Product sold</Action>
        </Card>
      </Summary>
      <LineChart/>
      <Row style={{justifyContent:"space-between"}}>
      <EmployeeRank data={data}/>
      <TicketList/>
      </Row>
      
   
        </Left>
        <Right>
          <Commercial onClick={()=>setOpenAnalytic(true)}> 
            <div>
            Daily Insight 
            </div>
            <div>
          <img src= {Scope} alt="scope" />
            </div>
          </Commercial>
          <h2>Category Revenue</h2>
            <CategoryChart/>
            
            <ProductRank data={data}/>
        </Right>
      </Wrapper>
        <DayTimeAnalytic openAnalytic={openAnalytic} setOpenAnalytic={setOpenAnalytic} data={data}/>
      <ChartContainer>
      <OrderTable/>
      </ChartContainer></>}
      
    </Container>
    
  )
}

export default Revenue