import { Total, OrderList, Row, DeleteButton, PaymentButton, CloseButton } from "./style";
import { DeleteOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { selector } from "./slice/selector";
import OrderDetail from "./OrderDetail";
import { Link, useNavigate } from "react-router-dom";
import { clearOrder, removeApplyAllVoucher } from "./slice";
import { CartWrapper } from "./style";

import { useDispatch } from "react-redux";
import { ImCross } from "react-icons/im";
import { formatNumberWithDecoration } from "../../../utils";
import { toastError } from "../../../components/Toast";
function Cart() {
  let subTotal = 0;
  let totalQuantity = 0;
  const navigate=useNavigate();
  const { orderList } = useSelector(selector);
  const dispatch = useDispatch();
  const isDiscount = () => {
    // Check if any product in the cart has a voucherId set (discount applied)
    const hasProductDiscount = orderList.data.some((product) => product.voucherId !== null);
    console.log(hasProductDiscount);
  
    // Check if a general discount is applied through the voucherId
    const hasGeneralDiscount = orderList.voucherId !== null;
  
    // Return true if either a product-specific discount or general discount is present
    return hasProductDiscount || hasGeneralDiscount;
  };
console.log(isDiscount());
  function clearCart() {
    localStorage.setItem("fullcart",{});
   
  }
  const handleClearCart=()=>{
    dispatch(clearOrder());
    clearCart();
  }
  const isHaving0Quantity=()=>{
    let bool=false;
     orderList.data.forEach((product)=>{
      console.log(product.cartQuantity);
      if(product.cartQuantity == 0 ){
        
     bool=true;
      }
     })
     return bool;
  }
      // Function to remove the voucherId from the cart
      function removeVoucherId() {
        const cartData=JSON.parse(localStorage.getItem("fullcart"));
        cartData.voucherId = null;
        localStorage.setItem("fullcart", JSON.stringify(cartData));
      }
  const handleDeleteVoucher=()=>{
    dispatch(removeApplyAllVoucher());
    removeVoucherId();
  }
 const handleCheckout=(subTotal)=>{
  console.log(isHaving0Quantity());
  if( isHaving0Quantity()){
    toastError("Product quantity can't be 0, please try again");
  }else if(subTotal == 0){
    toastError("You have not select any product");  }else{
      navigate("/checkout");
    }
 }  // Function to clear the entire cart
  
   
  return (
    <CartWrapper>
      <OrderList>
        <div style={{maxHeight:"400px",overflowY:"scroll",overflowX:"hidden"}} className="cart">
         { orderList.data.length > 0 &&
         
         <>
         <div className="nav">
            <div>Quantity</div>
            <div>Product</div>
            <div>Price</div>
            <div>         </div>
          </div>
        {orderList.data.map((product) => {
            subTotal += product.finalPrice * product.cartQuantity;
            totalQuantity += product.cartQuantity;
            return (
              <OrderDetail
                key={product.productId}
                product={product} 
                orderList={orderList}
              ></OrderDetail>
            );
          })}
          </>} 
        </div>
         
          <Total>
            <Row>
              <div>{`${totalQuantity} items`}</div>
              <div>{`SubTotal : ${formatNumberWithDecoration(subTotal)}  VNĐ`}</div>
            </Row>
            <Row>
              <div>Discount</div>
             {isDiscount() && 
             <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"80px"}}>
             <div className="discount"> {`${orderList.percentDiscount*100}%`}</div>
            <CloseButton onClick={handleDeleteVoucher}><ImCross/></CloseButton>
             </div>}
              {!isDiscount() &&<div className="discount">
                <Link to="/apply-voucher/applyAll">Apply  Voucher</Link>
              </div>}
            </Row>
            <Row
              style={{
                padding: "0 20px",
                marginBottom: "20px",
                justifyContent: "center",
              }}
            >
              <DeleteButton style={{ marginRight: "20px" }} onClick={handleClearCart}>
                <DeleteOutlined />
              </DeleteButton>

                <PaymentButton onClick={()=>handleCheckout(subTotal)}>Go to Payment</PaymentButton>
            </Row>
          </Total>
        </OrderList>  
    </CartWrapper>
  );
}

export default Cart;
