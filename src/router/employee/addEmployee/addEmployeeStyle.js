import { Avatar, Input, Form, Button, Dropdown, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { styled } from "styled-components";

export const FormAddEmployeeSection = styled.section`
  margin: 20px auto;

  max-width: 1096px;
  display: flex;
  justify-content:center;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormAddEmployee = styled(Form)`
  width: 55%;
  
`;

export const WrapperEmployeeIMG = styled.div`
  display:flex;
  justify-content:center;
`

export const EmployeeIMG = styled(Avatar)`
  margin-bottom: 40px;
  margin-top: 40px;
`;

export const WrapperForm1 = styled.div`
  background-color: white;
  height: 300px;
  width: 425px;
  margin-top: 40px;
  margin-left: 40px;
  box-shadow: 0px 1px 8px rgba(42, 50, 63, 0.1);
  border-radius: 8px;


`;

export const FormItem = styled(Form.Item)`
display: flex;
justify-content: center;
`;

export const SelectRoleName = styled(Dropdown)`
  width: 300px;
  height: 40px;
  border: #8c8c8c solid 1px;
  border-radius: 5px;
  padding-left: 11px;
  color: #bfbfbf;
`;

export const SelectRole = styled(Select)``;

export const InputName = styled(Input)`
  width: 300px;
  height: 40px;
  border: #8c8c8c solid 1px;
`;

export const InputNote = styled(TextArea)`
  width: 300px;
  border: #8c8c8c solid 1px;
`;

export const WrapperForm2 = styled.div`
  background-color: white;
  height: 250px;
  width: 425px;
  margin-top: 15px;
  margin-left: 40px;
  box-shadow: 0px 1px 8px rgba(42, 50, 63, 0.1);
  border-radius: 8px;
`;

export const Contact = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 25px 25px;
`;

export const InputNumber = styled(Input)`
  width: 300px;
  height: 40px;
  border: #8c8c8c solid 1px;
`;
export const InputEmail = styled(Input)`
  width: 300px;
  border: #8c8c8c solid 1px;
  height: 40px;
`;

export const WrapperForm3 = styled.div`
  background-color: white;
  height: 360px;
  width: 425px;
  margin-top: 15px;
  margin-left: 40px;
  box-shadow: 0px 1px 8px rgba(42, 50, 63, 0.1);
  border-radius: 8px;
`;

export const InputAddress = styled(Input)`
  width: 300px;
  height: 40px;
  border: #8c8c8c solid 1px;
`;

export const SubmitBtn = styled(Button)`
  width: 300px;
  background-color: green;
`;

export const WrapperForm4 = styled.div`
  background-color: white;
  height: 250px;
  margin-top: 100px;
  width: 35%;
  margin-left: 12px;
  box-shadow: 0px 1px 8px rgba(42, 50, 63, 0.1);
  border-radius: 8px;
`;

export const WrapperImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const ShoppingCart = styled.img`
  height: 70px;
  width: 70px;
  margin-top: 50px;
`;
export const Content = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-top: 30px;
  text-align: center;
`;

export const OrderBtn = styled(Button)`
  height: 50px;
  background-color: green;
  width: 250px;
  margin-top: 10px;

`;
export const WrapperBtn = styled.div`
  display: flex;
  justify-content: center;
`;