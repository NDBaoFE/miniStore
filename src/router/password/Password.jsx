import "./passwordStyle.css";
import { Row, Label, StyleForm } from "./StyledPassword";
import { SettingOutlined } from "@ant-design/icons";
import { Col, Form, Input } from "antd";
import InputPassword from "./components/data-entry/InputPassword";
import ActionGroup from "../profile/components/ActionGroup";
import { useSelector } from "react-redux";
import selectors from "./slice/selectors";
import { useDispatch } from "react-redux";

import { actions } from "./slice";
import passwordApi from "../../utils/api/passwordApi";
import { NotiModal } from "./StyledPassword";
import { toastSuccess, toastError } from "../../components/Toast";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import Success from "../../components/Success";
import { useState } from "react";
import InputNewPassword from "./components/data-entry/InputNewPassword";
import ConfirmPassword from "./components/data-entry/ConfirmPassword";

const Password = () => {
  const [updated, setUpdated] = useState(false);
  const [success, setSuccess] = useState(false);
  const info = useSelector(selectors.info);
  const password = useSelector(selectors.password);
  const newPassword = useSelector(selectors.newPassword)
  const [confirmPassword,setConfirmPassword]=useState("");
  const handleInputChange=(e)=>{
    
    setConfirmPassword(e.target.value);
    console.log(confirmPassword);
  }
  const [form] = StyleForm.useForm();
  const dispatch = useDispatch();
  



  const handleFinish = (values) => {
    console.log(values);
    if (values.newPassword !== values.confirmPassword) {
      toastError("New password and confirm password do not match");
      return;
    }
     
    UpdatePassword()
    
   
  };

  const handleFinishFailed = () => {
    console.log(" Hãy nhập tất cả các field !!");
  };


 const token = localStorage.getItem('Authorization')

  const UpdatePassword = async () => {
    dispatch(actions.getPasswordInfo());
    const res = await passwordApi.changePassword(info, token);
   
    if (res.data.status == 200) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        toastSuccess("Update password Successfully");
      }, 2000);
    } else {
      toastError(res.data.message || "Change password failed, please try again");
    }
  };

  const confirm = () => {
    NotiModal.confirm({
      maskClosable: true,
      title: "Bạn có muốn thay đổi thông tin tài khoản?",
      icon: <ExclamationCircleOutlined />,
      content:
        "Tài khoản sau khi đổi sẽ không còn còn lưu trữ thông tin trước đó được nữa.",
      okText: "Xác nhận",
      cancelText: "Huỷ",
      onOk: () => {
        form.submit();
        // openNotification();
      },
    });
  };

  return (
    <div className="container">
      <div className="wrapper-change-password">
        <div className="wrapper-title">
          <div className="title">
            <SettingOutlined
              style={{ marginRight: 10, fontSize: 25 }}
            ></SettingOutlined>
            Change Password <br></br>
            You should use strong new password you have not use yet
          </div>
          <hr />
        </div>

        <StyleForm
          form={form}
          name="userForm"
          initialValues={{
            oldPassword: password,
            newPassword: newPassword,
            confirmPassword:confirmPassword

          }}
          onFinish={handleFinish}
          onFinishFailed={handleFinishFailed}
        >
          <Row>
            <Col span={13}>
              <Label level={5}>Old Password</Label>
              <InputPassword></InputPassword>
            </Col>
          </Row>
          <Row>
            <Col span={13}>
              <Label level={5}>New Password</Label>
              <InputNewPassword></InputNewPassword>
            </Col>
          </Row>

          <Row>
            <Col span={13}>
              <Label level={5}>Confirm Password</Label>
              <ConfirmPassword></ConfirmPassword>
            </Col>
          </Row>

          <ActionGroup confirm={confirm}></ActionGroup>
        </StyleForm>
        {success && <Success/>}
      </div>
    </div>
  );
};

export default Password;
