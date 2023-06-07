import styled from "styled-components";
import { themes } from "../../utils/theme";
import { Dropdown } from "antd";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    min-height: 48px;
    background-color: ${themes.colors.white};
    border-radius: 10px;
    padding: 0 30px;
    align-items: center;
    justify-content: space-between;
    color: ${themes.colors.blackText};
    @media (min-width: 992px) {
        .menu {
            display: none;
        }
        .menuContainer {
            display: none;
        }
    }
`;
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    h3 {
        margin: 0;
        font-weight: 500;
        font-size: 13.4062px;
        line-height: 16px;
    }
    h5 {
        margin: 0;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
    }
    @media (max-width: 520px) {
        display: none;
    }
`;
export const Right = styled.div`
    display: flex;
    align-items: center;
`;
export const StyledDropDown = styled(Dropdown)``;
export const Action = styled.div`
    display: flex;
    align-items: center;
`;
export const GoBack = styled.div`
    display: ${(props) =>
        props.location.pathname == "/home" ? "none" : "block"};
    cursor: pointer;
    &:hover {
        color: ${themes.colors.primary};
    }
`;
