/* eslint-disable react/prop-types */
import { Button, ToolBox } from "./style"

import {Col} from "./style"

import { PlusOutlined } from "@ant-design/icons";
import { BiImport } from "react-icons/bi";

import { Link } from "react-router-dom";

function ToolBoxSection() {


   

    
    
    
  return (
    <ToolBox>
       
        <Col>
    

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