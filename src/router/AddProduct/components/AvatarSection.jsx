
import selector from './slice/selectors';
import { AvatarWrapper,AvatarInfo,Avatar,Info } from './style'
import { useSelector } from 'react-redux'
function AvatarSection() {
  const placeholder="https://universalele.websites.co.in/obaju-turquoise/img/product-placeholder.png"
const name=useSelector(selector.name);
const productImg=useSelector(selector.productImg);
const price=useSelector(selector.price);
  return (
    <AvatarWrapper>
        <AvatarInfo>
            <Avatar src={productImg? productImg:placeholder}   alt="avatar" onError={(e) => {
          e.target.src = placeholder;
        }}/>
            <Info>
                <h3>{name}</h3>
                <h3>{`${price} VNĐ`||"Your price"}</h3>
            </Info>
        </AvatarInfo>
    </AvatarWrapper>
  )
}

export default AvatarSection