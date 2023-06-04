import "./loginform.css";

import { InputForm, LoginButton,FormItem,Container, IMG,LoginFormMain,WrapForm,NameBrand,WrapImg,ColorLetter } from "./style";
import store from "../../assets/image/Store.png"
const LoginForm = () => {
  return (
    
    <Container>
      <WrapForm>
        <LoginFormMain>
          <NameBrand>
            Mini<ColorLetter>Store</ColorLetter>
          </NameBrand>

          <FormItem
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <InputForm placeholder="Enter your email" />
          </FormItem>

          <FormItem>
            <InputForm placeholder="Enter your password" />
          </FormItem>

          
            <LoginButton type="primary" htmlType="submit">
              Submit
            </LoginButton>
        
        </LoginFormMain>
      </WrapForm>

      <WrapImg>
        <IMG src={store} alt="" />
      </WrapImg>
    </Container>
  );
};

export default LoginForm;
