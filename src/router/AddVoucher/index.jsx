
import { Container, StyledForm,NotiModal, Label, VoucherInfo, Item } from "./style"
import { Left,ActionWrapper,Row } from "./style"
import AvatarSection from "./components/AvatarSection"
import Photo from "./components/Photo"
import { useDispatch, useSelector } from 'react-redux';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Col } from "antd";
import InputName from "./components/components/data-entry/InputName";
import ActionGroup from "./components/ActionGroup";
import selector from "./components/slice/selectors";
import { actions } from "./components/slice";
import productApi from "../../utils/api/productApi";
import Success from "../../components/Success";
import { useState,useEffect } from "react";
import { StyledBadge } from "./style";
import {BsFillGridFill} from 'react-icons/Bs';

import UploadImg from "./components/Upload";
import { toastError, toastSuccess } from "../../components/Toast";
import InputMinTotal from "./components/components/data-entry/InputMinTotal";
import InputMinItem from "./components/components/data-entry/InputMinItem";
import InputPercentDiscount from "./components/components/data-entry/InputPercentDiscount";
import SelectApplyAll from "./components/components/data-entry/SelectApplyAll";
import InputQuantity from "./components/components/data-entry/InputQuantity";
import SelectExpiredDate from "./components/components/data-entry/SelectExpiredDate";
import InputDescription from "./components/components/data-entry/InputDescription";
import ProductDrawer from "./components/ProductDrawer";

function AddVoucher() {
    const [success,setSuccess]=useState(false);
    const [open,setOpen]=useState("");
    const [openDrawer,setOpenDrawer]=useState(false);
  const [form] = StyledForm.useForm();
  const name=useSelector(selector.name);
  const description=useSelector(selector.description);
  const quantity=useSelector(selector.quantity);
  const percentDiscount=useSelector(selector.percentDiscount);
  const info=useSelector(selector.info);
  const productList=useSelector(selector.productList);
  const [count,setCount]=useState(0);
  const dispatch=useDispatch();
  useEffect(() => {
   setCount(productList.length);
  }, [productList]);
  const UpdateInfo = async () => {
    
    dispatch(actions.getVoucherInfo());
     const res= await productApi.addVoucher(info,productList);
    if(res.data.status == 200){
       
        setSuccess(true);
        setTimeout(() => {setSuccess(false);  toastSuccess("Add product Successfully") },2000);
      
    }else{
        toastError(res.data.message);
    }
   
};
const handleFinish = () => {
    UpdateInfo();
};
const onClose = () => {
    setOpenDrawer(false);
}

const handleFinishFailed = () => {
    console.log(' Hãy nhập tất cả các field !!');
};
const confirm = () => {
    NotiModal.confirm({
        maskClosable: true,
        title: 'Bạn có muốn thay đổi thông tin tài khoản?',
        icon: <ExclamationCircleOutlined />,
        content: 'Tài khoản sau khi đổi sẽ không còn còn lưu trữ thông tin trước đó được nữa.',
        okText: 'Xác nhận',
        cancelText: 'Huỷ',
        onOk: () => {
            form.submit();
            // openNotification();
        },
    });
};
  return (
    <Container>
        <StyledForm
                form={form}
                 name="form1"
                 initialValues={{
                     
                     name:name,
                     description:description,
                     quantity:quantity,
                     percentDiscount:percentDiscount

                   }}
                onFinish={handleFinish}
                onFinishFailed={handleFinishFailed}
                                            >   
        <Left><VoucherInfo>
            <AvatarSection/>
            </VoucherInfo>
            <ActionWrapper>
            <Row  style={{justifyContent:"space-around",padding:"0 200px"} }>
                <div onClick={()=>{setOpen(true)}}><Photo/></div>
                <Item   onClick={()=>{setOpenDrawer(true)}} >
                    <StyledBadge count={count} showZero color="lime"  offset={[10, 0]}><BsFillGridFill  style={{marginRight:"20px", fontSize:"25px"}} />Choose Upload</StyledBadge> 
                </Item>
            </Row>
            <Row >
                <Col span={24}>
                <Label level={5}>Voucher Name</Label>
                <InputName />
                 </Col>
            </Row>
            <Row >
                <Col span={24}>
                <Label level={5}>Voucher Name</Label>
                <InputDescription/>
                 </Col>
            </Row>
            <Row >
                <Col span={11}>
                <Label level={5}>Discount </Label>
                <InputPercentDiscount />
                 </Col>
                 <Col span={11}>
                <Label level={5}>Quantity</Label>
                <InputQuantity />
                 </Col>
            </Row>
            <Row >
                <Col span={11}>
                <Label level={5}> Minimum Total</Label>
                <InputMinTotal />
                 </Col>
                 <Col span={11}>
                <Label level={5}>Minimum Item Have to Buy</Label>
                <InputMinItem />
                 </Col>
            </Row>
            <Row >
                <Col span={11}>
                <Label level={5}>Is Apply to All</Label>
                <SelectApplyAll
                 />
                 </Col>
                 <Col span={11}>
                <Label level={5}>Expired Date</Label>
                <SelectExpiredDate />
                 </Col>
            </Row>
            </ActionWrapper>
            </Left>
          <ActionGroup confirm={confirm}/>
          </StyledForm>
       {success && <Success/>}  
       <UploadImg setOpen={setOpen} open={open}/>
       <ProductDrawer onClose={onClose} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
    </Container>
  )
}

export default AddVoucher


