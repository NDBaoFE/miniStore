import styled from "styled-components";
import { themes } from "../../utils/theme";
export const LateModal = styled.div`
    height: 600px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Inter", sans-serif;
    position: relative;
    background: ${themes.colors.white};
    img {
        width: 350px;
    }
    h1 {
        text-transform: uppercase;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        justify-content: space-around;
    }
`;
export const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-left: 30px;
`;
