import { Input, Form } from "antd";
import { useDispatch, useSelector } from "react-redux"
import selectors from "../../slice/selectors";
import { actions } from "../../slice";


const ConfirmPassword = () =>{
    const dispatch = useDispatch();

    const confirmPassword = useSelector(selectors.confirmPassword);
    const handlePasswordChange = (e) =>{
        dispatch(actions.setNewPassword(e.target.value));
        dispatch(actions.getPasswordInfo());
    };


    return (
        <Form.Item
        name="confirmPassword"
        rules={[{
            required:true, 
            type:"text",
            message: "The input is not valid password"
        }]}
        >

            <Input.Password        
            value={confirmPassword}
            onChange={handlePasswordChange}
            
            />




        </Form.Item>
    )
}

export default ConfirmPassword