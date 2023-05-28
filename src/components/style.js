import styled from "styled-components";

import { Layout } from "antd";
export const Container = styled.div`
    font-family: "Nunito Sans", sans-serif;
`;

export const StyledLayout = styled(Layout)`
    margin-left: ${(props) => (props.collapsed === true ? "80px" : "240px")};
    transition: all 0.3s ease;
`;
export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1096px;
`;
