import { Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const InputName = () => {
    const dispatch = useDispatch();

    const name = useSelector(selector.name);
    const handleFullNameChange = (e) => {
        dispatch(actions.setName(e.target.value));
        dispatch(actions.getProductInfo());
    };

    return (
        <Form.Item
            name="name"
            rules={[{ required: true, message: "Product Name code cannot be empty" }]}
        >
            <Input
            name="productName"
                placeholder="Product name"
                value={name}
                onChange={handleFullNameChange}
            />
        </Form.Item>
    );
};

export default InputName;
