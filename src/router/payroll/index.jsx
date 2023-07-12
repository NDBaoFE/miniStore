import { Link } from "react-router-dom";
import PayrollList from "../payroll/components/payrollList";
import {
  WrapperPayroll,
  StyledSpace,
  ButtonStyled,
  Title,
  WrapperSum,
} from "./payrollStyled";
import { useState } from "react";
import { Button } from "antd";

const Payroll = () => {
  const columns = [
    {
      title: "User ID",
      dataIndex: "userid",
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
      dataIndex: "salaryThisMonth",
      key: "salaryThisMonth",
    },
    {
      title: "History Paid",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <StyledSpace>
          <Link to={'/payroll/:id'}>
            <Button>History</Button>
          </Link>
        </StyledSpace>
      ),
    },
  ];

  const [userPayroll, setUserPayroll] = useState([
    {
      userid: 1,
      name: "Nguyen Huynh Minh Khoi",
      role: "Employee",
      salaryThisMonth: 180.0,
    },
    {
      userid: 2,
      name: "Nguyen Duc Bao",
      role: "Employee",
      salaryThisMonth: 180.0,
    },
    { userid: 3, name: "Nguyen Phi", role: "Employee", salaryThisMonth: 180.0 },
    {
      userid: 4,
      name: "Tran Minh Dat",
      role: "Employee",
      salaryThisMonth: 180.0,
    },
    {
      userid: 5,
      name: "Do Nguyen Bao Tam",
      role: "Guard",
      salaryThisMonth: 180.0,
    },
  ]);

  const totalSalaryThisMonth = userPayroll.reduce(
    (total, user) => total + user.salaryThisMonth,
    0
  );
  return (
    <WrapperPayroll>
      <WrapperSum>
        <Title>Total Salary This Month: {totalSalaryThisMonth}</Title>
        <ButtonStyled>Paid</ButtonStyled>
      </WrapperSum>

      <PayrollList
        setUserPayroll={setUserPayroll}
        userPayroll={userPayroll}
        columns={columns}
      ></PayrollList>
    </WrapperPayroll>
  );
};

export default Payroll;
