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
} from "./viewUserStyle";

import { actions } from "./components/slice";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  InputName,
  InputAddress,
  InputEmail,
  InputPhone,
} from "./components/components";
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
import UploadImg from "./components/Upload";
import { useNavigate, useParams } from "react-router-dom";

import { useEffect } from "react";

function ViewUser() {
  const [updated, setUpdated] = useState(false);
  const [success, setSuccess] = useState(false);
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


 

  const { id } = useParams();
  const navigate = useNavigate()
  const UpdateInfo = async () => {
    const token=localStorage.getItem("Authorization");
    dispatch(actions.getUserInfo());
    const res = await userApi.updateUser(info, id,token);

    if (res.data.status == 200) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        toastSuccess("Update user Successfully");
      }, 2000);
    } else {
      toastError(res.data.message || "Update failed, please try again8");
    }
  };

  const handleFinish = () => {
    UpdateInfo();
  };

  const handleFinishFailed = () => {
    console.log(" Hãy nhập tất cả các field !!");
  };
  const token=localStorage.getItem("Authorization");
  const [roleImg, setRoleImg] = useState("")

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await userApi.getUserDetail(id,token);
        dispatch(actions.setUser(response.data.data));
        
        setRoleImg(response.data.data.roles)
        dispatch(actions.getUserInfo());
        setUpdated(true);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [token]);
console.log(roleImg);

  const confirm = () => {
    
    NotiModal.confirm({
      maskClosable: true,
      title: "Are you sure want to change this user information?",
      icon: <ExclamationCircleOutlined />,
      centered: true,
      content:
        "Click 'Confirm' to direct to Edit Page",
      okText: "Confirm",
      cancelText: "Cancel",
      onOk: () => {
        navigate(`/user/update/${id}`)
        // openNotification();
      },
    });
  };

  return (
    <FormAddUserSection>
      <Left>
        <AvatarSection></AvatarSection>
        
      </Left>

      {updated && 
        <WrapperFormUser>
          <Title>Personal Information</Title>

          <StyledForm
            form={form}
            name="userForm"
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
                <SelectGender></SelectGender>
              </Col>
           
            </Row>

            <Row>
              <Col span={10}>
                <Label level={5}>Date of Birth</Label>
                <SelectDateOfBirth />
              </Col>

              <Col span={10}>
                <Label style={{marginTop: 45, marginLeft:15}} level={5}>Role</Label>
                <SelectRole />
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Label  level={5}>Address</Label>
                <InputAddress />
              </Col>
            </Row>

            <ActionGroup confirm={confirm} />
          </StyledForm>
          {success && <Success />}
          <UploadImg setOpen={setOpen} open={open} />
        </WrapperFormUser>
      }
    </FormAddUserSection>
  );
}

export default ViewUser;
