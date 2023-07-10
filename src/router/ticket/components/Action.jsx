/* eslint-disable react/prop-types */


import { ActionWrapper, ButtonContainer, Hero, StyledButton } from './style'

function Action({setOpenAdd,openAdd}) {
  return (
    <ActionWrapper>
        <Hero>All Ticket</Hero>
        <ButtonContainer>
            <StyledButton type="primary" onClick={()=>setOpenAdd(!openAdd)}>{openAdd ? 'Close Ticket' : 'Add Ticket'} </StyledButton>
        </ButtonContainer>
    </ActionWrapper>
  )
}

export default Action