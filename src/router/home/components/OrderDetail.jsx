/* eslint-disable react/prop-types */

import {Wrapper,OrderDetailRow,Quantity,Name,Price,CloseButton,ActionRow} from "./style"
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deleteProduct, } from "./slice";
import { useState } from "react";
import { EditOutlined ,TagOutlined} from "@ant-design/icons";
import { themes } from "../../../utils/theme";
import { Link } from "react-router-dom";
function  OrderDetail({product}) {
    const [showActions, setShowActions] = useState(false);
    const dispatch = useDispatch();
  return (
    <Wrapper key={product.productId} style={{backgroundColor: showActions ?`${themes.colors.gray}` : "transparent"}}>  <OrderDetailRow key={product.id} onClick={()=>setShowActions(!showActions)}>
            <Quantity>{`${product.quantity}`}</Quantity>
            <Name>{product.name}</Name>
            <Price>  {`${product.price} đ`}</Price>
            <CloseButton onClick={() => dispatch(deleteProduct(product.productId))}><ImCross/></CloseButton>
          </OrderDetailRow> 
          { showActions &&<ActionRow><div><EditOutlined />Edit Order</div><Link to="/voucher"><div > <TagOutlined />Add Voucher</div></Link></ActionRow>}
           </Wrapper>
  )
}

export default OrderDetail