import { Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../../slice';
import selector from '../../slice/selectors';

const { Option } = Select;

const SelectRole = () => {
    const dispatch = useDispatch();

    const roles = useSelector(selector.roles);
    const role = useSelector(selector.role);

    const handleRoleChange = (value) => {
        dispatch(actions.setRole(value));
        dispatch(actions.getAccount());
    };

    return (
        <Select defaultValue={roles[role]} onChange={handleRoleChange}>
            {roles.map((role, index) => (
                <Option value={index} key={index}>
                    {role}
                </Option>
            ))}
        </Select>
    );
};

export default SelectRole;
