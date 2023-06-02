import styled from "styled-components";

import { Layout } from "antd";
import { themes } from "../utils/theme";
export const Container = styled.div`
    font-family: "Nunito Sans", sans-serif;
`;

export const StyledLayout = styled(Layout)`
    margin-left: ${(props) => (props.collapsed === true ? "80px" : "240px")};
    transition: all 0.3s ease;
    .background {
        width: calc(
            100vw - ${(props) => (props.collapsed === true ? "80px" : "240px")}
        );
        background: ${themes.colors.background};
    }
    @media (max-width: 992px) {
        .background {
            width: 100vw;
        }
        margin-left: 0px;
    }
`;
export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1096px;
`;
