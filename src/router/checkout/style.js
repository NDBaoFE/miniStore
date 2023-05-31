import { styled } from "styled-components";
import { themes } from "../../utils/theme";
export const Container = styled.section`
    margin: 20px auto;
    max-width: 1096px;
    display: flex;
`;
export const Left = styled.div`
    width: 65%;
`;
export const Right = styled.div`
    position: sticky;

    background: ${themes.colors.white};
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const RightContainer = styled.div`
    width: 35%;
    height: 100%;
    margin-left: 36px;
`;
