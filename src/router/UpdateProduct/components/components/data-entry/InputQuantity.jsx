import { Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const InputQuantity = () => {
    const dispatch = useDispatch();

    const quantity = useSelector(selector.quantity);
    const handleQuantityChange = (e) => {
        dispatch(actions.setQuantity(parseInt(e.target.value)));
        dispatch(actions.getProductInfo());
    };

    const validateQuantity = (_, value) => {
        if (/^[1-9][0-9]*$/.test(value)) {
            return Promise.resolve();
        } else {
            return Promise.reject('Quantity must be a positive integer');
        }
    };

    return (
        <Form.Item
            name="quantity"
            rules={[
                { required: true, message: "Quantity cannot be empty" },
                { validator: validateQuantity }
            ]}
        >
            <Input
                name="productQuantity"
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={handleQuantityChange}
            />
        </Form.Item>
    );
};

export default InputQuantity;
