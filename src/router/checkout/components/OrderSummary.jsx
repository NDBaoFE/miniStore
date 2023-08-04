import { useSelector } from "react-redux"
import { Wrapper,Row,Line,TotalRow} from "./styled"
import { selector } from "../../home/components/slice/selector"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setTotalPrice} from "../../home/components/slice/index"
import { formatNumberWithDecoration } from "../../../utils";

function OrderSummary() {
  const {orderList,}=useSelector(selector);
  const isDiscount = () => {
    // Check if any product in the cart has a voucherId set (discount applied)
    const hasProductDiscount = orderList.data.some((product) => product.voucherId !== null);
    console.log(hasProductDiscount);
  
    // Check if a general discount is applied through the voucherId
    const hasGeneralDiscount = orderList.voucherId !== null;
  
    // Return true if either a product-specific discount or general discount is present
    return hasProductDiscount || hasGeneralDiscount;
  };
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