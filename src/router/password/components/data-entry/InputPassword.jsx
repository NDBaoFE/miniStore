import { Input, Form } from "antd";
import { useDispatch, useSelector } from "react-redux"
import selectors from "../../slice/selectors";
import { actions } from "../../slice";


const InputPassword = () =>{
    const dispatch = useDispatch();

    const password = useSelector(selectors.password);
    const handleEmailChange = (e) =>{
        dispatch(actions.setPassword(e.target.value));
        dispatch(actions.getPasswordInfo());
    };

    return (
        <Form.Item
        name="oldPassword"     
        rules={[{
            required:true, 
            type:"text",
            message: "The input is not valid password"
        }]}
        >

            <Input.Password   
           
            value={password}
            onChange={handleEmailChange}
            
            />




        </Form.Item>
    )
}

export default InputPassword