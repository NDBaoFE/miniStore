import "./passwordStyle.css";
import { Row, Label, StyleForm } from "./StyledPassword";
import { SettingOutlined } from "@ant-design/icons";
import { Col } from "antd";
import InputPassword from "./components/data-entry/InputPassword";
import ActionGroup from "../profile/components/ActionGroup";
import { useSelector } from "react-redux";
import selectors from "./slice/selectors";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { actions } from "./slice";
import passwordApi from "../../utils/api/passwordApi";
import { NotiModal } from "./StyledPassword";
import { toastSuccess, toastError } from "../../components/Toast";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import Success from "../../components/Success";
import { useState } from "react";


const Password = () => {
  const [updated, setUpdated] = useState(false);
  const [success, setSuccess] = useState(false);
  const info = useSelector(selectors.info);
  const password = useSelector(selectors.password);
  const [form] = StyleForm.useForm();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(false);

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpenModal(false);
      setConfirmLoading(false);
    }, 1000);
  };

  const handleFinish = () => {
    UpdatePassword();
  };

  const handleFinishFailed = () => {
    console.log(" Hãy nhập tất cả các field !!");
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpenModal(false);
  };
  const { id } = useParams();

  const UpdatePassword = async () => {
    dispatch(actions.getProfileInfo());
    const res = await passwordApi.changePassword(info, id);

    if (res.data.status == 200) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        toastSuccess("Update user Successfully");
      }, 2000);
    } else {
      toastError(res.data.message || "Update failed, please try again");
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

  const params = useParams();

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
        </div>

        <StyleForm
          form={form}
          name="userForm"
          initialValues={{
            password: password,
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
              <InputPassword></InputPassword>
            </Col>
          </Row>

          <Row>
            <Col span={13}>
              <Label level={5}>Confirm New Password</Label>
              <InputPassword></InputPassword>
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
