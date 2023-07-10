
import { Image } from 'antd'
import {  Body, EmployeeCard, HeroWrapper, Name, Wrapper } from './style'
import {  products } from './data'
function ProductRank() {
  return (
    <Wrapper style={{marginTop: '85px', marginBottom: '50px',flexDirection:'column',width:'100%'}}>
        <HeroWrapper> <h2>Top sold Product
        </h2></HeroWrapper>
       
        <Body style={{background:"#fff",padding:"0 20px"}}>
            {products.map(item =>{
            
            return(<EmployeeCard key={item.id}>
                <div style={{display:'flex',justifyContent:'space-between'}}><Image src={item.image} />
                    <div>
                        <Name>{item.name}</Name>

                    </div></div>
                    <div>{item.quantitySold} Sold</div>
                    
            </EmployeeCard>)})}
        </Body>
    </Wrapper>
  )
}

export default ProductRank