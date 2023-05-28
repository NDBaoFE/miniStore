import { useSelector } from "react-redux"
import { Wrapper,Row,Line,TotalRow} from "./styled"
import { selector } from "../../home/components/slice/selector"
import { Link } from "react-router-dom";
function OrderSummary() {
  const {orderList}=useSelector(selector);
  const total=orderList.reduce((acc,item)=>acc+item.price*item.quantity,0);
  return (
    <Wrapper> 
        <h3>Order Summary</h3>
        <Row>
            <div>Products subtotal</div>
            <div>{total}đ</div>
        </Row>
        <Row>
        <div>Discount</div>
        <Link to="/voucher" style={{textDecoration:"none"}}>  <div className="discount">Add Discount</div></Link>
      
        </Row>
        <Line/>
        <TotalRow>
            <div>Total</div>
            <div>{total}đ</div>
        </TotalRow>
        </Wrapper>
   
  )
}

export default OrderSummary