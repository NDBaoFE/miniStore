import { Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../../slice';
import selectors from '../../slice/selectors';
import { Left } from '../../../viewUserStyle';

const { Option } = Select;

const SelectGender = () => {
    const dispatch = useDispatch();

    const genders = useSelector(selectors.genders);
    console.log(genders);
    const gender = useSelector(selectors.gender);
    console.log(gender);
    const handleGenderChange = (value) => {
        dispatch(actions.setCurrentGender(value));
    };

    return (
        <Select disabled defaultValue={genders[gender]}  onChange={handleGenderChange}>
            {genders.map((gender, index) => (
                <Option value={index} key={index}>
                    {gender}
                </Option>
            ))}
        </Select>
    );
};

export default SelectGender;
