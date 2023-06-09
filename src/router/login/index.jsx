import "./loginform.css";

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

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const LoginForm = () => {
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
            <InputForm placeholder="Enter your email" />
          </FormItem>

          <FormItem 
         
            name="password"
            rules={[
              {
                
                required: true,
                message: "Please input your password!",
              },
            ]}>
            <InputForm placeholder="Enter your password" type="password"/>
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
