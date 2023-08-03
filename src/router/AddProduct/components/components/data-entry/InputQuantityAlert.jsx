import { Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const InputQuantityAlert = () => {
    const dispatch = useDispatch();

    const quantityAlert = useSelector(selector.quantityAlert);
    const handleQuantityChange = (e) => {
        dispatch(actions.setQuantityAlert(e.target.value));
        dispatch(actions.getProductInfo());
    };

    const validateQuantityAlert = (_, value) => {
        if (/^[1-9][0-9]*$/.test(value)) {
            return Promise.resolve();
        } else {
            return Promise.reject('Quantity Alert must be a positive integer');
        }
    };

    return (
        <Form.Item
            name="quantityAlert"
            rules={[
                { validator: validateQuantityAlert }
            ]}
        >
            <Input
                name="productQuantity"
                type="number"
                placeholder="Quantity"
                value={quantityAlert}
                onChange={handleQuantityChange}
            />
        </Form.Item>
    );
};

export default InputQuantityAlert;
