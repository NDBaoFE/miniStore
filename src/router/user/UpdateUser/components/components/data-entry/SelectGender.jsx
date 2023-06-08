import { Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../../slice';
import selectors from '../../slice/selectors';

const { Option } = Select;

const SelectGender = () => {
    const dispatch = useDispatch();

    const genders = useSelector(selectors.genders);
    const genderTypeId = useSelector(selectors.genderTypeId);

    const handleGenderChange = (value) => {
        dispatch(actions.setCurrentGender(value));
    };

    return (
        <Select defaultValue={genders[genderTypeId]} onChange={handleGenderChange}>
            {genders.map((gender, index) => (
                <Option value={index} key={index}>
                    {gender}
                </Option>
            ))}
        </Select>
    );
};

export default SelectGender;
