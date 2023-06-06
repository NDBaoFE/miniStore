import styled from "styled-components";
import { themes } from "../../utils/theme";
export const Container = styled.div`
    margin: 20px auto;
    max-width: 1096px;
`;
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: ${themes.colors.white};
    align-items: center;
    height: 70px;
    border-radius: 8px;
    padding: 0 30px;

    margin-top: 30px;
`;
export const Content = styled.div`
    width: 100%;
    background: ${themes.colors.white};
    border-radius: 8px;
`;
