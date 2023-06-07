import styled from "styled-components";
import { themes } from "../../utils/theme";
import { Badge, Form, Modal, Typography } from "antd";
const { Title } = Typography;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
`;
export const Left = styled.div`
    width: 100%;
    border-radius: 8px;
    min-height: calc(100vh - 120px);
    background-color: ${themes.colors.white};
`;
export const Right = styled.div`
    width: 44%;
    border-radius: 8px;
    background-color: ${themes.colors.white};
`;
export const VoucherInfo = styled.div``;
export const Stock = styled.div`
    padding: 0 30px;
`;
export const ActionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 11.25px;
    line-height: 16px;
    /* identical to box height, or 140% */
    padding: 0 30px;
    margin-bottom: 70px;
`;
export const Row = styled.div`
    position: sticky;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
        font-size: 24px;
    }
    margin-bottom: 15px;
`;
export const StyledForm = styled(Form)`
    width: 80%;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    color: ${themes.colors.blackText};

    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
        height: 50px;
        text-align: center;
        display: flex;
        align-items: center;
    }
    .ant-select-dropdown .ant-select-item-option-active {
        background-color: ${themes.colors.background} !important;
    }
    .ant-select-single:not(.ant-select-customize-input)
        .ant-select-selector
        .ant-select-selection-search-input {
        height: 50px;
    }
    h5 {
        margin: 0;
    }
    .ant-input:hover {
        border-color: ${themes.colors.primary};
    }
    .ant-input {
        height: 50px;
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
export const Label = styled(Title)`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 22px !important;
    /* identical to box height, or 157% */

    /* Character/Title .85 */
    color: rgba(0, 0, 0, 0.85);
`;
export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        color: ${themes.colors.primary};
    }
`;
export const StyledBadge = styled(Badge)`
    display: flex;
    align-items: center;
`;
