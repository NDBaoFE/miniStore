/* eslint-disable react/prop-types */
import {CardWrapper, CardHero, CardImg, CardPrice,CardContainer} from "./style"
 import { AddButton } from "./style"
 import { useDispatch, useSelector } from "react-redux";
 import { addProduct } from "./components/slice";
import { formatNumberWithDecoration } from "../../utils";
import { selector } from "./components/slice/selector";
import { useEffect } from "react";
function Card({product}) {
  const dispatch=useDispatch();
  const { orderList } = useSelector(selector);
  const placeholder="https://universalele.websites.co.in/obaju-turquoise/img/product-placeholder.png"
  const handleAddToCart=()=>{
    dispatch(addProduct({...product,addQuantity:1}));
 
    
  }
  useEffect(()=>{
    localStorage.setItem("fullcart",JSON.stringify(orderList));
  },[orderList])

  return (
    <CardContainer>
    <CardWrapper>
         <CardImg src={product.productImg}   alt="avatar" onError={(e) => {
          e.target.src = placeholder;
        }}/>
        <CardHero>{product.name}</CardHero>
        <CardPrice>{formatNumberWithDecoration(product.price)} VNĐ </CardPrice>
        <h3>{product.quantity} left</h3>
       
    </CardWrapper>
    <AddButton className="add" onClick={handleAddToCart}>
      +
    </AddButton>
    </CardContainer>  
  )
}

export default Card