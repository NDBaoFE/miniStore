import "./loginform.css";

import loginApi from "../../utils/api/loginApi";

import {
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
import InputEmail from "./components/components/data-entry/InputEmail";
import InputPassword from "./components/components/data-entry/InputPassword";
import { useSelector } from "react-redux";
import selectors from "./components/slice/selectors";
import { useDispatch } from "react-redux";
import { actions } from "./components/slice";
import { toastError, toastSuccess, toastWarning } from "../../components/Toast";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const email = useSelector(selectors.email);
  const password = useSelector(selectors.password);
  const dispatch = useDispatch();
  const [form] = LoginFormMain.useForm();
  const navigate = useNavigate();



  const LoginInfo = async () => {
    dispatch(actions.getLoginInfo());
    const res = await loginApi.login(email, password);

    if (res.data.status == 200) {
      let token = res.data.data["access token"];
      localStorage.setItem("Authorization", token);
      navigate("/home");
      toastSuccess("Login Successfully");
    } else{
      toastError(res.data.message);
    }
  };

  const handleFinish = () => {
    LoginInfo();
  };

  const handleFinishFailed = () => {
    toastWarning("Hãy nhập tất cả các field!!")
  };

  return (
    <Container>
      <WrapForm>
        <LoginFormMain
          form={form}
          name="login-form"
          initialValues={{
            email: email,
            password: password,
          }}
          onFinish={handleFinish}
          onFinishFailed={handleFinishFailed}
        >
          <NameBrand>
            Mini<ColorLetter>Store</ColorLetter>
          </NameBrand>

          <FormItem name="email">
            <InputEmail />
          </FormItem>

          <FormItem
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <InputPassword />
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
