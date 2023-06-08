import { Form,Input } from "antd";
import { useDispatch, useSelector } from "react-redux"
import selectors from "../../slice/selectors";
import { actions } from "../../slice";



const InputPhone = () => {
    const dispatch = useDispatch();

    const phone = useSelector(selectors.phone);
    const handlePhoneChange = (e) =>{
        dispatch(actions.setPhone(e.target.value));
        dispatch(actions.getUserInfo());
    };


    return (
        <Form.Item
        name="phone"
        rules={[{
            required:true, message: "Phone number can not be empty"
        }]}
        >

            <Input
            placeholder="0123456789"
            value={phone}
            onChange={handlePhoneChange}
            style={{marginTop:"10px"}}
            
            
            />




        </Form.Item>
    )
}

export default InputPhone