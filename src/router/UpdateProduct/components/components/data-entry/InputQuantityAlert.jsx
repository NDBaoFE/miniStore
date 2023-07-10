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

    return (
        <Form.Item
            name="quantityAlert"
        >
            <Input
                type="number"
                placeholder="Quantity"
                value={quantityAlert}
                onChange={handleQuantityChange}
            />
        </Form.Item>
    );
};

export default InputQuantityAlert;
