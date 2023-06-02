

import "./loginform.css";
import {  Row, Col } from "antd";
import {Form,Input} from "antd"
import Footer from "./footter/footer";
import Store from "../../assets/img/Store.png"
import { Container, MainTitle , IMG} from "./style";




const LoginForm = () => {
  return (
    <Container> 
      <div className="container">
        <Row md={12} style={{justifyContent:"center"}}>
          <Col className="loginform-cover" md={4} >
            <MainTitle className="main-title">
              Mini<span>Store</span>
            </MainTitle>
            <Form className="loginform">
              <div className="wrap-email-input">
                <Form.Item htmlFor="email">
                  <Input
                    id="email"
                    type="text"
                    placeholder="Enter your email"
                    className="input-email"
                  />
                </Form.Item>
              </div>

              <div className="wrap-input-password">
                <Form.Item htmlFor="password">
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="input-password"
                  />
                </Form.Item>
              </div>

              <div className="wrap-btn-login">
                <button type="submit" className="btn-login">
                  Login
                </button>
              </div>
            </Form>
          </Col>
          <Col md={6}>
            <IMG src={Store} alt=""></IMG>
          </Col>
        </Row>
      </div>
        <Footer/>
    </Container>
  );
};

export default LoginForm;
