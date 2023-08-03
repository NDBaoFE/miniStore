/* eslint-disable react/prop-types */

import { Image } from 'antd'
import {  Body, EmployeeCard, HeroWrapper, Name, Wrapper } from './style'

function ProductRank({data}) {
  return (
    <Wrapper style={{marginTop: '460px', marginBottom: '50px',flexDirection:'column',width:'100%'}}>
        <HeroWrapper> <h2>Top sold Product
        </h2></HeroWrapper>
       {data && <Body style={{background:"#fff",padding:"0 20px"}}>
            {data.productRanks.map(item =>{
            
            return(<EmployeeCard key={item[0].product.ProductId}>
                <div style={{display:'flex',justifyContent:'space-between'}}><Image src={item[0].product.productImg} />
                    <div>
                        <Name>{item[0].product.name}</Name>

                    </div></div>
                    <div>{item[1].sumQuantity} Sold</div>
                    
            </EmployeeCard>)})}
        </Body> }
        
    </Wrapper>
  )
}

export default ProductRank