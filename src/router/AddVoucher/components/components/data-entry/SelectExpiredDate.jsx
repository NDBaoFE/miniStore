import { DatePicker } from "antd";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../slice";
import selector from "../../slice/selectors";

const SelectExpiredDate = () => {
    const dispatch = useDispatch();

    const expiredDate = useSelector(selector.expiredDate);

    const handleExpiredDate = (date) => {
        dispatch(actions.setExpiredDate(date.valueOf()));
        dispatch(actions.getVoucherInfo());
    };
    const dateFormat = 'YYYY/MM/DD';

    return (
        <DatePicker value={moment(expiredDate||moment('2023-06-06',dateFormat))} onChange={handleExpiredDate} />
    );
};

export default SelectExpiredDate;
