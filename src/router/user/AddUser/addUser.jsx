
import { Col } from "antd";

import {
  FormAddUserSection,
  Title,
  Left,
  WrapperFormUser,
  Label,
  StyledForm,
  Row,NotiModal
} from "./addUserStyle";

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


const AddUser = () => {
const [success,setSuccess]=useState(false);
const [open, setOpen] = useState("")
const [form] = StyledForm.useForm()
const name = useSelector(selectors.name);
const email = useSelector(selectors.email) ;
const birthdate = useSelector(selectors.birthdate);
const phone = useSelector(selectors.phone) 
const address = useSelector(selectors.address);
const roleTypeId = useSelector(selectors.roleTypeId) 
const genderTypeId = useSelector(selectors.genderTypeId);
const info = useSelector(selectors.info) 
const dispatch=useDispatch();

const UpdateInfo = async () => {
    
  dispatch(actions.getUserInfo());
   const res= await userApi.addUser(info);
  if(res.data.status == 200){
     
      setSuccess(true);
      setTimeout(() => {setSuccess(false);  toastSuccess("Add user Successfully") },2000);
    
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
            genderTypeId: genderTypeId,
            roleTypeId: roleTypeId,
            address:address,
            birthdate: birthdate
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
};

export default AddUser;
