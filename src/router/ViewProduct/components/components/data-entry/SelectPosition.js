import { Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../../slice';
import selector from '../../slice/selectors';

const { Option } = Select;

const SelectPosition = () => {
    const dispatch = useDispatch();

    const positions = useSelector(selector.positions);
    const position = useSelector(selector.position);

    const handleGenderChange = (value) => {
        dispatch(actions.setPosition(value));
        dispatch(actions.getAccount());
    };

    return (
        <Select defaultValue={positions[position]} onChange={handleGenderChange}>
            {positions.map((crew, index) => (
                <Option value={index} key={index}>
                    {crew}
                </Option>
            ))}
        </Select>
    );
};

export default SelectPosition;
