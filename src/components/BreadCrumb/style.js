import { Breadcrumb } from "antd";
import { styled } from "styled-components";
import { themes } from "../../utils/theme";
export const StyledBreadCrumb = styled(Breadcrumb)`
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    .ant-breadcrumb-separator,
    .ant-breadcrumb-link a {
        color: ${themes.colors.blackText};
    }
`;
