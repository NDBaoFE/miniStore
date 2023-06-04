import "./AddEmployee.css";
import {
  FormAddEmployeeSection,
  EmployeeIMG,
  WrapperForm1,
  InputID,
  InputName,
  FormItem,
  InputNote,
  WrapperForm2,
  Contact,
  InputNumber,
  InputEmail,
  WrapperForm3,
  InputAddress,
  SubmitBtn
} from "./addEmployeeStyle";
import { Form } from "antd";
import { UserOutlined } from "@ant-design/icons";

const AddEmployee = () => {
  return (
    <FormAddEmployeeSection>
      <Form>
        <WrapperForm1>
          <EmployeeIMG size={80} icon={<UserOutlined />} />

          <FormItem name="username">
            <InputName placeholder="Name" />
          </FormItem>

          <FormItem name="id">
            <InputID placeholder="ID" />
          </FormItem>

          <FormItem>
            <InputNote rows={4} placeholder="Note" />
          </FormItem>
        </WrapperForm1>

        <WrapperForm2>
          <Contact> Contact</Contact>

          <FormItem name="email">
            <InputEmail placeholder="Email" />
          </FormItem>

          <FormItem>
            <InputNumber type="number" placeholder="Phone number" />
          </FormItem>
        </WrapperForm2>

        <WrapperForm3>
          <Contact> Address</Contact>

          <FormItem name="country">
            <InputAddress placeholder="Country" />
          </FormItem>

          <FormItem name="address-detail">
            <InputNote rows={4} placeholder="Address Detail" />
          </FormItem>

          <FormItem>
          <SubmitBtn type="primary" htmlType="submit">
            Submit
          </SubmitBtn>
        </FormItem>

        </WrapperForm3>

   
      </Form>
    </FormAddEmployeeSection>
  );
};

export default AddEmployee;
