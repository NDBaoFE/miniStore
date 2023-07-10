import { Modal, Space } from "antd";
import { styled } from "styled-components";
import { themes } from "../../utils/theme";

export const Container = styled.div`
    position: relative;
`;
export const LoadingContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;
export const StyledSpace = styled(Space)`
    a {
        color: ${themes.colors.primary};
        &:hover {
            color: ${themes.colors.primary700};
        }
    }
    color: ${themes.colors.primary};
    cursor: pointer;
    font-family: "Inter";
    &:hover {
        color: ${themes.colors.primary700};
    }
`;
export const NotiModal = styled(Modal)`
    .ant-modal-content {
        border-radius: 2px;
        background: #ffffff;
        /* drop-shadow/0.12+0.8+0.5 */

        box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12),
            0px 6px 16px rgba(0, 0, 0, 0.08),
            0px 9px 28px 8px rgba(0, 0, 0, 0.05);
        border-radius: 2px;
    }
    .ant-btn-primary {
        background-color: ${themes.colors.primary};
    }
`;
