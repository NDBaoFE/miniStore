import { Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const InputQuantity = () => {
    const dispatch = useDispatch();

    const quantity = useSelector(selector.quantity);
    const handleQuantityChange = (e) => {
        dispatch(actions.setQuantity(parseInt(e.target.value)));
        dispatch(actions.getVoucherInfo());
    };

    return (
        <Form.Item
            name="quantity"
            rules={[{ required: true, message: "quantity can  not be 0" }]}
        >
            <Input
                type="number"
                placeholder="quantity"
                value={quantity}
                onChange={handleQuantityChange}
            />
        </Form.Item>
    );
};

export default InputQuantity;
