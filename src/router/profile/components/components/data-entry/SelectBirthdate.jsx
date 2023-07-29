import { DatePicker } from 'antd';
import moment from 'moment';
import {  useDispatch } from 'react-redux';

import { actions } from '../../slice';


const SelectDateOfBirth = () => {
    const dispatch = useDispatch();

    
    const handleDobChange = (date) => {
        dispatch(actions.setDob(moment(date).format('YYYY/MM/DD')));
        dispatch(actions.getUserInfo());
     
    };


    return (
        <DatePicker onChange={handleDobChange} />
    );
};

export default SelectDateOfBirth;
