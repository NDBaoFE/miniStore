import "./AddEmployee.css";
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
  SelectRoleName,
  DropdownIcon
} from "./addEmployeeStyle";
import { Form, Space } from "antd";

const handleMenuClick = (e) => {
  console.log("click", e);
};
const items = [
  {
    label: "Admin",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "Employee",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "Guard",
    key: "3",
    icon: <UserOutlined />,

  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const AddEmployee = () => {
  return (
    <FormAddEmployeeSection>
      <Form>
        <WrapperForm1>
          <EmployeeIMG size={80} icon={<UserOutlined />} />

          <FormItem name="username">
            <InputName placeholder="Name" />
          </FormItem>

          <FormItem >
            <SelectRoleName menu={menuProps}>
         
                <Space>
                  Role 
                  <DropdownIcon />
                </Space>
      
            </SelectRoleName>
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

          <FormItem name="address-detail">
            <InputNote rows={4} placeholder="Address" />
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
