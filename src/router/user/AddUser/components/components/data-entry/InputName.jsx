import { Input, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import selectors from "../../slice/selectors";
import { actions } from "../../slice";

const InputName = () => {
  const dispatch = useDispatch();

  const name = useSelector(selectors.name);
  const handleFullNameChange = (e) => {
    dispatch(actions.setName(e.target.value));
    dispatch(actions.getUserInfo());
  };

  return (
    <Form.Item
      name="name"
      rules={[
        { required: true, message: "Tên không được để trống !!" },
        { max: 100, message: "Name should be shoter than 10 numbers" },
      ]}
    >
      <Input
       name="userName"
        placeholder="Enter your name"
        value={name}
        onChange={handleFullNameChange}
        size="large"
      />
    </Form.Item>
  );
};

export default InputName;
