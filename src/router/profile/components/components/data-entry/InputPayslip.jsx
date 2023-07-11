import { Input, Form } from "antd";
import { useDispatch, useSelector } from "react-redux"
import selectors from "../../slice/selectors";
import { actions } from "../../slice";


const InputPayslip = () =>{
    const dispatch = useDispatch();

    const payslip = useSelector(selectors.payslip);
    const handleAddressChange = (e) =>{
        dispatch(actions.setPayslip(e.target.value));
        dispatch(actions.getPayslipInfo());
    };


    return (
        <Form.Item
        name="payslip"
        rules={[{
            required:true, message: "Payslip can not be empty"
        }]}
        >

            <Input
            disabled
            placeholder=""
            value={payslip}
            onChange={handleAddressChange}
            
            />




        </Form.Item>
    )
}

export default InputPayslip