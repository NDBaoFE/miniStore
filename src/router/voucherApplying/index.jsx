import { AntdImage, Button, Container, Row, VoucherInfo, VoucherInfoWrapper } from "./style"
import { VoucherPlacement } from "./style"
import ToolBox from "./components/ToolBox"
import VoucherList from "./components/VoucherList"
import { useSelector } from "react-redux"
import { selector } from "../home/components/slice/selector"
import voucher from "../../assets/image/voucher.png"
function VoucherApply() {
 
  const {selectedVoucher} = useSelector(selector);
  return (
    <Container>
      <VoucherPlacement>
        <AntdImage alt="voucher" src={voucher} />
       {selectedVoucher?.name&& <VoucherInfo>
        <h1 style={{marginRight:"30px"}}>Detail:</h1>
        <VoucherInfoWrapper>
        <div>Description:<span>10% discount on Nestle Product</span></div>
        <div>Code: <span>NESTLE10</span></div>
        <div>Quantity: <span>20</span></div>
          
           <div>Discount: <span>10% </span></div>
           <div>Maximum discount: <span>30000đ</span></div>
      
         
           <div>Minimum Item: <span>2</span> </div>
           <div> Exprire Date :<span>30/6/2023</span></div>
      
          <Row style={{justifyContent:"flex-end"}}><Button>Apply</Button></Row>
        </VoucherInfoWrapper>
        </VoucherInfo>}
      </VoucherPlacement>
      <ToolBox/>
      <VoucherList/>
    </Container>
  )
}

export default VoucherApply