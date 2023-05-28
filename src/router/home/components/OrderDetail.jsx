/* eslint-disable react/prop-types */

import {Wrapper,OrderDetailRow,Quantity,Name,Price,CloseButton,ActionRow} from "./style"
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deleteProduct, } from "./slice";
import { useState } from "react";
import { EditOutlined ,TagOutlined} from "@ant-design/icons";
import { themes } from "../../../utils/theme";
function OrderDetail({product}) {
    const [showActions, setShowActions] = useState(false);
    const dispatch = useDispatch();
  return (
    <Wrapper key={product.id} style={{backgroundColor: showActions ?`${themes.colors.gray}` : "transparent"}}>  <OrderDetailRow key={product.id} onClick={()=>setShowActions(!showActions)}>
            <Quantity>{`${product.quantity}`}</Quantity>
            <Name>{product.name}</Name>
            <Price>  {`${product.price} đ`}</Price>
            <CloseButton onClick={() => dispatch(deleteProduct(product.id))}><ImCross/></CloseButton>
          </OrderDetailRow> 
          { showActions &&<ActionRow><div><EditOutlined />Edit Order</div><div> <TagOutlined />Add Voucher</div></ActionRow>}
           </Wrapper>
  )
}

export default OrderDetail