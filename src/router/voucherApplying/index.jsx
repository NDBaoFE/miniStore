import { AntdImage, Button, Container, Row, VoucherInfo, VoucherInfoWrapper } from "./style"
import { VoucherPlacement } from "./style"
import ToolBox from "./components/ToolBox"
import VoucherList from "./components/VoucherList"
import { useDispatch } from "react-redux"
import placeholder from "../../assets/image/placeholder.png"
import { applyToAllVoucher, applyVoucher, } from "../home/components/slice/index"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { toastSuccess } from "../../components/Toast"
import { Item, StyledBadge } from "../AddVoucher/style"
import { BsFillGridFill } from "react-icons/Bs"
import ProductDrawer from "./components/ProductDrawer"

function VoucherApply() {
const navigate=useNavigate();
  const dispatch = useDispatch();
  const [openDrawer,setOpenDrawer]=useState(false);
  const [currentVoucher,setCurrentVoucher]=useState();
const handleApplyVoucher=()=>{
  if(currentVoucher.isApplyAll == true){
    dispatch(applyToAllVoucher({currentVoucher}));
  }else{
    dispatch(applyVoucher({currentVoucher}))
  }
 
  navigate(-1);
  toastSuccess("Add  Voucher Successfully !!")
}
const onClose = () => {
  setOpenDrawer(false);
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
           
      
          <Row style={{justifyContent:"space-between"}}>
          <Item   onClick={()=>{setOpenDrawer(true)}}  >
                    <StyledBadge count={0} showZero color="lime"  offset={[10, 0]}><BsFillGridFill  style={{marginRight:"20px", fontSize:"25px"}} />Choose Upload</StyledBadge> 
                </Item>
            <Button onClick={handleApplyVoucher}>Apply</Button></Row>
        </VoucherInfoWrapper>
        { currentVoucher &&<ProductDrawer onClose={onClose} openDrawer={openDrawer} products={currentVoucher.productVouchers}/>}
        </VoucherInfo>}
      </VoucherPlacement>
      <ToolBox/>
      <VoucherList setCurrentVoucher={setCurrentVoucher}/>
     
    </Container>
  )
}

export default VoucherApply