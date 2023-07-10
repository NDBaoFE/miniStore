import { styled } from "styled-components";
import { themes } from "../../utils/theme";
import { Button, Modal } from "antd";
export const Container = styled.div`
    font-family: "Inter", sans-serif;
    margin-top: 30px;
    background-color: ${themes.colors.white};
    border-radius: 10px;
    padding: 10px 20px;
    position: relative;
    color: ${themes.colors.blackText};
    width: 100%;
    font-size: 18px;
`;
export const StyledButton = styled(Button)``;
export const Header = styled.div`
    .ant-image {
        width: 50px;
        img {
            border-radius: 50%;
        }
        .ant-image-mask {
            border-radius: 50%;
        }
    }
`;
export const Body = styled.div`
    margin-top: 20px;
    text-align: center;
    .ant-btn-primary {
        background-color: ${themes.colors.primary};
    }
    .ant-btn-primary:not(:disabled):hover {
        background-color: ${themes.colors.primary600};
    }
    .ant-btn-default {
        color: ${themes.colors.white};
        background-color: #e8302c;
    }
    .ant-btn-default:not(:disabled):hover {
        color: ${themes.colors.white};
        background-color: #e8302c;
    }
`;
export const Employee = styled.div`
    h4 {
        margin: 0 10px;
        font-size: 24px;
    }
    div {
        font-size: 15px;
    }
`;
export const Row = styled.div`
    display: flex;
`;
export const Title = styled.h1``;
export const Description = styled.div`
    padding: 0 80px;
`;
export const NotiModal = styled(Modal)``;
