import ProductList from "./ProductList"
import ToolBoxSection from "./ToolBox"
import { HomeSection, Left, Right ,RightContainer} from "./style"
import Cart from "./components/Cart"
import { useState } from "react"
import Scanner from "./components/Scanner"

function Home() {
const [searchValue,setSearchValue]=useState("");
const [openScanner,setOpenScanner]=useState(false);
  return (
   <HomeSection>
    <Left>
      <ToolBoxSection setSearchValue={setSearchValue} openScanner={openScanner} setOpenScanner={setOpenScanner}/>
    <ProductList search={searchValue}/>
  <Scanner openScanner={openScanner} setOpenScanner={setOpenScanner}/>
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