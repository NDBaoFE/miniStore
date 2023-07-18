import "./payrollByUserStyle.css";
import { Col, Input } from "antd";
import { Row, Label } from "./payrollByUserStyled";
import { useState } from "react";
import PayrollListByUser from "./components/payrollListByUser";
import { useEffect } from "react";
import payrollApi from "../../utils/api/payrollApi";
import { actions } from "../profile/components/slice";
import { useParams } from "react-router-dom";
import profileApi from "../../utils/api/profileApi"

const PayrollByUser = () => {


const token = localStorage.getItem('Authorization')

  const [payrollByUser, setPayrollByUser] = useState([]);
const {id} = useParams()
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


  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await profileApi.getProfileDetail(token);
        setProfile(response.data.data);

      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [token]);

  const name = payrollByUser.map((obj) => obj.name)[0];
  const role = payrollByUser.map((obj) => obj.roleName)[0];
  const userId = payrollByUser.map((obj) => obj.userId)[0];
  const email = payrollByUser.map((obj) => obj.email)[0];
console.log(name);
 


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
      render: (isPaid) =>{
          if(isPaid === null){
            return (
              <div style={{
                color: "red",
                fontWeight: 600
              }}>Not yet</div>
            )
          }else{
            return (
              <div style={{
                color: "green",
                fontWeight: 600
              }}>Paid</div>
            )
          }
        
        
      } 
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
                <Label>User ID: <span style={{color: "green", fontSize:20 ,fontFamily: "Inter, san-serif", fontWeight:600}}>{userId}</span></Label>
            
              </Col>
              <Col span={10}>
                <Label>Role: <span style={{color: "green", fontSize:20,fontFamily: "Inter, san-serif", fontWeight:600}}>{role}</span></Label>
              
              </Col>
            </Row>

            <Row>
              <Col span={10}>
                <Label>Name: <span style={{color: "green", fontSize:20,fontFamily: "Inter, san-serif", fontWeight:600}}>{name}</span></Label>
           
              </Col>
              <Col span={10}>
                <Label>Email: <span style={{color: "green", fontSize:20,fontFamily: "Inter, san-serif", fontWeight:600}}>{email}</span></Label>
              
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
      </div>
    </div>
  );
};

export default PayrollByUser;
