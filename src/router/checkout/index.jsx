import { useState } from 'react'
import {Container,Left,RightContainer} from "./style"
import Note from "./components/Note"
import OrderSummary from "./components/OrderSummary"
import PaymentMethod from "./components/PaymentMethod"
import Menu from "./components/Menu"
import ActionGroup from "./components/ActionGroup"


function Checkout() {
  const[change,setChange]=useState(0);
 
  return (
    <Container>
    <Left>
        <Note/>
        <Menu/>
    </Left>
    <RightContainer>
      <OrderSummary/>
      <PaymentMethod change={change}  setChange={setChange}/>
    </RightContainer>
    
    <ActionGroup change={change} />
  
    
   </Container>
  )
}

export default Checkout