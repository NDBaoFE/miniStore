/* eslint-disable react/prop-types */
import { StyledSearch, ToolBox } from "./style"

import {Col,SearchBtn,Category,Action} from "./style"
import { CiBarcode } from "react-icons/ci";
import { AiOutlineUnorderedList } from "react-icons/ai";

function ToolBoxSection({setSearchValue}) {

    // const onSearch = (e) => { 
    //   console.log(e.target.value);
    //   setSearchValue(e.target.value);
    // }
    const onSearch = (e) => {
  
      setSearchValue(e.target.value);
    }
    const handleChangeCategory = (value) => {
      console.log(value)
    }
    const options = [
      {
        value: 'Ho',
        label: 'Ho',
      },
      {
        value: 'Hi',
        label: 'Hi',
      },
    ];
    
    
  return (
    <ToolBox>
        <Col> 
        <SearchBtn> 
            <StyledSearch placeholder="input Product name, category.."  onChange={onSearch} style={{ width: 200 }}  />
            </SearchBtn>
        <Category 
      options={options} 
      onChange={handleChangeCategory}
      placeholder="Please select"
    />
        </Col>
        <Col>
        <Action>
        <CiBarcode style={{color:"black", fontSize:"25px"}}/>
        <AiOutlineUnorderedList style={{color:"black", fontSize:"25px",marginLeft:"20px"}}/>
        </Action>
        </Col>
    </ToolBox>
  )
}

export default ToolBoxSection