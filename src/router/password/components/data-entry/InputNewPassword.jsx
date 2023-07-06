import { Input, Form } from "antd";
import { useDispatch, useSelector } from "react-redux"
import selectors from "../../slice/selectors";
import { actions } from "../../slice";


const InputNewPassword = () =>{
    const dispatch = useDispatch();

    const newPassword = useSelector(selectors.newPassword);
    const handlePasswordChange = (e) =>{
        dispatch(actions.setNewPassword(e.target.value));
        dispatch(actions.getPasswordInfo());
    };


    return (
        <Form.Item
        name="newPassword"
        rules={[{
            required:true, 
            type:"text",
            message: "The input is not valid password"
        }]}
        >

            <Input.Password        
            value={newPassword}
            onChange={handlePasswordChange}
            
            />




        </Form.Item>
    )
}

export default InputNewPassword