import { Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../../slice';
import selectors from '../../slice/selectors';

const { Option } = Select;

const SelectRole = () => {
    const dispatch = useDispatch();

    const roles = useSelector(selectors.roles);
    const roleIdInput = useSelector(selectors.roleIdInput);

    const handleRoleChange = (value) => {
        dispatch(actions.setRoleId(value));
        dispatch(actions.getUserInfo());
    };

    return (

        <Select defaultValue={roles[roleIdInput]} onChange={handleRoleChange} placeholder="Select your role" id={"selectRole"}>

            {roles.map((role, index) => (
                <Option value={index}  key={index}>
                    {role}
                </Option>
            ))}
        </Select>
    );
};

export default SelectRole;