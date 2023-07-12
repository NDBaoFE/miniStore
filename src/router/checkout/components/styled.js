import { styled } from "styled-components";
import { themes } from "../../../utils/theme";
import { Input, Modal, Radio, Space } from "antd";

const { TextArea } = Input;
export const NoteWrapper = styled.div`
    color: ${themes.colors.blackText};
    border-radius: 10px;
    width: 100%;
    background: ${themes.colors.white};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 1px 8px rgba(42, 50, 63, 0.1);
    border-radius: 8px;
    padding: 24px 24px 24px;
    margin-bottom: 30px;
`;
export const StyledInput = styled.div`
    width: 100%;
`;
export const StyledTextArea = styled(TextArea)`
    width: 100%;
`;
export const Wrapper = styled.div`
    border-radius: 10px;
    color: ${themes.colors.blackText};
    background: ${themes.colors.white};
    padding: 20px;
    box-shadow: 0px 1px 8px rgba(42, 50, 63, 0.1);
    border-radius: 8px;
    transition: all 0.3s ease;
    h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 19px;
        display: flex;
        align-items: center;
    }
    margin-bottom: 30px;
`;
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    .discount {
        color: ${themes.colors.primary};
        cursor: pointer;
        &:hover {
            color: ${themes.colors.primaryDark};
        }
    }
`;
export const TotalRow = styled(Row)`
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
`;
export const Line = styled.div`
    height: 1px;
    left: 0px;
    right: 0px;
    top: 78.8px;

    background: #e8e9ea;
`;
export const RadioContainer = styled.div``;
export const StyledRadio = styled(Radio)`
    text-align: center;
    font-size: 16px;
    .radio {
        align-items: center;
    }
    .ant-radio-checked .ant-radio-inner {
        background-color: ${themes.colors.primary};
        border-color: ${themes.colors.primary};
    }
    .ant-radio-inner:hover {
        border-color: ${themes.colors.primary};
    }
`;

export const StyledSpace = styled(Space)`
    .ant-space-item {
        text-align: justify;
    }
`;
export const ItemRow = styled(Row)`
    div {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
    }
    margin-bottom: 15px;
`;
export const DetailWrapper = styled.div``;
export const Left = styled.div`
    display: flex;
    align-items: center;
    div,
    img {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 18px;
        margin-right: 15px;
    }
`;

export const Right = styled.div`
    div,
    img {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 18px;
        margin-right: 15px;
    }
    text-align: start;
    .originalPrice {
        font-size: 12px;
        text-decoration: line-through;
    }
`;
export const Img = styled.img`
    width: 48px;
    height: 40px;
    object-fit: fit;
    border-radius: 8px;
    border: 2px solid ${themes.colors.primary};
    box-shadow: 0px 1px 8px rgba(42, 50, 63, 0.1);
`;
export const GroupWrapper = styled.div`
    position: fixed;
    right: 100px;
    bottom: 40px;
    z-index: 99;
    width: 300px;
    height: 50px;
    background: ${themes.colors.blackText};
    border-radius: 8px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: ${themes.colors.gray};
    div {
        &:hover {
            text-decoration: underline;
        }
    }
`;
export const FinishButton = styled.div`
    padding: 8px 12px;
    color: ${themes.colors.white};
    background: ${themes.colors.primary};
    border: 1px solid ${themes.colors.primary};
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background: ${themes.colors.primaryDark};
        color: ${themes.colors.white};
        text-decoration: none !important;
        border: 1px solid ${themes.colors.primaryDark};
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
