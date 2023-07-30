
import { useState } from 'react'
import { Wrapper ,ItemRow,DetailWrapper,Left,Right,Img} from './styled'
import {IoIosArrowDown,IoIosArrowUp}   from 'react-icons/io'
import { useSelector } from 'react-redux';
import { selector } from '../../home/components/slice/selector';
import {useNavigate} from 'react-router-dom';
import { formatNumberWithDecoration } from '../../../utils';
function Menu() {
    const navigate=useNavigate();
    const[open,setOpen]=useState(false);
    const {orderList}=useSelector(selector);
    if(orderList.data.length===0){navigate("/home");}
  return (
    <Wrapper style={{padding:"20px",}} onClick={()=>setOpen(!open)}>
        <ItemRow>  <div>{orderList.data.length +" "}{ orderList.data.length>1 ? "items": "item"} </div>
        <div style={{fontSize:"20px"}}>{open?<IoIosArrowDown/>:<IoIosArrowUp/>}</div></ItemRow>
        { open &&<DetailWrapper>
        {orderList.data.map((item) => {
            return <ItemRow key={item.id}>
                <Left>
                    <Img src={item.productImg} alt="" />
                    <div className='quantity'>{item.quantity}x</div>
                    <div className='name'>{item.name}</div>
                </Left>
                <Right>
                    <div className='price'>{formatNumberWithDecoration(item.finalPrice*item.quantity)} VNĐ</div>
                    <div className='originalPrice'>{formatNumberWithDecoration(item.price*item.quantity)} VNĐ</div>
                </Right>
            </ItemRow>
        })}
        </DetailWrapper>}
      
    </Wrapper>
  )
}

export default Menu