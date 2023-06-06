import "./AddEmployee.css";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import {
  FormAddEmployeeSection,
  EmployeeIMG,
  WrapperForm1,
  InputName,
  FormItem,
  InputNote,
  WrapperForm2,
  Contact,
  InputNumber,
  InputEmail,
  WrapperForm3,
  SubmitBtn,
  FormAddEmployee,
  SelectRole,
  WrapperForm4,
  OrderBtn,
  ShoppingCart,
  WrapperImg,
  Content,
  WrapperBtn,WrapperEmployeeIMG
} from "./addEmployeeStyle";
import { Form, Select } from "antd";
import shoppingCartIcon from "../../../assets/image/shopping-cart.png";

const onSubmit = (values) => {
  console.log("Received values of form: ", values);
  // Convert form values to json
  const data = JSON.stringify(values);
  console.log("JSON data:", data);
};

const AddEmployee = () => {
  const [selectedValue, setSelectedValue] = useState("Role");

  function handleChange(value) {
    console.log(`Selected ${value}`);
    setSelectedValue(value);
  }
  const [form] = Form.useForm();
  const { Option } = Select;

  return (
    <FormAddEmployeeSection>
      <FormAddEmployee form={form} onFinish={onSubmit}>
        <WrapperForm1>
          <WrapperEmployeeIMG>
            <EmployeeIMG size={80} icon={<UserOutlined />} />
          </WrapperEmployeeIMG>
          <FormItem name="name">
            <InputName placeholder="Name" />
          </FormItem>

          <FormItem name="roleName">
            <SelectRole
              defaultValue={selectedValue}
              style={{ width: 300 }}
              onChange={handleChange}
            >
              <Option value="admin">Admin</Option>
              <Option value="employee">Employee</Option>
              <Option value="guard">Guard</Option>
            </SelectRole>
          </FormItem>
        </WrapperForm1>

        <WrapperForm2>
          <Contact> Contact</Contact>

          <FormItem name="email">
            <InputEmail placeholder="Email" />
          </FormItem>

          <FormItem name="phone">
            <InputNumber type="number" placeholder="Phone number" />
          </FormItem>
        </WrapperForm2>

        <WrapperForm3>
          <Contact> Address</Contact>

          <FormItem name="address">
            <InputNote rows={4} placeholder="Address" />
          </FormItem>

          <FormItem>
            <SubmitBtn type="primary" htmlType="submit">
              Submit
            </SubmitBtn>
          </FormItem>
        </WrapperForm3>
      </FormAddEmployee>

      <WrapperForm4>
        <WrapperImg>
          <ShoppingCart src={shoppingCartIcon} alt="" />
        </WrapperImg>

        <Content>This customer has not placed orders yet.</Content>

        <WrapperBtn>
          <OrderBtn type="primary" htmlType="submit">
            Submit
          </OrderBtn>
        </WrapperBtn>
      </WrapperForm4>
    </FormAddEmployeeSection>
  );
};

export default AddEmployee;
