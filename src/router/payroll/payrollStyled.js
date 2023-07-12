import { themes } from "../../utils/theme";
import { styled } from "styled-components";
import { Table, Space, Button } from "antd";

export const AntdTable = styled(Table)`
    width: 100%;
    img {
        width: 70px;
        height: 50px;
        object-fit: contain;
        border: 1px solid ${themes.colors.primary};
        border-radius: 5px;
        margin-top:-20px;
    }
    .table-row-striped {
        background-color: ${themes.colors.stripe};
    }
    .detail {
        display: flex;
        align-items: center;
    }
`;

export const WrapperPayroll = styled.div`
    margin-top: 60px;
    height: 500px;
    background-color: white;
`;

export const StyledSpace = styled(Space)`
    a {
        color: ${themes.colors.primary};
        &:hover {
            color: ${themes.colors.primary700};
        }
    }
    color: ${themes.colors.primary};
    cursor: pointer;
    font-family: "Inter";
    &:hover {
        color: ${themes.colors.primary700};
    }
`;

export const ButtonStyled = styled(Button)`
    height:30px;
    width: 100px;
    text-align: center;
    margin-top: 20px;
    margin-left:50px;
    color: ${themes.colors.primary};

`

export const Title = styled.h2`
text-align: center;
   color: ${themes.colors.primary};
   
`

export const WrapperSum = styled.div`
    display:flex;
    justify-content: center;
    margin-bottom: 40px;
    border: green 1px solid;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .1A);
  
    
    
    
`


