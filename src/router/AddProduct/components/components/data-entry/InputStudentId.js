import { Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../../slice';
import selector from '../../slice/selectors';

import FormItem from 'antd/es/form/FormItem';

const InputStudentId = () => {
    const dispatch = useDispatch();

    const StudentId = useSelector(selector.studentId);
    const handleStudentIdChange = (e) => {
        dispatch(actions.setStudentId(e.target.value));
        dispatch(actions.getAccount());
    };

    return (
        <FormItem
            name="studentId"
            rules={[
                { required: true, message: 'MSSV không được để trống !!' },
                {
                    message: 'MSSV chưa đúng format',
                    validator: (_, value) => {
                        if (/^(S|s)[E|A|S|s|e|a]+([0-9]{6})$/.test(value)) {
                            return Promise.resolve();
                        } else {
                            return Promise.reject('Some message here');
                        }
                    },
                },
            ]}
        >
            <Input placeholder="MSSV" value={StudentId} onChange={handleStudentIdChange} />
        </FormItem>
    );
};

export default InputStudentId;
