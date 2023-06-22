import CategoryChart from "./PieChart"
import { Container, Hero, Summary, Card, Header, Number, Action,IconWrapper, ChartContainer } from "./style"


import { 
  BsFillGridFill,
 } from "react-icons/Bs"

function Revenue() {
  return (
    <Container>
      <Hero>DashBoard</Hero>
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
      <ChartContainer>
    <CategoryChart/>
      </ChartContainer>
    </Container>
  )
}

export default Revenue