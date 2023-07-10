import { Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../../slice';
import selector from '../../slice/selectors';

const InputFacebook = () => {
    const dispatch = useDispatch();

    const facebook = useSelector(selector.facebook);

    const handleFacebookChange = (e) => {
        dispatch(actions.setFacebook(e.target.value));
        dispatch(actions.getAccount());
    };

    return (
        <Input
            placeholder="facebook.com/user_name"
            value={facebook}
            onChange={handleFacebookChange}
        />
    );
};

export default InputFacebook;
