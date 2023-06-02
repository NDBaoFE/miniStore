
import { useState } from 'react'
import { Wrapper ,ItemRow,DetailWrapper,Left,Right,Img} from './styled'
import {IoIosArrowDown,IoIosArrowUp}   from 'react-icons/io'
import { useSelector } from 'react-redux';
import { selector } from '../../home/components/slice/selector';
function Menu() {
    const[open,setOpen]=useState(false);
    const {orderList}=useSelector(selector);
 
  return (
    <Wrapper style={{padding:"20px",}} onClick={()=>setOpen(!open)}>
        <ItemRow>  <div>{orderList.length +" "}{ orderList.length>1 ? "items": "item"} </div>
        <div style={{fontSize:"20px"}}>{open?<IoIosArrowDown/>:<IoIosArrowUp/>}</div></ItemRow>
        { open &&<DetailWrapper>
        {orderList.map((item) => {
            return <ItemRow key={item.id}>
                <Left>
                    <Img src={item.productImg} alt="" />
                    <div className='quantity'>{item.quantity}x</div>
                    <div className='name'>{item.name}</div>
                </Left>
                <Right>
                    <div className='price'>{item.price}đ</div>
                    <div className='originalPrice'>200000đ</div>
                </Right>
            </ItemRow>
        })}
        </DetailWrapper>}
      
    </Wrapper>
  )
}

export default Menu