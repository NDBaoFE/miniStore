/* eslint-disable react/prop-types */

import {Wrapper,OrderDetailRow,Quantity,Name,Price,CloseButton,ActionRow, BadgeContainer, OldPrice} from "./style"
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProductQuantity,removeVoucher } from "./slice";
import {  useEffect, useState } from "react";
import { EditOutlined ,TagOutlined} from "@ant-design/icons";
import { themes } from "../../../utils/theme";
import { Link } from "react-router-dom";
import { Badge, Col } from "antd";

import { RiCoupon2Line } from "react-icons/ri";
import { formatNumberWithDecoration } from "../../../utils";
import { toastError } from "../../../components/Toast";
function  OrderDetail({product,orderList}) {
    const [showActions, setShowActions] = useState(false);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(product.cartQuantity);
    const handleChangeQuantity = (e) => {
      if(parseInt(e.target.value) > product.quantity){
        toastError(`This product only have ${product.quantity} items`)
        setQuantity(product.quantity);
        dispatch(updateProductQuantity({productId: product.productId, InputQuantity: product.quantity,quantity:product.quantity}));
        return;
      }
      if(e.target.value == ""){
        setQuantity(0);
        dispatch(updateProductQuantity({productId: product.productId, InputQuantity: 0,quantity:product.quantity}));
        return;
      }
       
      dispatch(updateProductQuantity({productId: product.productId, InputQuantity: parseInt( e.target.value),quantity:product.quantity}));
      setQuantity(parseInt(e.target.value));
    }
    useEffect(() => {{
      setQuantity(product.cartQuantity);
    }},[orderList,product.cartQuantity])
    // Function to remove an item from the cart
    function removeProduct(productId) {
      const cartData=JSON.parse(localStorage.getItem("fullcart"));
      console.log(productId);
      
      // Check if the product exists in the cart
      if (cartData.data) {
        cartData.data = cartData.data.filter((product) => product.productId != productId);
      }
      localStorage.setItem("fullcart", JSON.stringify(cartData));
    }
    
    // Function to remove the voucherId from the cart
    function removeVoucherId() {
      const cartData=JSON.parse(localStorage.getItem("fullcart"));
      cartData.voucherId = null;
      localStorage.setItem("fullcart", JSON.stringify(cartData));
    }
    
  

    const handleRemoveVoucher = () => {
     if(product.voucherId){
      dispatch(removeVoucher(product))
      removeVoucherId();
     }else{
      toastError("No Voucher left to remove")
     }
     
    }
const handleRemoveProduct = () => {
  dispatch(deleteProduct(product.productId));
  removeProduct(product.productId);
}

  return (
    <Wrapper key={product.productId} style={{backgroundColor: showActions ?`${themes.colors.gray}` : "transparent"}}>  
          <OrderDetailRow key={product.id} onClick={()=>setShowActions(!showActions)}>
            {product.voucherId? <Badge count={<BadgeContainer><RiCoupon2Line style={{color:`${themes.colors.white}`}}/></BadgeContainer>}><Quantity value={product.cartQuantity} onChange={handleChangeQuantity} type="number" min={1}/></Badge> :
           <Quantity value={quantity} onChange={handleChangeQuantity} type="number" min={1}/> }
            <Name>{product.name}</Name>
         
         { 
          product.finalPrice != product.price &&  
           <Col>  
           <OldPrice>  {`${formatNumberWithDecoration( product.price*product.cartQuantity)} VNĐ`}</OldPrice> <Price>  {`${ formatNumberWithDecoration(product.finalPrice*product.cartQuantity) } VNĐ`}</Price>
           </Col> }
           {product.finalPrice == product.price &&  
           <Price>  {`${formatNumberWithDecoration(product.price*product.cartQuantity)} VNĐ`}</Price> }
         
            <CloseButton onClick={handleRemoveProduct}><ImCross/></CloseButton>
          </OrderDetailRow> 
          {/* { showActions &&<ActionRow> {product.voucherId && <div onClick={handleRemoveVoucher}><EditOutlined />Remove Voucher</div>}<Link to={`/apply-voucher/${product.productId}`}><div > <TagOutlined />{product.voucherId ? "Edit Voucher" : "Add Voucher"}</div></Link></ActionRow>} */}
           </Wrapper>
  )
}

export default OrderDetail