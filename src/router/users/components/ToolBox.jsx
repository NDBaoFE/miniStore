/* eslint-disable react/prop-types */
import { Button, StyledSearch, ToolBox, Type, Upload } from "./style"

import {Col,SearchBtn,Category,Action} from "./style"
import { CiBarcode } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";
import { PlusOutlined } from "@ant-design/icons";
import { BiImport } from "react-icons/bi";
import { UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
function ToolBoxSection({setSearch,handleSave,setCurrent}) {
// const navigate = useNavigate();
    // const onSearch = (e) => { 
    //   console.log(e.target.value);
    //   setSearchValue(e.target.value);
    // }
    // const handleClick = () => { 
    //   console.log("click");
    // handleSave()}
   
    // const onSearch = (e) => {
    //   console.log(e.target.value);
    //   setSearch(e.target.value);
    //   navigate(`/user/search?keyword=${e.target.value}&page=1`);
    //   setCurrent(1);
   
    // }
    // const handleChangeCategory = (value) => {
    //   console.log(value)
    // }
    // const options = [
    //   {
    //     value: 'Ho',
    //     label: 'Ho',
    //   },
    //   {
    //     value: 'Hi',
    //     label: 'Hi',
    //   },
    // ];
    
    
  return (
    <ToolBox>
        <Col>
        </Col>
        <Col>
        <Button>
          <Link to="/user/add"> <PlusOutlined style={{ fontSize:"20px" ,marginRight:"20px"}} /> Add User</Link>
        </Button>
        </Col>
    </ToolBox>
  )
}

export default ToolBoxSection