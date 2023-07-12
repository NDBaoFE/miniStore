import { Breadcrumb } from "antd";
import { styled } from "styled-components";
import { themes } from "../../utils/theme";
export const StyledBreadCrumb = styled(Breadcrumb)`
    font-family: "Inter",san-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    .ant-breadcrumb-separator,
    .ant-breadcrumb-link a {
        color: ${themes.colors.blackText};
    }
    a {
        height: 100%;
    }
`;
