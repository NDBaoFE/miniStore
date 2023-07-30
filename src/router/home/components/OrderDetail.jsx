/* eslint-disable react/prop-types */

import {Wrapper,OrderDetailRow,Quantity,Name,Price,CloseButton,ActionRow, BadgeContainer, OldPrice} from "./style"
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProductQuantity,removeVoucher } from "./slice";
import { useState } from "react";
import { EditOutlined ,TagOutlined} from "@ant-design/icons";
import { themes } from "../../../utils/theme";
import { Link } from "react-router-dom";
import { Badge, Col } from "antd";

import { RiCoupon2Line } from "react-icons/ri";
import { formatNumberWithDecoration } from "../../../utils";
import { toastError } from "../../../components/Toast";
function  OrderDetail({product}) {
    const [showActions, setShowActions] = useState(false);
    const dispatch = useDispatch();
    const handleChangeQuantity = (e) => {
    
      dispatch(updateProductQuantity({productId: product.productId, quantity: parseInt( e.target.value)}))
    }
    const handleRemoveVoucher = () => {
     if(product.voucherId){
      dispatch(removeVoucher(product))
     }else{
      toastError("No Voucher left to remove")
     }
     
    }
  return (
    <Wrapper key={product.productId} style={{backgroundColor: showActions ?`${themes.colors.gray}` : "transparent"}}>  
          <OrderDetailRow key={product.id} onClick={()=>setShowActions(!showActions)}>
            {product.voucherId? <Badge count={<BadgeContainer><RiCoupon2Line style={{color:`${themes.colors.white}`}}/></BadgeContainer>}><Quantity value={product.quantity} onChange={handleChangeQuantity} type="number" min={1}/></Badge> :
           <Quantity value={product.quantity} onChange={handleChangeQuantity} type="number" min={1}/> }
            <Name>{product.name}</Name>
         
          {// only render if there is new price 
          product.finalPrice != product.price &&  
           <Col>  
           <OldPrice>  {`${formatNumberWithDecoration( product.price*product.quantity)} VNĐ`}</OldPrice> <Price>  {`${ formatNumberWithDecoration(product.finalPrice*product.quantity) } VNĐ`}</Price>
           </Col> }
           {product.finalPrice == product.price &&  
           <Price>  {`${formatNumberWithDecoration(product.price*product.quantity)} VNĐ`}</Price> }
         
            <CloseButton onClick={() => dispatch(deleteProduct(product.productId))}><ImCross/></CloseButton>
          </OrderDetailRow> 
          { showActions &&<ActionRow> {product.voucherId && <div onClick={handleRemoveVoucher}><EditOutlined />Remove Voucher</div>}<Link to={`/apply-voucher/${product.productId}`}><div > <TagOutlined />{product.voucherId ? "Edit Voucher" : "Add Voucher"}</div></Link></ActionRow>}
           </Wrapper>
  )
}

export default OrderDetail