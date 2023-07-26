import { Link, useParams } from "react-router-dom";
import PayrollList from "../payroll/components/payrollList";
import {
  WrapperPayroll,
  StyledSpace,
  ButtonStyled,
  Title,
  WrapperSum,
} from "./payrollStyled";
import { useEffect, useState } from "react";
import { Button } from "antd";
import payrollApi from "../../utils/api/payrollApi";

const Payroll = () => {

  const token = localStorage.getItem('Authorization')

  const [userPayroll, setUserPayroll] = useState([])

  useEffect(()=>{
    async function fetchData(){
      try{
        const response = await payrollApi.getPayrollAll(token)
        console.log(response.data.data)
        setUserPayroll(response.data.data)
      
      }catch(error){
      console.error(error);
      }
    }
    fetchData()


  }, [token])




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
      dataIndex: "roleName",
      key: "role",
    },
    {
      title: "Salary This Month",
      dataIndex: "salary",
      key: "salaryThisMonth",
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

  // const [userPayroll, setUserPayroll] = useState([
  //   {
  //     userid: 1,
  //     name: "Nguyen Huynh Minh Khoi",
  //     role: "Employee",
  //     salaryThisMonth: 180.0,
  //   },
  //   {
  //     userid: 2,
  //     name: "Nguyen Duc Bao",
  //     role: "Employee",
  //     salaryThisMonth: 180.0,
  //   },
  //   { userid: 3, name: "Nguyen Phi", role: "Employee", salaryThisMonth: 180.0 },
  //   {
  //     userid: 4,
  //     name: "Tran Minh Dat",
  //     role: "Employee",
  //     salaryThisMonth: 180.0,
  //   },
  //   {
  //     userid: 5,
  //     name: "Do Nguyen Bao Tam",
  //     role: "Guard",
  //     salaryThisMonth: 180.0,
  //   },
  // ]);

  const { id } = useParams();
  const totalSalaryThisMonth = userPayroll.reduce(
    (total, user) => total + user.salary,
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
