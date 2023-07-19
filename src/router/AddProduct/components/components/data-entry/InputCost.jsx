import { Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const InputCost = () => {
    const dispatch = useDispatch();

    const cost = useSelector(selector.cost);
    const handlePriceChange = (e) => {
        dispatch(actions.setCost(parseInt(e.target.value)));
        dispatch(actions.getProductInfo());
    };

    return (
        <Form.Item
            name="cost"
            rules={[{ required: true, message: "Cost can not be empty!!" },
            {
                message: 'Cost must be larger than 0',
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
