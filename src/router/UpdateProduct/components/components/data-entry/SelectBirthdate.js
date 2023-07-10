import { DatePicker } from 'antd';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../../slice';
import selector from '../../slice/selectors';

const SelectGender = () => {
    const dispatch = useDispatch();

    const birthdate = useSelector(selector.birthdate);

    const handleBirthdateChange = (date) => {
        dispatch(actions.setBirthdate(date.valueOf()));
        dispatch(actions.getAccount());
    };

    return <DatePicker value={moment(birthdate)} onChange={handleBirthdateChange} />;
};

export default SelectGender;
