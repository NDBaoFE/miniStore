import { StyledButton } from "../router/EmployeeSchedule/components/style";

/* eslint-disable react/prop-types */
function Button({ title, handleClick, ...props }) {
    return (
        <StyledButton onClick={handleClick} {...props}>
            {title}
        </StyledButton>
    );
}

export default Button;
