import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux"
import selectors from "../../slice/selectors";
import { actions } from "../../slice";
import { InputStyled } from "./inputStyle";


const InputPassword = () =>{
    const dispatch = useDispatch();

    const password = useSelector(selectors.password);
    const handleAddressChange = (e) =>{
        dispatch(actions.setPassword(e.target.value));
        dispatch(actions.getLoginInfo());
    };


    return (
        <Form.Item
        name="password"
        rules={[{
            required:true, message: "Password can not be empty"
        }]}
        >

            <InputStyled
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handleAddressChange}
            
            />




        </Form.Item>
    )
}

export default InputPassword