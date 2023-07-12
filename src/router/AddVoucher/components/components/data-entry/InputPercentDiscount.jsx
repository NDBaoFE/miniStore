import { Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const InputPercentDiscount = () => {
    const dispatch = useDispatch();

    const percentDiscount = useSelector(selector.percentDiscount);
    const handlePercentDiscountChange = (e) => {
        dispatch(actions.setPercentDiscount(parseInt(e.target.value*100)/100));
        dispatch(actions.getVoucherInfo());
    };

    return (
        <Form.Item
            name="percentDiscount"
            rules={[{ required: true, message: "Discount can  not be empty" },
            {
                message: 'Discount must be larger than 0',
                validator: (_, value) => {
                    if (/^(0\.[0-9]+|[0-9]*\.[0-9]+)$/.test(value)) {
                        return Promise.resolve();
                    } else {
                        return Promise.reject('Some message here');
                    }
                },
            },]}
        >
            <Input
                type="number"
                placeholder="percentDiscount"
                value={percentDiscount}
                onChange={handlePercentDiscountChange}
            />
        </Form.Item>
    );
};

export default InputPercentDiscount;
