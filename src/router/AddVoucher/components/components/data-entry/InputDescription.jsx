import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const { TextArea } = Input;

const InputDescription = () => {
    const dispatch = useDispatch();

    const description = useSelector(selector.description);

    const handleDescription = (e) => {
        dispatch(actions.setDescription(e.target.value));
        dispatch(actions.getVoucherInfo());
    };

    return (
        <TextArea
            showCount
            maxLength={200}
            style={{ height: 120 }}
            placeholder="description"
            value={description}
            onChange={handleDescription}
        />
    );
};

export default InputDescription;
