import { useSelector } from "react-redux"
import { Wrapper,Row,Line,TotalRow} from "./styled"
import { selector } from "../../home/components/slice/selector"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setTotalPrice} from "../../home/components/slice/index"
import { formatNumberWithDecoration } from "../../../utils";

function OrderSummary() {
  const {orderList,}=useSelector(selector);
 
  const total=orderList.data.reduce((acc,item)=>acc+item.finalPrice*item.cartQuantity,0);
  const dispatch=useDispatch();
  dispatch(setTotalPrice(total*(1-orderList.percentDiscount)));
  return (
    <Wrapper> 
        <h3>Order Summary</h3>
        <Row>
            <div>Products subtotal</div>
            <div>{formatNumberWithDecoration(total)} VNĐ</div>
        </Row>
        <Row>
        <div>Discount</div>
       {!orderList.voucherId && <Link to="/apply-voucher/applyAll" style={{textDecoration:"none"}}>  <div className="discount">Add Discount</div></Link>} 
      {orderList.voucherId &&<Link to="/apply-voucher/applyAll" style={{textDecoration:"none"}}> <div className="discount">{orderList.percentDiscount*100}%</div></Link>}
        </Row>
        <Line/>
        <TotalRow>
            <div>Total</div>
            <div>{formatNumberWithDecoration(total*(1-orderList.percentDiscount) )} VNĐ</div>
        </TotalRow>
        </Wrapper>
   
  )
}

export default OrderSummary