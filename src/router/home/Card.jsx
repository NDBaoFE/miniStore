/* eslint-disable react/prop-types */
import {CardWrapper, CardHero, CardImg, CardPrice,CardContainer} from "./style"
 import { AddButton } from "./style"
 import { useDispatch } from "react-redux";
 import { addProduct } from "./components/slice";
import { formatNumberWithDecoration } from "../../utils";
function Card({product}) {
  const dispatch=useDispatch();
  const placeholder="https://universalele.websites.co.in/obaju-turquoise/img/product-placeholder.png"
  const handleAddToCart=()=>{
    dispatch(addProduct({...product,addQuantity:1}));
  }
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