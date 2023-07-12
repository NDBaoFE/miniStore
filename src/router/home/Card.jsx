/* eslint-disable react/prop-types */
import {CardWrapper, CardHero, CardImg, CardPrice,CardContainer} from "./style"
 import { AddButton } from "./style"
 import { useDispatch } from "react-redux";
 import { addProduct } from "./components/slice";
function Card({product}) {
  const dispatch=useDispatch();
  const placeholder="https://universalele.websites.co.in/obaju-turquoise/img/product-placeholder.png"
  const handleAddToCart=()=>{
    dispatch(addProduct({...product,quantity:1}));
  }
  return (
    <CardContainer>
    <CardWrapper>
         <CardImg src={product.productImg}   alt="avatar" onError={(e) => {
          e.target.src = placeholder;
        }}/>
        <CardHero>{product.name}</CardHero>
        <CardPrice>{product.price}đ</CardPrice> 
       
    </CardWrapper>
    <AddButton className="add" onClick={handleAddToCart}>
      +
    </AddButton>
    </CardContainer>  
  )
}

export default Card