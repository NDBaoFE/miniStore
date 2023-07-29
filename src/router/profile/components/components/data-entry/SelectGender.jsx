import { Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../../slice';
import selectors from '../../slice/selectors';

const { Option } = Select;

const SelectGender = () => {
    const dispatch = useDispatch();

    const genders = useSelector(selectors.genders);
    console.log(genders);
    const gender = useSelector(selectors.gender);
    console.log(gender);
    const handleGenderChange = (value) => {
        dispatch(actions.setGender(value));
        dispatch(actions.getUserInfo());
    };

    return (
        <Select defaultValue={genders[gender]} onChange={handleGenderChange}>
            {genders.map((gender, index) => (
                <Option value={index} key={index}>
                    {gender}
                </Option>
            ))}
        </Select>
    );
};

export default SelectGender;
