/* eslint-disable react/prop-types */


import { ActionWrapper, ButtonContainer, Hero, StyledButton } from './style'

function Action({setOpenAdd,openAdd}) {
  return (
    <ActionWrapper>
        <Hero>All Orders</Hero>
        {/* <ButtonContainer>
            <StyledButton type="primary" onClick={()=>setOpenAdd(!openAdd)}>{openAdd ? 'Close Order' : 'Add Order'} </StyledButton>
        </ButtonContainer> */}
    </ActionWrapper>
  )
}

export default Action