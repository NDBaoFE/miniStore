import { Input, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../../slice';
import selector from '../../slice/selectors';

const InputPersonalEmail = () => {
    const dispatch = useDispatch();

    const personalEmail = useSelector(selector.personalEmail);

    const handlePersonalEmailChange = (e) => {
        dispatch(actions.setPersonalEmail(e.target.value));
        dispatch(actions.getAccount());
    };

    return (
        <Form.Item
            name="personalEmail"
            rules={[
                { required: true, message: 'Email cá nhân không được để trống !!' },
                {
                    message: 'Email chưa đúng format',
                    validator: (_, value) => {
                        if (/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(value)) {
                            return Promise.resolve();
                        } else {
                            return Promise.reject('Some message here');
                        }
                    },
                },
            ]}
        >
            <Input
                placeholder="personal_email@gmail.com"
                value={personalEmail}
                onChange={handlePersonalEmailChange}
            />
        </Form.Item>
    );
};

export default InputPersonalEmail;
