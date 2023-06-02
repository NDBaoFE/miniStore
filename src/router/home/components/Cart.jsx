

import { Total, OrderList, Row,DeleteButton,PaymentButton} from "./style";
import { DeleteOutlined } from "@ant-design/icons";

import { useSelector } from "react-redux";
import { selector } from "./slice/selector";
import OrderDetail from "./OrderDetail";
import { Link } from "react-router-dom";
import { themes } from "../../../utils/theme";
function Cart() {
 
  let subTotal = 0;
  let totalQuantity = 0;
  const {orderList} = useSelector(selector);
  
  return (
    <>
      <OrderList>
        {orderList.map((product) => {
          subTotal += product.price * product.quantity;
          totalQuantity += product.quantity;
          return (
           <OrderDetail key={product.productId} product={product} ></OrderDetail>

          );
        })}
      </OrderList>
      <Total>
        <Row>
          <div>{`${totalQuantity} items`}</div>
          <div>{`SubTotal : ${subTotal}  đ`}</div>
        </Row>
        <Row>
          <div></div>
          <div className="discount">Add Discount </div>
        </Row>
        <Row style={{padding:"0 20px",marginBottom:"20px",justifyContent:"center"}}>
         <DeleteButton style={{marginRight:"20px"}} ><DeleteOutlined /></DeleteButton>
         <Link to="/checkout"  style={{color:`${themes.colors.white}`}}> <PaymentButton>Go to Payment</PaymentButton></Link>
        </Row>
      </Total>
    </>
  );
}

export default Cart;
