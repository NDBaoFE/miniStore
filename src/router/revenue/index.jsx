import { Row } from "antd"
import EmployeeRank from "./EmployeeRank"
import LineChart from "./Line"
import CategoryChart from "./PieChart"
import ProductRank from "./ProductRank"
import { Container, Hero, Summary, Card, Header, Number, Action,IconWrapper, ChartContainer, Wrapper, Left, Right, Commercial } from "./style"
import Scope from "../../assets/image/scope.png"

import { 
  BsFillGridFill,
 } from "react-icons/Bs"
import TicketList from "./TicketRank"
import OrderTable from "./OrderTable"

function Revenue() {
  
  return (
    <Container>
      <Hero>DashBoard</Hero>
      <Wrapper>
        <Left>
        <Summary>
        <Card>
          <Header>
         <IconWrapper><BsFillGridFill fontSize={24}/></IconWrapper>
           Product
          </Header>
         <Number>200</Number>
         <Action>Product sold</Action>
        </Card>
        <Card>
          <Header>
          <IconWrapper><BsFillGridFill  fontSize={24}/></IconWrapper>
           Product
          </Header>
         <Number>200</Number>
         <Action>Product sold</Action>
        </Card>
        <Card>
          <Header>
          <IconWrapper><BsFillGridFill  fontSize={24}/></IconWrapper>
           Product
          </Header>
         <Number>200</Number>
         <Action>Product sold</Action>
        </Card>
         <Card>
          <Header>
          <IconWrapper><BsFillGridFill  fontSize={24}/></IconWrapper>
           Product
          </Header>
         <Number>200</Number>
         <Action>Product sold</Action>
        </Card>
      </Summary>
      <LineChart/>
      <Row style={{justifyContent:"space-between"}}>
      <EmployeeRank/>
      <TicketList/>
      </Row>
      
   
        </Left>
        <Right>
          <Commercial> 
            <div>
            Daily Insight 
            </div>
            <div>
          <img src= {Scope} alt="scope" />
            </div>
          </Commercial>
          <h2>Category Revenue</h2>
            <CategoryChart/>
            
            <ProductRank/>
        </Right>
      </Wrapper>
      
      <ChartContainer>
      <OrderTable/>
      </ChartContainer>
    </Container>
  )
}

export default Revenue