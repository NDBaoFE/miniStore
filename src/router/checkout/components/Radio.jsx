
import { RadioContainer, StyledSpace,StyledRadio } from "./styled"
import { useState } from "react";
import { Input } from "antd";
import { useDispatch,useSelector } from "react-redux";
import { selector } from "../../home/components/slice/selector";
import { updatePaymentMethod } from "../../home/components/slice";
function Radio() {
    const dispatch = useDispatch();
    const {paymentMethod} = useSelector(selector);
    const [value, setValue] = useState(paymentMethod);
  const onChange = (e) => {
    setValue(e.target.value);
    dispatch(updatePaymentMethod(e.target.value));
  };
  return (
    <RadioContainer> 
    <StyledRadio.Group onChange={onChange} value={value} >
    <StyledSpace direction="vertical">
      <StyledRadio value={1} >Cash {value === 1 ? (
            <Input
            placeholder=" 💵 Enter Amount Received"
              style={{
                width: 200,
                marginLeft: 10,
              }}
            />
          ) : null}</StyledRadio>
          
          <StyledRadio value={2} >CreditCard </StyledRadio>
      <StyledRadio value={4}>
          Others..
        </StyledRadio>
    </StyledSpace>
  </StyledRadio.Group>
  </RadioContainer>
  )
}

export default Radio