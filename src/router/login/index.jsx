import "./loginform.css";
import { useState } from 'react';
import { post } from '../../utils/api/ApiCaller';
import {
  InputForm,
  LoginButton,
  FormItem,
  Container,
  IMG,
  LoginFormMain,
  WrapForm,
  NameBrand,
  WrapImg,
  ColorLetter,
} from "./style";
import store from "../../assets/image/Store.png";
import Password from "antd/es/input/Password";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await post('http://localhost:8080/ministore/login', { email, password });
      console.log(response.data);
      // handle success
    } catch (error) {
      console.error(error);
      // handle error
    }
  }


  return (
    <Container>
      <WrapForm>
        <LoginFormMain onFinish={onFinish} onFinishFailed={onFinishFailed}  autoComplete="off">
          <NameBrand>
            Mini<ColorLetter>Store</ColorLetter>
          </NameBrand>

          <FormItem
      
           name="email"
            rules={[
              {
                type:"email",
                required: true,
                message: "This is not valid email!",
              },
            ]}
          >
            <InputForm placeholder="Enter your email" value={email}/>
          </FormItem>

          <FormItem 
         
            name="password"
            rules={[
              {
                
                required: true,
                message: "Please input your password!",
              },
            ]}>
            <InputForm placeholder="Enter your password" type="password" value={password}/>
          </FormItem>

          <FormItem>
            <LoginButton type="primary" htmlType="submit">
              Submit
            </LoginButton>
          </FormItem>
        </LoginFormMain>
      </WrapForm>

      <WrapImg>
        <IMG src={store} alt="" />
      </WrapImg>
    </Container>
  );
};

export default LoginForm;
