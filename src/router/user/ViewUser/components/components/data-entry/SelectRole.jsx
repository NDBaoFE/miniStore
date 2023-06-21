import { Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../../slice';
import selectors from '../../slice/selectors';

const { Option } = Select;

const SelectRole = () => {
    const dispatch = useDispatch();

    const roles = useSelector(selectors.roles);
    const roleId = useSelector(selectors.roleId);

    const handleRoleChange = (value) => {
        dispatch(actions.setRole(value));
        dispatch(actions.getAccount());
    };

    return (
        <Select disabled defaultValue={roles[roleId]} onChange={handleRoleChange}>
            {roles.map((role, index) => (
                <Option value={index} key={index}>
                    {role}
                </Option>
            ))}
        </Select>
    );
};

export default SelectRole;
