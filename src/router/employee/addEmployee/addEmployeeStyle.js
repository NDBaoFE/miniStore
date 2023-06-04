import { Avatar, Input ,Form,Select, Button} from "antd";
import TextArea from "antd/es/input/TextArea";
import { styled } from "styled-components";

export const FormAddEmployeeSection = styled.section`
  margin: 20px auto;

  max-width: 1096px;
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const EmployeeIMG = styled(Avatar)`
  margin-left: 200px;
  margin-bottom: 40px;
  margin-top: 40px;
`;

export const WrapperForm1 = styled.div`
  background-color: white;
  height: 400px;
  width: 500px;
  margin-top: 40px;
  margin-left: 40px;
  box-shadow: 0px 1px 8px rgba(42, 50, 63, 0.1);
    border-radius: 8px;
`;

export const FormItem = styled(Form.Item)`
margin-bottom: 15px;
margin-left: 100px;
`

export const InputID = styled(Input)`
  width: 200px;
  height: 40px;
  border: #8c8c8c solid 1px;
  
`;

export const InputName = styled(Input)`
  width: 300px;
  height: 40px;
  border: #8c8c8c solid 1px;
`;

export const InputNote = styled(TextArea)`
width: 300px;
border: #8c8c8c solid 1px;
`

export const WrapperForm2 = styled.div`
  background-color: white;
  height: 250px;
  width: 500px;
  margin-top: 40px;
  margin-left: 40px;
  box-shadow: 0px 1px 8px rgba(42, 50, 63, 0.1);
    border-radius: 8px;
`;


export const Contact = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 25px 25px;
  

`

export const SelectOption = styled(Select)`

`

export const InputNumber = styled(Input)`
  width: 250px;
  height: 40px;
  border: #8c8c8c solid 1px;

`
export const InputEmail = styled(Input)`
  width: 250px;
  border: #8c8c8c solid 1px;
  height: 40px;
`

export const WrapperForm3 = styled.div`
  background-color: white;
  height: 360px;
  width: 500px;
  margin-top: 40px;
  margin-left: 40px;
  box-shadow: 0px 1px 8px rgba(42, 50, 63, 0.1);
    border-radius: 8px;
`;

export const InputAddress = styled(Input)`
  width: 300px;
  height: 40px;
  border: #8c8c8c solid 1px;
`

export const SubmitBtn = styled(Button)`
  width: 300px;
  background-color: green;
`