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
  PasswordBtn,
  WrapperSalary,
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
import payrollApi from "../../utils/api/payrollApi";
import { formatNumberWithDecoration } from "../../utils";

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
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const showModalPassword = () => {
    navigate("/user/changePassword");
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpenModal(false);
  };
  const { id } = useParams();

  const UpdateInfo = async () => {
    dispatch(actions.getProfileInfo());
    const res = await profileApi.updateProfile({...info,gender: gender == 1? true :false }, id, token);

    if (res.data.status == 200) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        toastSuccess("Update profile Successfully");
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

  const token = localStorage.getItem("Authorization");
  const [salary, setSalary] = useState(1000);
  const [idUser, setIdUser] = useState(0)
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await profileApi.getProfileDetail(token);
        dispatch(actions.setUser(response.data.data));
        dispatch(actions.getProfileInfo());
        setIdUser(response.data.data.userId)
        setUpdated(true);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [dispatch, token]);



  useEffect(() => {
    async function fetchSalaryData() {
      try {
        const response = await payrollApi.getPayrollByUser(idUser, token);
        setPayslips(response.data.data);
        setSalary(formatNumberWithDecoration(response.data.data[0].salary))
      } catch (error) {
        console.error(error);
      }
    }

    fetchSalaryData();
  }, [token, idUser]);


  const confirm = () => {
    const modalContentStyle = {
      paddingRight: "2px",
      paddingTop: "10px"
      // Adjust the value as per your requirement
    };

    NotiModal.confirm({
      maskClosable: true,
      title: "Are you sure want to change your information?",
      icon: <ExclamationCircleOutlined />,
      content: (
        <div style={modalContentStyle}>
          When you click Confirm, all the information would change ?
        </div>
      ),
      centered: true,
      okText: "Confirm",
      cancelText: "Cancel",
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
      title: "Salary",
      dataIndex: "salary",
      key: `salary`,
      render: (_, record) => (
        <span style={{fontWeight:600, color: "green"}}>
          {formatNumberWithDecoration(record.salary)} VND
        </span>
      ),
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
      render: (isPaid) => {
        if (isPaid === false) {
          return (
            <div
              style={{
                color: "red",
                fontWeight: 600,
              }}
            >
              Not yet
            </div>
          );
        } else {
          return (
            <div
              style={{
                color: "green",
                fontWeight: 600,
              }}
            >
              Paid
            </div>
          );
        }
      },
    },
  ];

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
              <Col span={7}>
                <Label level={5}>Gender</Label>
                <SelectGender />
              </Col>
            </Row>

            <Row>
              <Col span={7}>
                <Label level={5}>Role</Label>
                <SelectRole />
              </Col>
              <Col span={7}>
                <Label level={5}>Date of birth</Label>
                <SelectDateOfBirth />
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Label level={5}>Address</Label>
                <InputAddress />
              </Col>
            </Row>


            <Row>
              <Col span={6}>
                <Label level={5}>Password</Label>

                <PasswordBtn onClick={showModalPassword}>
                  Change password
                </PasswordBtn>
              </Col>
            </Row>

            <Row style={{ marginBottom: 15 }}>
              <WrapperSalary>
                <div style={{ fontSize: 20 }}>
                  Salary:
                  <span style={{ color: "green", fontWeight: 600, marginLeft: 10 }}>
             
                    {salary} VND
                  </span>
                </div>
              </WrapperSalary>
            </Row>
            <Row>
              <Col span={24}>
                <Label level={5} style={{fontWeight: 600, marginTop: 20, fontSize: 20}}>Payslip List</Label>
                <PayslipList
             
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
