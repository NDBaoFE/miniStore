/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, StyledSearch, ToolBox, Type, Upload } from "./style"

import {Col,SearchBtn,Category,Action} from "./style"
import { CiBarcode } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";
import { PlusOutlined } from "@ant-design/icons";
import { BiImport } from "react-icons/bi";
import { UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function ToolBoxSection({setSearch,handleSave,setCurrent,setOpen}) {
const navigate = useNavigate();
    // const onSearch = (e) => { 
    //   console.log(e.target.value);
    //   setSearchValue(e.target.value);
    // }
    const handleClick = () => { 
      console.log("click");
    handleSave()}
   
    const onSearch = (e) => {
      console.log(e.target.value);
      setSearch(e.target.value);
      navigate(`/product/search?keyword=${e.target.value}&page=1`);
      setCurrent(1);
   
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
        <Col className="action"> 
        <SearchBtn> 
            <StyledSearch placeholder="input Product name, category.."  onChange={onSearch}   />
            </SearchBtn>
        <Category 
      options={options} 
      onChange={handleChangeCategory}
      placeholder="Please select"
    />
        </Col>
        <Col>
        <Type className="import"><FiFilter style={{marginRight: "10px", fontSize:"20px"}}/> Filter</Type>
        <Upload onClick={handleClick}><UploadOutlined  style={{marginRight: "10px", fontSize:"20px"}} /> Generate Report</Upload>
        </Col>
        <Col>
        <Action>
        <CiBarcode style={{color:"black", fontSize:"25px"}}/>
        </Action>
        </Col>
        <Col> 
        <Button className="import" onClick={()=>setOpen(true)}>
          <BiImport style={{ fontSize:"20px"}}/>
        </Button>
        <Button>
          <Link to="/product/new"> <PlusOutlined style={{ fontSize:"20px" ,marginRight:"20px"}} /> Add Product</Link>
        </Button>
        </Col>
    </ToolBox>
  )
}

export default ToolBoxSection