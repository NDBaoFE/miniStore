import { Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const InputPercentDiscount = () => {
    const dispatch = useDispatch();

    const percentDiscount = useSelector(selector.percentDiscount);
    const handlePercentDiscountChange = (e) => {
        dispatch(actions.setPercentDiscount(parseInt(e.target.value)/100));
        dispatch(actions.getVoucherInfo());
    };

    return (
        <Form.Item
        name="percentDiscount"
        rules={[
          { required: true, message: "Discount cannot be empty" },
          {
            message: 'Discount must be a number between 0 and 100',
            validator: (_, value) => {
              const numericValue = parseFloat(value);
              if (isNaN(numericValue)) {
                return Promise.reject('Discount must be a number');
              } else if (numericValue < 0 || numericValue > 100) {
                return Promise.reject('Discount must be between 0 and 100');
              } else {
                return Promise.resolve();
              }
            },
          },
        ]}
      >
      

            <Input
                type="number"
                placeholder="percentDiscount"
                value={percentDiscount}
                onChange={handlePercentDiscountChange}
            />
        </Form.Item>
    );
};

export default InputPercentDiscount;
