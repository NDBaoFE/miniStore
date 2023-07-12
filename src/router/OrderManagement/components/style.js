import styled from "styled-components";
import { themes } from "../../../utils/theme";
import { Button } from "antd";

export const ActionWrapper = styled.div`
    margin-top: 20px;
    background-color: ${themes.colors.white};
    display: flex;
    justify-content: space-between;
`;
export const StyledButton = styled(Button)`
    background-color: ${themes.colors.primary};
`;
export const Hero = styled.h4`
    margin: 10px 0;
`;
export const ButtonContainer = styled.div`
    .ant-btn-primary:not(:disabled):hover {
        background-color: ${themes.colors.primary600};
    }
`;
export const AddTicketWrapper = styled.div`
    margin-top: 20px;
    background-color: ${themes.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-form {
        max-width: 1000px !important;
        width: 1000px !important;
    }
    .ant-input,
    .ant-select,
    .ant-select-selector,
    .ant-picker {
        height: 40px;
        width: 400px;
    }
    .ant-input-affix-wrapper {
        width: 400px;
    }

    .ant-input:hover {
        border-color: ${themes.colors.primary600};
    }
    .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(
            .ant-pagination-size-changer
        ):hover
        .ant-select-selector {
        border-color: ${themes.colors.primary600};
    }
    .ant-picker-input > input:hover {
        border-color: ${themes.colors.primary600};
    }
    .ant-picker-focused {
        border-color: ${themes.colors.primary600};
    }
    .ant-picker-range .ant-picker-active-bar {
        background: ${themes.colors.primary600};
    }
    .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
        border-color: ${themes.colors.primary600};
    }
    .ant-picker-focused {
        border-color: ${themes.colors.primary600};
    }
    .ant-btn-primary {
        background-color: ${themes.colors.primary};
    }
    .ant-btn-primary:not(:disabled):hover {
        background-color: ${themes.colors.primary600};
    }
`;
export const Title = styled.h3``;
export const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;
export const Right = styled.div`
    width: 50%;
`;
export const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;
