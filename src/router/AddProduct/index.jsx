
import { Container, StyledForm,NotiModal, Label } from "./style"
import { Left,Right,ProductInfo,Stock,ActionWrapper,Row } from "./style"
import AvatarSection from "./components/AvatarSection"
import Photo from "./components/Photo"
import { useDispatch, useSelector } from 'react-redux';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Col } from "antd";
import InputName from "./components/components/data-entry/InputName";
import  InputPrice  from "./components/components/data-entry/InputPrice";
import InputCost from "./components/components/data-entry/InputCost";
import InputProductCode from "./components/components/data-entry/InputProductCode";
import SelectType from "./components/components/data-entry/SelecType";
import InputQuantity from "./components/components/data-entry/InputQuantity";
import InputQuantityAlert from "./components/components/data-entry/InputQuantityAlert";
import ActionGroup from "./components/ActionGroup";
import selector from "./components/slice/selectors";
import { actions } from "./components/slice";
import productApi from "../../utils/api/productApi";
import Success from "../../components/Success";
import {  useState } from "react";
import UploadImg from "./components/Upload";
import { toastError, toastSuccess } from "../../components/Toast";
import { useNavigate } from "react-router-dom";

function AddProduct() {
    const [success,setSuccess]=useState(false);
    const [open,setOpen]=useState("");
  const [form] = StyledForm.useForm();
  const name=useSelector(selector.name);
  const price=useSelector(selector.price);
  const cost=useSelector(selector.cost);
  const productCode=useSelector(selector.productCode);
  const productTypeId=useSelector(selector.productTypeId);
  const quantity=useSelector(selector.quantity);
  const info=useSelector(selector.info);
  

  const dispatch=useDispatch();
    const navigate=useNavigate()
  const UpdateInfo = async () => {
    
    dispatch(actions.getProductInfo());
    const token=localStorage.getItem("Authorization");
     const res= await productApi.addProduct(info,token);
    if(res.data.status == 200){
       
        setSuccess(true);
        setTimeout(() => {setSuccess(false);  
        toastSuccess("Add product Successfully");navigate(-1); },2000);
        
    }else{
        toastError(res.data.message);
    }
   
};
const handleFinish = () => {
    UpdateInfo();
};

const handleFinishFailed = () => {
    toastError("Validation failed, please check again");
  };
const confirm = () => {
    NotiModal.confirm({
        maskClosable: true,
        title: 'Do you want to add this product ?',
        icon: <ExclamationCircleOutlined />,
        content: 'Click "Confirm" to add this product',
        okText: 'Confirm',
        centered: true,
        cancelText: 'Cancel',
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
                      name:  name ,
                      price: price,
                      cost:cost,
                      productCode:productCode,
                      productTypeId:productTypeId,
                      quantity:quantity
                   }}
                onFinish={handleFinish}
                onFinishFailed={handleFinishFailed}
                                            >
        <Left><ProductInfo>
            <AvatarSection/>
            </ProductInfo>
            <ActionWrapper>
          
            <Row  onClick={()=>{setOpen(true)}} style={{justifyContent:"center"} }><Photo /></Row>
            <Row >
                <Col span={24}>
                <Label level={5}>Product name</Label>
                <InputName />
                 </Col>
            </Row>
            <Row >
                <Col span={11}>
                <Label level={5}>Product Price</Label>
                <InputPrice />
                 </Col>
                 <Col span={11}>
                <Label level={5}>Product Cost</Label>
                <InputCost />
                 </Col>
            </Row>
            <Row >
                <Col span={24}>
                <Label level={5}>Product code</Label>
                <InputProductCode />
                 </Col>
            </Row>
            <Row >
                <Col span={24}>
                <Label level={5}>Product Category</Label>
                <SelectType
                 />
                 </Col>
            </Row>
           
            </ActionWrapper>
            </Left>
        <Right><Stock>
        <Row >
                <Col span={24}>
                   <h2>Quantity Management </h2>
                 </Col>
            </Row>
        <Row >
                <Col span={24}>
                <Label level={5}>Product Quantity</Label>
                <InputQuantity/>
                 </Col>
            </Row>
            <Row >
                <Col span={24}>
                <Label level={5}>Product Quantity on Alert</Label>
                <InputQuantityAlert/>
                 </Col>
            </Row>
                   <Row></Row>
          </Stock></Right>
          <ActionGroup confirm={confirm}/>
          </StyledForm>
       {success && <Success/>}  
       <UploadImg setOpen={setOpen} open={open}/>
    </Container>
  )
}

export default AddProduct


