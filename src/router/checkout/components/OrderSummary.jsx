import { useSelector } from "react-redux"
import { Wrapper,Row,Line,TotalRow} from "./styled"
import { selector } from "../../home/components/slice/selector"
import { Link } from "react-router-dom";
function OrderSummary() {
  const {orderList}=useSelector(selector);
  const total=orderList.data.reduce((acc,item)=>acc+item.finalPrice*item.quantity,0);
  return (
    <Wrapper> 
        <h3>Order Summary</h3>
        <Row>
            <div>Products subtotal</div>
            <div>{total}đ</div>
        </Row>
        <Row>
        <div>Discount</div>
       {!orderList.voucherId && <Link to="/voucher/applyAll" style={{textDecoration:"none"}}>  <div className="discount">Add Discount</div></Link>} 
      {orderList.voucherId &&<Link to="/voucher/applyAll" style={{textDecoration:"none"}}> <div className="discount">{orderList.percentDiscount*100}%</div></Link>}
        </Row>
        <Line/>
        <TotalRow>
            <div>Total</div>
            <div>{total*(1-orderList.percentDiscount)}đ</div>
        </TotalRow>
        </Wrapper>
   
  )
}

export default OrderSummary