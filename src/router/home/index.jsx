import ProductList from "./ProductList"
import ToolBoxSection from "./ToolBox"
import { HomeSection, Left, Right ,RightContainer} from "./style"
import Cart from "./components/Cart"
import { useState } from "react"
function Home() {
const [searchValue,setSearchValue]=useState("");
  return (
   <HomeSection>
    <Left>
      <ToolBoxSection setSearchValue={setSearchValue} searchValue={searchValue}/>
    <ProductList search={searchValue}/>
    </Left>
    <RightContainer>
    <Right>
      <Cart/>
    </Right>
    </RightContainer>
    
   </HomeSection>
  )
}

export default Home