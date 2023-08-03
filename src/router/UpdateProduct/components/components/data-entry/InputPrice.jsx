import { Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const InputPrice = () => {
    const dispatch = useDispatch();

    const price = useSelector(selector.price);
    const cost = useSelector(selector.cost);

    const handlePriceChange = (e) => {
        dispatch(actions.setPrice(parseInt(e.target.value)));
        dispatch(actions.getProductInfo());
    };

    const validatePrice = (_, value) => {
        if (value <= cost) {
            return Promise.reject('Price must be greater than the cost');
        } else if (/^[1-9][0-9]*$/.test(value)) {
            return Promise.resolve();
        } else {
            return Promise.reject('Price must be a positive integer');
        }
    };

    return (
        <Form.Item
            name="price"
            rules={[
                { required: true, message: "Price cannot be empty" },
                { validator: validatePrice }
            ]}
        >
            <Input
                name="productPrice"
                type="number"
                placeholder="Price"
                value={price}
                onChange={handlePriceChange}
            />
        </Form.Item>
    );
};

export default InputPrice;
