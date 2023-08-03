import { Input, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import selectors from "../../slice/selectors";
import { actions } from "../../slice";

const InputName = () => {
  const dispatch = useDispatch();
  const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const name = useSelector(selectors.name);



  const handleFullNameChange = (e) => {
    dispatch(actions.setName(e.target.value));
    dispatch(actions.getUserInfo());
  };




  const validateName = (_, value) => {
    if (!value) {
      return Promise.reject("User name cannot be empty!");
    }
    if (/[0-9]/.test(value)) {
      return Promise.reject("Name cannot contain numbers!");
    }
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      return Promise.reject("Name cannot contain special characters!");
    }
    return Promise.resolve();
  };


  return (
    <Form.Item
      name="name"
      rules={[
        { required: true, message: "User name cannot be empty !!" },
        { max: 100, message: "Name should be shoter than 10 numbers" },
        {validator: validateName}
      ]}
    >
      <Input
       name="userName"
        placeholder="Enter your name"
        value={name}
        onChange={handleFullNameChange}
    
      />
    </Form.Item>
  );
};

export default InputName;
