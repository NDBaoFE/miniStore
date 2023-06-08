import { DatePicker } from 'antd';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../../slice';
import selectors from '../../slice/selectors';

const SelectDateOfBirth = () => {
    const dispatch = useDispatch();

    const birthdate = useSelector(selectors.birthdate);

    const handleBirthdateChange = (date) => {
        dispatch(actions.setBirthdate(date.valueOf()));
        dispatch(actions.getAccount());
    };

    return <DatePicker value={moment(birthdate)} onChange={handleBirthdateChange} />;
};

export default SelectDateOfBirth;
