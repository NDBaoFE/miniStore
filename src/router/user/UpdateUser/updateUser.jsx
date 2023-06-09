
import { Col } from "antd";

import {
  FormAddUserSection,
  Title,
  Left,
  WrapperFormUser,
  Label,
  StyledForm,
  Row,NotiModal
} from "./updateUserStyle";

import { actions } from "./components/slice";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { InputPhone, InputName, InputEmail, InputAddress, } from "./components/components";
import SelectDateOfBirth from "./components/components/data-entry/SelectBirthdate";
import SelectGender from "./components/components/data-entry/SelectGender";
import SelectRole from "./components/components/data-entry/SelectRole";
import AvatarSection from "./components/AvatarSection"; 
import ActionGroup from "./components/ActionGroup";
import Success from "../../../components/Success";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import selectors from "./components/slice/selectors";
import userApi from "../../../utils/api/userApi";
import { toastError, toastSuccess } from "../../../components/Toast";
import Photo from "./components/Photo";
import UploadImg from "./components/Upload"
import { useParams } from "react-router-dom";


function UpdateUser() {
const [success,setSuccess]=useState(false);
const [open, setOpen] = useState("")
const [form] = StyledForm.useForm()
const name = useSelector(selectors.name);
const email = useSelector(selectors.email) ;
const dob = useSelector(selectors.dob);
const phone = useSelector(selectors.phone) 
const address = useSelector(selectors.address);
const roleId = useSelector(selectors.roleId) 
const gender = useSelector(selectors.gender);
const info = useSelector(selectors.info) 
const dispatch=useDispatch();

const {id} = useParams()
const UpdateInfo = async () => {
    
  dispatch(actions.getUserInfo());
   const res= await userApi.updateUser(info, id);
  if(res.data.status == 200){
     
      setSuccess(true);
      setTimeout(() => {setSuccess(false);  toastSuccess("Update user Successfully") },2000);
    
  }else{
      toastError(res.data.message);
  }
 
};

const handleFinish = () => {
  UpdateInfo();
};

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
    <FormAddUserSection>
      <Left>
    <AvatarSection></AvatarSection>
   
      </Left>

      <WrapperFormUser>
        <Title>Personal Information</Title>

        <StyledForm
          form={form}
          name="userForm"
          initialValues={{
            name:name,
            phone:phone,
            email:email,
            gender: gender,
            roleId: roleId,
            address:address,
            dob: dob
          }}

          onFinish={handleFinish}
          onFinishFailed={handleFinishFailed}
        
        >
            <Row  onClick={()=>{setOpen(true)}} style={{justifyContent:"center"} }><Photo /></Row>
          <Row>
            <Col span={24}>
              <Label level={5}>Name</Label>
              <InputName />
            </Col>
          </Row>

          <Row>
            <Col span={13}>
              <Label level={5}>Phone</Label>
              <InputPhone />
            </Col>
            <Col span={8}>
              <Label level={5}>Gender</Label>
              <SelectGender />
            </Col>
          
          </Row>

          <Row>
            <Col span={11}>
              <Label level={5}>Date of Birth</Label>
              <SelectDateOfBirth/>
            </Col>

          

            <Col span={8}>
              <Label level={5}>Role</Label>
              <SelectRole />
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Label level={5}>Address</Label>
              <InputAddress />
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Label level={5}>Email</Label>
              <InputEmail />
            </Col>
          </Row>

        <ActionGroup confirm={confirm}/>
        </StyledForm>
        {success && <Success/>}  
        <UploadImg setOpen={setOpen} open={open}/>
      </WrapperFormUser>
    </FormAddUserSection>
  );
}

export default UpdateUser;
