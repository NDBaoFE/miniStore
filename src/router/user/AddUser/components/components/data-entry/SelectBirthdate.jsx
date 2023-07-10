import { DatePicker } from 'antd';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../../slice';
import selectors from '../../slice/selectors';

const SelectDateOfBirth = () => {
    const dispatch = useDispatch();

    const birthdate = useSelector(selectors.dob);

    const handleDobChange = (date) => {
        dispatch(actions.setDob(moment(date).format('YYYY-MM-DD')));
        dispatch(actions.getUserInfo());
        console.log(date);
    };


    return (
        <DatePicker onChange={handleDobChange} />
    );
};

export default SelectDateOfBirth;
