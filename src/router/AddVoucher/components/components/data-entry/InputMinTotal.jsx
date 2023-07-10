import { Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const InputMinTotal = () => {
    const dispatch = useDispatch();

    const minTotal = useSelector(selector.minTotal);
    const handleQuantityChange = (e) => {
        dispatch(actions.setMinTotal(e.target.value));
        dispatch(actions.getVoucherInfo());
    };

    return (
        <Form.Item
            name="minTotal"
        >
            <Input
                type="number"
                placeholder="Minimum total money customer have to buy to apply the voucher"
                value={minTotal}
                onChange={handleQuantityChange}
            />
        </Form.Item>
    );
};

export default InputMinTotal;
