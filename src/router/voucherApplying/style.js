import { styled } from "styled-components";
import { themes } from "../../utils/theme";
import { Image } from "antd";
export const Container = styled.div`
    margin: 20px auto;
    max-width: 1096px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${themes.colors.blackText};
`;
export const VoucherPlacement = styled.div`
    background-color: ${themes.colors.white};
    padding: 20px 20px;
    border-radius: 8px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    .ant-image {
        width: 600px;
        img {
            object-fit: contain;
        }
    }
    .ant-image-img {
        height: 100%;
    }
`;
export const AntdImage = styled(Image)``;
export const VoucherInfo = styled.div`
    padding: 0 30px;
    width: 50%;
    h1 {
        margin: 0;
        margin-bottom: 10px;
    }
`;
export const VoucherInfoWrapper = styled.div`
    div {
        font-weight: bold;
        margin: 0;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;

        align-items: center;
        span {
            margin-top: 10px;
            text-align: right;
            font-weight: normal;
        }
    }
`;
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Button = styled.div`
    padding: 4px 48px;
    color: ${themes.colors.white};
    background: ${themes.colors.primary};
    border: 1px solid ${themes.colors.primary};
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    &:hover {
        background: ${themes.colors.primaryDark};
        color: ${themes.colors.white};
        text-decoration: none !important;
        border: 1px solid ${themes.colors.primaryDark};
    }
`;
