import { Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const InputPrice = () => {
    const dispatch = useDispatch();

    const price = useSelector(selector.price);
    const handlePriceChange = (e) => {
        dispatch(actions.setPrice(parseInt(e.target.value)));
        dispatch(actions.getProductInfo());
    };

    return (
        <Form.Item
            name="price"
            rules={[{ required: true, message: "Quantity can  not be empty" },
            {
                message: 'Quantity must be larger than 0',
                validator: (_, value) => {
                    if (/^[1-9][0-9]*$/.test(value)) {
                        return Promise.resolve();
                    } else {
                        return Promise.reject('Some message here');
                    }
                },
            },]}
        >
            <Input
            disabled
                type="number"
                placeholder="Price"
                value={price}
                onChange={handlePriceChange}
            />
        </Form.Item>
    );
};

export default InputPrice;
