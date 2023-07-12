import "./payrollByUserStyle.css";
import { Col, Input } from "antd";
import { Row, Label } from "./payrollByUserStyled";
import { useState } from "react";
import PayrollListByUser from "./components/payrollListByUser";

const PayrollByUser = () => {
  const [userPayrollByUser, SetUserPayrollByUser] = useState(
    {
      userid: 1,
      name: "Nguyen Huynh Minh Khoi",
      role: "Employee",
      email:"mkhoi123@gmail.com",
      payslip: [
        { payslipId: 1, salary: 180.0, status: "paid"},
        { payslipId: 2, salary: 180.0 , status: "paid"},
        { payslipId: 3, salary: 180.0 , status: "paid"},
        { payslipId: 4, salary: 180.0 , status: "paid"},
        { payslipId: 5, salary: 180.0 , status: "paid"},
        { payslipId: 6, salary: 180.0 , status: "paid"},
        { payslipId: 7, salary: 180.0 , status: "unpaid"},
        { payslipId: 8, salary: 0 },
        { payslipId: 9, salary: 0 },
        { payslipId: 10, salary: 0 },
        { payslipId: 11, salary: 0 },
        { payslipId: 12, salary: 0 },
      ],
    },
  );

  const columns = [
    {
      title: "Payslip ID",
      dataIndex: "payslipId",
      key: "payslipId",
      render: (_, record) => (
        <>
        {
          <div key={record.payslipId}>
            <span>{record.payslipId}</span>
          </div>
        }
      </>
      ),
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
      render: (_, record) => (
        <>
          {
            <div key={record.payslipId}>
              <span>{record.salary}</span>
            </div>
          }
        </>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => (
        <>
          {
            <div key={record.payslipId}
            style={{
              color: record.status === "paid" ? "green" : "red", fontSize:16, textAlign: 'left'
            }}>
              <span>{record.status}</span>
            </div>
          }
        </>
      ),

    },
  ];


    
  
  return (
    <div className="wrapper">
      <div className="above">
        <div className="information">
          <div className="left">
            <div className="IMG"></div>
          </div>

          <div className="right">
            <Row>
              <Col span={10}>
                <Label>User ID: </Label>
                <Input value={userPayrollByUser.userid} style={{color: "black"}} disabled></Input>
              </Col>
              <Col span={10}>
                <Label>Role: </Label>
                <Input value={userPayrollByUser.role} disabled style={{color: "black"}}></Input>
              </Col>
            </Row>

            <Row>
              <Col span={10}>
                <Label>Name: </Label>
                <Input value={userPayrollByUser.name} style={{color: "black"}}disabled></Input>
              </Col>
              <Col span={10}>
                <Label>Email: </Label>
                <Input value={userPayrollByUser.email} style={{color: "black"}} disabled></Input>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="below">
      <PayrollListByUser
          SetUserPayrollByUser={SetUserPayrollByUser}
          userPayrollByUser={userPayrollByUser.payslip}
          columns={columns}

        />
      </div>
    </div>
  );
};

export default PayrollByUser;
