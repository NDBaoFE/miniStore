import styled from "styled-components";
import { Modal } from "antd";
import { themes } from "../../utils/theme";
export const ModalWrapper = styled(Modal)`
    .ant-btn-primary {
        background-color: ${themes.colors.primary};
    }
    .ant-btn-primary:not(:disabled):hover {
        color: #fff;
        background-color: ${themes.colors.primaryDark};
        border-color: ${themes.colors.primaryDark};
    }
    .ant-btn-default:not(:disabled):hover {
        color: ${themes.colors.primary};
        border-color: ${themes.colors.primary};
    }

   
`;
