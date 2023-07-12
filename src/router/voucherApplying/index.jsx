import { AntdImage, Button, Container, Row, VoucherInfo, VoucherInfoWrapper } from "./style"
import { VoucherPlacement } from "./style"
import ToolBox from "./components/ToolBox"
import VoucherList from "./components/VoucherList"
import { useDispatch,useSelector } from "react-redux"
import placeholder from "../../assets/image/placeholder.png"
import { applyToAllVoucher, applyVoucher, getProductById} from "../home/components/slice/index"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import { toastSuccess } from "../../components/Toast"

function VoucherApply() {
const navigate=useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();
  const voucher="https://www.pngmart.com/files/8/Voucher-Download-PNG-Image.png"
  const [currentVoucher,setCurrentVoucher]=useState();
const handleApplyVoucher=()=>{
  if(id == "applyAll"){
    dispatch(applyToAllVoucher(currentVoucher));
  }else{
    dispatch(applyVoucher({...currentVoucher,productId:id}))
  }
 
  navigate(-1);
  toastSuccess("add Voucher Successfully !!")
}

  return (
    <Container>
      <VoucherPlacement>
        <AntdImage alt="voucher"  src={ currentVoucher?.voucherImg ? currentVoucher?.voucherImg?.startsWith("http")||currentVoucher?.voucherImg?.startsWith("data:image") ? currentVoucher?.voucherImg : `data:image/jpeg;base64,${currentVoucher?.voucherImg}`: placeholder} />
       {currentVoucher&& <VoucherInfo>
        <h1 style={{marginRight:"30px"}}>Detail:</h1>
        <VoucherInfoWrapper>
        <div style={{flexWrap:"wrap",marginBottom:"20px"}}>Description:<span>{currentVoucher?.description}</span></div>
        <div>Code: <span>{currentVoucher?.name||"Voucher"}</span></div>
        <div>Quantity: <span>{currentVoucher?.quantity}</span></div>
          
           <div>Discount: <span>{currentVoucher?.percentDiscount*100}%</span></div>
           <div> Money Required: <span>{currentVoucher.minTotal||"None"}</span></div>
      
         
           <div> Item Required: <span>{currentVoucher.minItem||"none"}</span> </div>
           <div> Exprire Date :<span>30/6/2023</span></div>
      
          <Row style={{justifyContent:"flex-end"}}><Button onClick={handleApplyVoucher}>Apply</Button></Row>
        </VoucherInfoWrapper>
        </VoucherInfo>}
      </VoucherPlacement>
      <ToolBox/>
      <VoucherList setCurrentVoucher={setCurrentVoucher}/>
    </Container>
  )
}

export default VoucherApply