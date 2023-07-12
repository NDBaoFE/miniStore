/* eslint-disable react/prop-types */

import Radio from "./Radio"
import { Wrapper } from "./styled"
function PaymentMethod({change,setChange}) {
  return (
    <Wrapper>
        <h3>Select Payment Method</h3>
        <Radio  change={change}  setChange={setChange}/>
    </Wrapper>
  )
}

export default PaymentMethod