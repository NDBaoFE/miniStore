import { Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../../slice';
import selector from '../../slice/selectors';

const { Option } = Select;

const SelectGender = () => {
    const dispatch = useDispatch();

    const genders = useSelector(selector.genders);
    const currentGender = useSelector(selector.currentGender);

    const handleGenderChange = (value) => {
        dispatch(actions.setCurrentGender(value));
    };

    return (
        <Select defaultValue={genders[currentGender]} onChange={handleGenderChange}>
            {genders.map((gender, index) => (
                <Option value={index} key={index}>
                    {gender}
                </Option>
            ))}
        </Select>
    );
};

export default SelectGender;
