import { Select } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const { Option } = Select;

const SelectType = () => {
    const dispatch = useDispatch();

    const types = useSelector(selector.types);
    const productTypeId = useSelector(selector.productTypeId);

    const handleGenderChange = (value) => {
        dispatch(actions.setProductTypeId(value));
        dispatch(actions.getProductInfo());
        
    };

    return (
        <Select defaultValue={types[productTypeId]} onChange={handleGenderChange} style={{ width: "100%",marginBottom:"30px" }}>
            {types.map((crew, index) => (
                <Option value={index} key={index}>
                    {crew}
                </Option>
            ))}
        </Select>
    );
};

export default SelectType;
