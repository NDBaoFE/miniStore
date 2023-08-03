import { Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const InputMinTotal = () => {
    const dispatch = useDispatch();

    const minTotal = useSelector(selector.minTotal);
    const handleMinTotalChange = (e) => {
        dispatch(actions.setMinTotal(parseFloat(e.target.value)));
        dispatch(actions.getVoucherInfo());
    };

    const validateMinTotal = (_, value) => {
        if (/^[1-9]\d*(\.\d+)?$/.test(value)) {
            return Promise.resolve();
        } else {
            return Promise.reject('Minimum total must be a positive number');
        }
    };

    return (
        <Form.Item
            name="minTotal"
            rules={[
                { validator: validateMinTotal }
            ]}
        >
            <Input
                type="number"
                placeholder="Minimum total money customer have to buy to apply the voucher"
                value={minTotal}
                onChange={handleMinTotalChange}
            />
        </Form.Item>
    );
};

export default InputMinTotal;
