import "./payrollByUserStyle.css";
import { Col, Button } from "antd";
import { Row, Label } from "./payrollByUserStyled";
import { useState } from "react";
import PayrollListByUser from "./components/payrollListByUser";
import { useEffect } from "react";
import payrollApi from "../../utils/api/payrollApi";
import { actions } from "../profile/components/slice";
import { Link, useParams } from "react-router-dom";
import profileApi from "../../utils/api/profileApi";
import userApi from "../../utils/api/userApi";
import moment from "moment/moment";
import AvatarSection from "../payrollByUser/AvatarSection";

const PayrollByUser = () => {
  const token = localStorage.getItem("Authorization");

  const [payrollByUser, setPayrollByUser] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await payrollApi.getPayrollByUser(id, token);
        setPayrollByUser(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [token]);

  const [dobConvert, setDobConvert] = useState(0)
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userApi.getUserDetail(id, token);
        setProfile(response.data.data);
        setDobConvert(response.data.data.dob)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [token]);

  console.log(profile);
  const dob = new Date(dobConvert)
  const formatted = dob.toLocaleDateString("en-US")

  const columns = [


    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "payslipId",
    },

    {
      title: "End Date",
      dataIndex: "endDate",
      key: "payslipId",
    },

    {
      title: "Total hours",
      dataIndex: "totalHour",
      key: "payslipId",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Shift count",
      dataIndex: "shiftCount",
      key: "salary",
    },
    {
      title: "Status",
      dataIndex: "isPaid",
      key: "isPaid",
      render: (isPaid) => {
        if (isPaid === false || isPaid === null) {
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
  return (
    <div className="wrapper" style={{ paddingBottom: 50 }}>
      <div className="above">
        <div className="information">
          <div className="left" style={{paddingTop:"-100px"}}>
            <AvatarSection></AvatarSection>
          </div>

          <div className="right">
            <Row>
              <Col span={10}>
                <Label>
                  User ID: 
                  <span
                    style={{
                      color: "green",
                      fontSize: 20,
                      fontFamily: "Inter, san-serif",
                      fontWeight: 600,
                      marginLeft: 5
                    }}
                  > {profile.userId}</span>
                </Label>
              </Col>
              <Col span={10}>
                <Label>
                  Role: 
                  <span
                    style={{
                      color: "green",
                      fontSize: 20,
                      fontFamily: "Inter, san-serif",
                      fontWeight: 600,
                      marginLeft: 5
                    }}
                  >{profile.roles}</span>
                </Label>
              </Col>
            </Row>

            <Row>
              <Col span={10}>
                <Label>
                  Name: 
                  <span
                    style={{
                      color: "green",
                      fontSize: 20,
                      fontFamily: "Inter, san-serif",
                      fontWeight: 600,
                      marginLeft: 5
                    }}
                    
                  >{profile.name}</span>
                </Label>
              </Col>
              <Col span={10}>
                <Label>
                  Email:
                  <span
                    style={{
                      color: "green",
                      fontSize: 20,
                      fontFamily: "Inter, san-serif",
                      fontWeight: 600,
                      marginLeft: 5
                    }}
                  >
                    {profile.email}
                  </span>
                </Label>
              </Col>
            </Row>

            <Row>
              <Col span={10}>
                <Label>
                  Date of Birth: 
                  <span
                    style={{
                      color: "green",
                      fontSize: 20,
                      fontFamily: "Inter, san-serif",
                      fontWeight: 600,
                      marginLeft: 5
                    }}
                    
                  >{formatted}</span>
                </Label>
              </Col>
              <Col span={10}>
                <Label>
                  Phone:
                  <span
                    style={{
                      color: "green",
                      fontSize: 20,
                      fontFamily: "Inter, san-serif",
                      fontWeight: 600,
                      marginLeft: 5
                    }}
                  >
                    {profile.phone}
                  </span>
                </Label>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="below">
        <PayrollListByUser
          SetUserPayrollByUser={setPayrollByUser}
          userPayrollByUser={payrollByUser}
          columns={columns}
        />

        <Button style={{ marginLeft: 900, marginBottom: 50, marginTop: 50 }}>
          <Link to={"/payroll"}>Back to Payslip list</Link>
        </Button>
      </div>
    </div>
  );
};

export default PayrollByUser;
