import { Input, Form } from "antd";
import { useDispatch, useSelector } from "react-redux"
import selectors from "../../slice/selectors";
import { actions } from "../../slice";


const InputAddress = () =>{
    const dispatch = useDispatch();

    const address = useSelector(selectors.address);
    const handleAddressChange = (e) =>{
        dispatch(actions.setAddress(e.target.value));
        dispatch(actions.getProfileInfo());
    };


    return (
        <Form.Item
        name="address"
        rules={[{
            required:true, message: "Address can not be empty"
        }]}
        >

            <Input
            placeholder="123 Abc"
            value={address}
            onChange={handleAddressChange}
            
            />




        </Form.Item>
    )
}

export default InputAddress