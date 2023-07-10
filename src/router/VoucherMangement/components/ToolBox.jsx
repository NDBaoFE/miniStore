/* eslint-disable react/prop-types */
import { Button, StyledSearch, ToolBox,  Upload } from "./style"

import {Col,SearchBtn} from "./style"

import { PlusOutlined } from "@ant-design/icons";
import { BiImport } from "react-icons/bi";
import { UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function ToolBoxSection({setSearch,handleSave,setCurrent}) {
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
    
    
    
  return (
    <ToolBox>
        <Col className="action"> 
        <SearchBtn> 
            <StyledSearch placeholder="input Product name, category.."  onChange={onSearch}   />
            </SearchBtn>
       
        </Col>
        <Col>
    
        <Upload onClick={handleClick}><UploadOutlined  style={{marginRight: "10px", fontSize:"20px"}} /> Generate Report</Upload>
        </Col>
        <Col>
        </Col>
        <Col>
        <Button className="import">
          <BiImport style={{ fontSize:"20px"}}/>
        </Button>
        <Button>
          <Link to="/voucher/new"> <PlusOutlined style={{ fontSize:"20px" ,marginRight:"20px"}} /> Add Voucher</Link>
        </Button>
        </Col>
    </ToolBox>
  )
}

export default ToolBoxSection