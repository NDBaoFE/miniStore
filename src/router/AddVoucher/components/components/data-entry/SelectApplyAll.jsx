import { Select } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const { Option } = Select;

const SelectApplyAll = () => {
    const dispatch = useDispatch();

    const types = useSelector(selector.types);
    const isApplyAll = useSelector(selector.isApplyAll);

    const handleTypeChange = (value) => {
        dispatch(actions.setIsApplyAll(value));
        dispatch(actions.getVoucherInfo());
        
    };

    return (
        <Select defaultValue={types[isApplyAll]} onChange={handleTypeChange} style={{ width: "100%",marginBottom:"30px" }}>
            {types.map((type, index) => (
                <Option value={index} key={index}>
                    {type}
                </Option>
            ))}
        </Select>
    );
};

export default SelectApplyAll;
