import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";
import PayrollList from "../payroll/components/payrollList";
import {
  WrapperPayroll,
  StyledSpace,
  ButtonStyled,
  Title,
  WrapperSum,
} from "./payrollStyled";
import payrollApi from "../../utils/api/payrollApi";
import payslip from "../../utils/api/payslipApi";
import { toastError, toastSuccess } from "../../components/Toast";
import { formatNumberWithDecoration } from "../../utils";

const Payroll = () => {
  const token = localStorage.getItem("Authorization");
  const [reload, setReload] = useState(false);
  const [userPayroll, setUserPayroll] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await payrollApi.getPayrollAll(token);
        setUserPayroll(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [token, reload]);

  const handlePayslipPaid = () => {
    setReload(!reload);
  };

  const columns = [
    {
      title: "User ID",
      dataIndex: "userId",
      key: "userid",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Salary This Month",
      dataIndex: "salary",
      key: "salaryThisMonth",
      render: (_, record) => <span style={{color:"green", fontWeight:600}}>{formatNumberWithDecoration(record.salary)} VND</span>
    },
    {
      title: "History Paid",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <StyledSpace>
          <Link to={`/payroll/${record.userId}`}>
            <Button>History</Button>
          </Link>
        </StyledSpace>
      ),
    },
  ];

  const confirm = async () => {
    Modal.confirm({
      maskClosable: true,
      title: "Are you sure want to pay all this salary?",
      content: "Click 'Confirm' to pay all the salary for user",
      okText: "Confirm",
      cancelText: "Cancel",
      onOk: async () => {
        const token = localStorage.getItem("Authorization");
        const res = await payslip.getPay(token);
        if (res.status === 200) {
          toastSuccess("Paid Successfully");
        } else {
          toastError("Paid Failed");
        }
        handlePayslipPaid();
      },
    });
  };

  let totalSalary = 0

  if(userPayroll !== ""){
    totalSalary = userPayroll.reduce((total, user) => {

        return total + (+user.salary || 0);
    }, 0);
  }


  const totalSalaryFormatted = formatNumberWithDecoration(totalSalary)

  return (
    <WrapperPayroll>
      <WrapperSum>
        <Title>Total Salary This Month: {totalSalaryFormatted} VND</Title>
        <ButtonStyled onClick={() => confirm()}>Paid</ButtonStyled>
      </WrapperSum>
      <PayrollList
        setUserPayroll={setUserPayroll}
        userPayroll={userPayroll}
        reload={reload}
        columns={columns}
      ></PayrollList>
    </WrapperPayroll>
  );
};

export default Payroll;