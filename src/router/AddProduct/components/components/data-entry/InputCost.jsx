import { Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const InputCost = () => {
    const dispatch = useDispatch();

    const cost = useSelector(selector.cost);
    const price = useSelector(selector.price);

    const handlePriceChange = (e) => {
        dispatch(actions.setCost(parseInt(e.target.value)));
        dispatch(actions.getProductInfo());
    };

    const validateCost = (_, value) => {
        if (value > price) {
            return Promise.reject('Cost cannot be greater than the price');
        } else if (/^[1-9][0-9]*$/.test(value)) {
            return Promise.resolve();
        } else {
            return Promise.reject('Cost must be a positive integer');
        }
    };

    return (
        <Form.Item
            name="cost"
            rules={[
                { required: true, message: "Cost cannot be empty!!" },
                { validator: validateCost }
            ]}
        >
            <Input
                name="productCost"
                type="number"
                placeholder="Cost"
                value={cost}
                onChange={handlePriceChange}
            />
        </Form.Item>
    );
};

export default InputCost;
