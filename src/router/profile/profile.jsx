import { Col , Input} from "antd";

import {
  FormAddUserSection,
  Title,
  Left,
  WrapperFormUser,
  Label,
  StyledForm,
  Row,
  NotiModal,
  PasswordBtn
} from "./profileStyle";
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
import Success from "../../components/Success";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import selectors from "./components/slice/selectors";

import { toastError, toastSuccess } from "../../components/Toast";
import Photo from "./components/Photo";
import UploadImg from "./components/Upload";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import profileApi from "../../utils/api/profileApi";
import PayslipList from "./components/components/PayslipList";

import { useNavigate } from "react-router-dom";
import salaryApi from "../../utils/api/salaryApi";

function Profile() {
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
  const password = useSelector(selectors.password);
  const payslip = useSelector(selectors.payslip);
  const info = useSelector(selectors.info);
  const dispatch = useDispatch();
const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  
  

  const showModalPassword = () => {
    navigate('/user/changePassword')
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpenModal(false);
  };
  const { id } = useParams();

  const UpdateInfo = async () => {
    dispatch(actions.getProfileInfo());
    const res = await profileApi.updateProfile(info, id);

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

  const handleFinish = () => {
    UpdateInfo();
  };

  const handleFinishFailed = () => {
    console.log(" Hãy nhập tất cả các field !!");
  };


  const [salary, setSalary] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await profileApi.getProfileDetail();
        dispatch(actions.setUser(response.data.data));
        console.log(response.data.data)
        dispatch(actions.getProfileInfo());
        setUpdated(true);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [dispatch]);


  useEffect(() => {
    async function fetchSalaryData() {
      try {
        const response = await salaryApi.getSalaryOfUser();
        setSalary(response.data.data.salary);
        console.log(response.data.data.salary); // Assuming the salary data is directly available in the response
      } catch (error) {
        console.error(error);
      }
    }

    fetchSalaryData();
  }, []);

  
  
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
  const [reload, SetReload] = useState(false);
  const [current, setCurrent] = useState(parseInt(params.page, 9) || 1);

  const columns = [
    {
      title: "userId",
      dataIndex: "userId",
      key: `userId`,
    },

    {
      title: "Salary",
      dataIndex: "salary",
      key: `salary`,
    },

    {
      title: "StartDate",
      dataIndex: "startDate",
      key: `startDate`,
    },
    {
      title: "EndDate",
      dataIndex: "endDate",
      key: `endDate`,
    },
    {
      title: "totalHour",
      dataIndex: "totalHour",
      key: `shiftCount`,
    },

    {
      title: "Date",
      dataIndex: "date",
      key: `date`,
    },

    {
      title: "isPaid",
      dataIndex: "isPaid",
      key: `isPaid`,
      render: (_, record) => (
        <span>{record.isPaid? 'Yes' : record.isPaid== 'No'? 'No': 'Not yet'}</span>
      ),
    },
  ];

  const [search, setSearch] = useState("");
  const [payslips, setPayslips] = useState([]);

  return (
    <FormAddUserSection>
      <Left>
        <AvatarSection></AvatarSection>
      </Left>

      {updated && (
        <WrapperFormUser>
          <Title>Personal Information</Title>

          <StyledForm
            form={form}
            name="userForm"
            initialValues={{
              name: name,
              phone: phone,
              email: email,
              password: password,
              gender: gender,
              roleId: roleId,
              address: address,
              dob: dob,
              payslip: payslip,
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
              <Col span={8}>
                <Label level={5}>Gender</Label>
                <SelectGender/>
              </Col>
            </Row>

            <Row>
              <Col span={11}>
                <Label level={5}>Date of Birth</Label>
                <SelectDateOfBirth />
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
              <Col span={13}>
                <Label level={5}>Password</Label>
              
                 <PasswordBtn  onClick={showModalPassword}>
                  Open the password
                </PasswordBtn> 
  
              </Col>
              
              <Col span={7}>
                <Label level={5}>Salary</Label>
                <Input value={salary} disabled/>
              </Col>
      
            </Row>
            <Row>
              <Col span={24}>
                <Label level={5}>Payslip List</Label>
                <PayslipList
                  search={search}
                  setPayslips={setPayslips}
                  payslips={payslips}
                  columns={columns}
                  setCurrent={setCurrent}
                  current={current}
                  reload={reload}
                />
              </Col>
            </Row>
            
            <ActionGroup confirm={confirm} />
          </StyledForm>
          {success && <Success />}
          <UploadImg setOpen={setOpen} open={open} />
        </WrapperFormUser>
      )}
    </FormAddUserSection>
  );
}

export default Profile;
