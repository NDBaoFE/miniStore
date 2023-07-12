import "./payrollByUserStyle.css";
import { Col, Input } from "antd";
import { Row, Label } from "./payrollByUserStyled";
import { useState } from "react";
import PayrollListByUser from "./components/payrollListByUser";
import { useEffect } from "react";
import payrollApi from "../../utils/api/payrollApi";
import { actions } from "../profile/components/slice";
import { useParams } from "react-router-dom";

const PayrollByUser = () => {




  const [test, setTest] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await payrollApi.getPayrollByUser();
        setTest(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    {
      title: "Payslip ID",
      dataIndex: "payslipId",
      key: "payslipId",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Status",
      dataIndex: "isPaid",
      key: "isPaid",
      render: (isPaid) => (
        <div
          style={{
            color: isPaid === "paid" ? "green" : "red",
            fontSize: 16,
            textAlign: "left",
          }}
        >
          {isPaid}
        </div>
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
                <Input
                  value={test?.userId}
                  style={{ color: "black" }}
                  disabled
                ></Input>
              </Col>
              <Col span={10}>
                <Label>Role: </Label>
                <Input
                  value={test?.roleName}
                  disabled
                  style={{ color: "black" }}
                ></Input>
              </Col>
            </Row>

            <Row>
              <Col span={10}>
                <Label>Name: </Label>
                <Input
                  value={test?.name}
                  style={{ color: "black" }}
                  disabled
                ></Input>
              </Col>
              <Col span={10}>
                <Label>Email: </Label>
                <Input
                  value={test?.email}
                  style={{ color: "black" }}
                  disabled
                ></Input>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="below">
        <PayrollListByUser
          SetUserPayrollByUser={setTest}
          userPayrollByUser={test}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default PayrollByUser;
