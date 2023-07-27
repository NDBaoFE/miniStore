/* eslint-disable react/prop-types */

import {Wrapper,OrderDetailRow,Quantity,Name,Price,CloseButton,ActionRow, BadgeContainer, OldPrice} from "./style"
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deleteProduct, } from "./slice";
import { useState } from "react";
import { EditOutlined ,TagOutlined} from "@ant-design/icons";
import { themes } from "../../../utils/theme";
import { Link } from "react-router-dom";
import { Badge, Col } from "antd";

import { RiCoupon2Line } from "react-icons/ri";
function  OrderDetail({product}) {
    const [showActions, setShowActions] = useState(false);
    const dispatch = useDispatch();
  return (
    <Wrapper key={product.productId} style={{backgroundColor: showActions ?`${themes.colors.gray}` : "transparent"}}>  
          <OrderDetailRow key={product.id} onClick={()=>setShowActions(!showActions)}>
            {product.voucherId? <Badge count={<BadgeContainer><RiCoupon2Line style={{color:`${themes.colors.white}`}}/></BadgeContainer>}><Quantity>{`${product.quantity}`}</Quantity></Badge> :
           <Quantity>{`${product.quantity}`}</Quantity> }
            <Name>{product.name}</Name>
         
          {// only render if there is new price 
          product.finalPrice != product.price &&  
           <Col>  
           <OldPrice>  {`${product.price*product.quantity} VNĐ`}</OldPrice> <Price>  {`${product.finalPrice} VNĐ`}</Price>
           </Col> }
           {product.finalPrice == product.price &&  
           <Price>  {`${product.price*product.quantity} VNĐ`}</Price> }
         
            <CloseButton onClick={() => dispatch(deleteProduct(product.productId))}><ImCross/></CloseButton>
          </OrderDetailRow> 
          { showActions &&<ActionRow><div><EditOutlined />Edit Order</div><Link to={`/apply-voucher/${product.productId}`}><div > <TagOutlined />{product.voucherId ? "Edit Voucher" : "Add Voucher"}</div></Link></ActionRow>}
           </Wrapper>
  )
}

export default OrderDetail