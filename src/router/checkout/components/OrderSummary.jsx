import { useSelector } from "react-redux"
import { Wrapper,Row,Line,TotalRow} from "./styled"
import { selector } from "../../home/components/slice/selector"
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
        
        {orderList.percentDiscount != 0 && <><div>Discount</div><div className="discount"> {`${orderList.percentDiscount*100}%`}</div> </> }

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