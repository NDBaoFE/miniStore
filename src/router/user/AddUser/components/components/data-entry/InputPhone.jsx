import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import selectors from "../../slice/selectors";
import { actions } from "../../slice";

const InputPhone = () => {
  const dispatch = useDispatch();

  const phone = useSelector(selectors.phone);
  const handlePhoneChange = (e) => {
    dispatch(actions.setPhone(e.target.value));
    dispatch(actions.getUserInfo());
  };

  return (
    <Form.Item
      name="phone"
      rules={[
        {
          required: true,
          message: "Phone number can not be empty",
        },
        {max: 10, message: "Phone number should be shoter than 10 numbers"
        },
        {
          message: 'Phone Number is not on the right format',
          validator: (_, value) => {
              if (
                  /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/.test(
                      value
                  )
              ) {
                  return Promise.resolve();
              } else {
                  return Promise.reject('Some message here');
              }
          },
      },
        { message: "Phone number should be number type"
    },
      ]}
    >
      <Input
        name="userPhone"
        type="number"
        placeholder="0123456789"
        value={phone}
        onChange={handlePhoneChange}
        style={{ marginTop: "10px" }}
      />
    </Form.Item>
  );
};

export default InputPhone;
