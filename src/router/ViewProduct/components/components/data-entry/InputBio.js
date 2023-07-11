import { Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../../slice';
import selector from '../../slice/selectors';

const { TextArea } = Input;

const InputBio = () => {
    const dispatch = useDispatch();

    const bio = useSelector(selector.bio);

    const handleBioChange = (e) => {
        dispatch(actions.setBio(e.target.value));
        dispatch(actions.getAccount());
    };

    return (
        <TextArea
            showCount
            maxLength={200}
            style={{ height: 120 }}
            placeholder="Bio"
            value={bio}
            onChange={handleBioChange}
        />
    );
};

export default InputBio;
