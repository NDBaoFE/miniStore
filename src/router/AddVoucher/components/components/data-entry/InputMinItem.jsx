import { Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const InputMinItem = () => {
    const dispatch = useDispatch();

    const minItem = useSelector(selector.minItem);
    const handleMinItemChange = (e) => {
        dispatch(actions.setMinItem(parseInt(e.target.value)));
        dispatch(actions.getVoucherInfo());
    };

    const validateMinItem = (_, value) => {
        if (/^[1-9][0-9]*$/.test(value)) {
            return Promise.resolve();
        } else {
            return Promise.reject('Minimum Item must be a positive integer');
        }
    };

    return (
        <Form.Item
            name="minItem"
            rules={[
                { validator: validateMinItem }
            ]}
        >
            <Input
                type="number"
                placeholder="Minimum Item"
                value={minItem}
                onChange={handleMinItemChange}
            />
        </Form.Item>
    );
};

export default InputMinItem;
