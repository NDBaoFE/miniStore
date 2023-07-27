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
import { Button, Modal } from "antd";
import payrollApi from "../../utils/api/payrollApi";
import orderManagementApi from "../../utils/api/orderManagementApi";
import payslip from "../../utils/api/payslipApi";
import { toastError, toastSuccess } from "../../components/Toast";

const Payroll = () => {
  const token = localStorage.getItem("Authorization");
  const [reload, SetReload] = useState(false);
  const [userPayroll, setUserPayroll] = useState([]);




  useEffect(() => {
    async function fetchData() {
      try {
        const response = await payrollApi.getPayrollAll(token);
        console.log(response.data.data);
        setUserPayroll(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [token, reload, token]);

  const handlePayslipPaid = () => {
    // Refresh the vouchers by triggering a re-render of the VoucherList component
    // This can be done by incrementing the current page number or any other way to indicate a change
    SetReload(!reload);
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

  const confirm = async () => {
    Modal.confirm({
      maskClosable: true,
      title: "Bạn có muốn trả số lương này không?",
      content: "Khi bạn nhấn đồng ý, lương sẽ được trả cho các nhân viên",
      okText: "Xác nhận",
      cancelText: "Huỷ",
      onOk: async () => {
        const token = localStorage.getItem("Authorization");
        const res = await payslip.getPay(token);
        if (res.status === 200) {
          toastSuccess("Paid Succesfully");
        } else {
          toastError("Paid Failed");
        }

        handlePayslipPaid()
      },
      
    });
  };

 
  return  (
      <WrapperPayroll>
        <WrapperSum>
          <Title>Total Salary This Month:  </Title>
          <ButtonStyled onClick={() => confirm()}>Paid</ButtonStyled>
        </WrapperSum>

        <PayrollList
          setUserPayroll={setUserPayroll}
          userPayroll={userPayroll}
          reload={reload}
          columns={columns}
        ></PayrollList>
      </WrapperPayroll>
    )
  
};

export default Payroll;
