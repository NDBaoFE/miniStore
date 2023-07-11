import { Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const InputProductCode = () => {
    const dispatch = useDispatch();

    const productCode = useSelector(selector.productCode);

    const handleProductCodeChange = (e) => {
        dispatch(actions.setProductCode(e.target.value));
        dispatch(actions.getProductInfo());
    };

    return (
        <Form.Item
            name="productCode"
            rules={[
                { required: true, message: "Product code cannot be empty" },
            ]}
        >
            <Input
               disabled
                placeholder="8934588873553"
                value={productCode}
                onChange={handleProductCodeChange}
            />
        </Form.Item>
    );
};

export default InputProductCode;
