/* eslint-disable react/prop-types */

import { RadioContainer, StyledSpace,StyledRadio } from "./styled"
import { useState } from "react";
import { Input } from "antd";
import { useDispatch,useSelector } from "react-redux";
import { selector } from "../../home/components/slice/selector";
import { updatePaymentMethod } from "../../home/components/slice";
function Radio({change,setChange}) {
    const dispatch = useDispatch();
    const {paymentMethod} = useSelector(selector);
    const [value, setValue] = useState(paymentMethod);
  const onChange = (e) => {
    setValue(e.target.value);
    dispatch(updatePaymentMethod(e.target.value));
  };
  const handleChange = (e) => {
    // Only allow numeric values (integer) in the input field
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      setChange(parseInt(inputValue, 10)); // Convert the input value to an integer
    }
  };
 
  return (
    <RadioContainer> 
    <StyledRadio.Group onChange={onChange} value={value} >
    <StyledSpace direction="vertical" style={{width:"100%"}}>
      <StyledRadio value={1} >Cash {value === 1 ? (
            <Input
            type="number"
            name="name"
            value={change}
            onChange={handleChange}
            min={0}
            placeholder=" 💵 Enter Amount Received"
              style={{
                width: 200,
                marginLeft: 10,
              }}
            />
          ) : null}</StyledRadio>
          
          <StyledRadio value={2} >VN-Pay </StyledRadio>

    </StyledSpace>
  </StyledRadio.Group>
  </RadioContainer>
  )
}

export default Radio