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
