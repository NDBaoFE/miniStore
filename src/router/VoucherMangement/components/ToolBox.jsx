/* eslint-disable react/prop-types */
import { Button, ToolBox,  Upload } from "./style"

import {Col} from "./style"

import { PlusOutlined } from "@ant-design/icons";
import { BiImport } from "react-icons/bi";
import { UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function ToolBoxSection({handleSave}) {

    const handleClick = () => { 
      console.log("click");
    handleSave()}
   

    
    
    
  return (
    <ToolBox>
       
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