import {Container,Left,RightContainer} from "./style"
import Note from "./components/Note"
import OrderSummary from "./components/OrderSummary"
import PaymentMethod from "./components/PaymentMethod"
import Menu from "./components/Menu"
import ActionGroup from "./components/ActionGroup"
function Checkout() {
  return (
    <Container>
    <Left>
        <Note/>
        <Menu/>
    </Left>
    <RightContainer>
      <OrderSummary/>
      <PaymentMethod/>
    </RightContainer>
    <ActionGroup/>
   </Container>
  )
}

export default Checkout