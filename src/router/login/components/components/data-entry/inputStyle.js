import { Input } from "antd"
import { styled } from "styled-components"
import { themes } from "../../../../../utils/theme";

export const InputStyled = styled(Input)`
height: 50px;
width: 350px;
margin-top:-15px;
margin-left: 15%;
font-size: 12px;
border: black solid 1px;
border-color:  ${themes.colors.primary700} !important;
&:hover {
    border-color: ${themes.colors.primary700} !important;
}`