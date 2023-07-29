import { styled } from "styled-components";
import { themes } from "../../utils/theme";
export const Loader = styled.div`
    margin: 0 0 2em;
    height: 100px;
    width: 20%;
    text-align: center;
    padding: 1em;
    margin: 0 auto 1em;
    display: inline-block;
    vertical-align: top;
    svg path,
    svg rect {
        fill: ${themes.colors.primary};
    }
`;
export const LoadingContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;
