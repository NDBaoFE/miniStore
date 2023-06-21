import {  Form } from "antd";
import { useDispatch, useSelector } from "react-redux"
import selectors from "../../slice/selectors";
import { actions } from "../../slice";
import { InputStyled } from "./inputStyle";

const InputEmail = () =>{
    const dispatch = useDispatch();

    const email = useSelector(selectors.email);
    const handleEmailChange = (e) =>{
        dispatch(actions.setEmail(e.target.value));
        dispatch(actions.getLoginInfo());
    };


    return (
        <Form.Item
        name="email"
        rules={[{
            required:true, 
            type:"email",
            message: "The input is not valid Email"
        }]}
        >

            <InputStyled
            placeholder="abc123@gmail.com"
            value={email}
            onChange={handleEmailChange}
            
            />




        </Form.Item>
    )
}

export default InputEmail