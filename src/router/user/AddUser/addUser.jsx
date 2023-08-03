import { Col } from "antd";

import {
  FormAddUserSection,
  Title,
  Left,
  WrapperFormUser,
  Label,
  StyledForm,
  Row,
  NotiModal,
} from "./addUserStyle";0

import { actions } from "./components/slice";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  InputPhone,
  InputName,
  InputEmail,
  InputAddress,
} from "./components/components";
import SelectDateOfBirth from "./components/components/data-entry/SelectBirthdate";
import SelectGender from "./components/components/data-entry/SelectGender";
import SelectRole from "./components/components/data-entry/SelectRole";
import AvatarSection from "./components/AvatarSection";
import ActionGroup from "./components/ActionGroup";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import selectors from "./components/slice/selectors";
import userApi from "../../../utils/api/userApi";
import { toastError, toastSuccess } from "../../../components/Toast";
import Photo from "./components/Photo";
import UploadImg from "./components/Upload";
import { useNavigate } from "react-router-dom";
import Success from "../../../components/Success";

const AddUser = () => {
  const navigate=useNavigate();

  const [open, setOpen] = useState("");
  const [form] = StyledForm.useForm();
  const name = useSelector(selectors.name);
  const email = useSelector(selectors.email);
  const dob = useSelector(selectors.dob);
  const phone = useSelector(selectors.phone);
  const address = useSelector(selectors.address);
  const roleId = useSelector(selectors.roleId);
  const gender = useSelector(selectors.gender);
  const info = useSelector(selectors.info);
  const dispatch = useDispatch();

  const [success,setSuccess]=useState(false);



  const UpdateInfo = async () => {
    const token=localStorage.getItem("Authorization");
    dispatch(actions.getUserInfo());
    const res = await userApi.addUser(info,token);

    if(res.data.status == 200){
       
      setSuccess(true);
      setTimeout(() => {setSuccess(false);  
      toastSuccess("Add User Successfully");
      navigate('/user'); 
    },1000);
      
  }else{
      toastError(res.data.message);
  }
 
  };

  const handleFinish = () => {
    UpdateInfo();
  };

  const handleFinishFailed = () => {
    console.log("Please enter all of the information");
  };

  const confirm = () => {
    NotiModal.confirm({
      maskClosable: true,
      title: "Are you want add this user ? ",
      icon: <ExclamationCircleOutlined />,
      centered: true,
      content:
        "Click to 'Comfirm' to  add user",
      okText: "Confirm",
      cancelText: "Cancel",
      onOk: () => {

          form.submit();
          
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
          name="form1"
          initialValues={{
            name: name,
            phone: phone,
            email: email,
            gender: gender,
            roleId: roleId,
            address: address,
            dob: dob,
          }}
          onFinish={handleFinish}
          onFinishFailed={handleFinishFailed}
        >
          <Row
            onClick={() => {
              setOpen(true);
            }}
            style={{ justifyContent: "center" }}
          >
            <Photo />
          </Row>
          <Row>
            <Col span={24}>
              <Label level={5}>Name</Label>
              <InputName />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Label level={5}>Email</Label>
              <InputEmail />
            </Col>
          </Row>

          <Row>
            <Col span={13}>
              <Label level={5}>Phone</Label>
              <InputPhone />
            </Col>
            <Col span={10}>
              <Label level={5} style={{marginTop:'-20px', marginLeft:15}}>Gender</Label>
              <SelectGender />
            </Col>
          </Row>

          <Row>
            <Col span={6}>
              <Label level={5}>Date of Birth</Label>
              <SelectDateOfBirth />
            </Col>

            <Col span={10} style={{marginLeft:200}}>
              <Label level={5} style={{marginTop: 45, marginLeft:15}}>Role</Label>
              <SelectRole />
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Label level={5}>Address</Label>
              <InputAddress />
            </Col>
          </Row>

          <ActionGroup confirm={confirm} />
        </StyledForm>

        <UploadImg setOpen={setOpen} open={open} />
      </WrapperFormUser>
    </FormAddUserSection>
  );
};

export default AddUser;
