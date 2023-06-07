import { Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const InputMinItem = () => {
    const dispatch = useDispatch();

    const minItem = useSelector(selector.minItem);
    const handleMinItemChange = (e) => {
        dispatch(actions.setMinItem(parseInt(e.target.value)));
        dispatch(actions.getVoucherInfo());
    };

    return (
        <Form.Item
            name="minItem"
           
        >
            <Input
                type="number"
                placeholder="Minimum Item"
                value={minItem}
                onChange={handleMinItemChange}
            />
        </Form.Item>
    );
};

export default InputMinItem;
