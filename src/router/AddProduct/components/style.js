import { styled } from "styled-components";
import { themes } from "../../../utils/theme";
import { Image } from "antd";

export const AvatarWrapper = styled.div`
    position: relative;
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: 200px;
    background: ${themes.colors.primary200};
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const AvatarInfo = styled.div`
    margin-top: 100px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    .ant-image {
        width: 200px;
        img {
            border-radius: 8px 8px 0 0;
            object-fit: cover;
        }
    }
    .ant-image-mask {
        border-radius: 8px 8px 0 0;
    }
`;
export const Avatar = styled(Image)`
    margin-bottom: 10px;
`;
export const Info = styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 10.5px;
    line-height: 17px;
    padding: 15px 15px;
    text-align: center;

    width: 200px;
    border-radius: 0 0 8px 8px;
    h3 {
        margin: 0;
        line-height: 20px;
        font-size: 18.5px;
        margin-bottom: 10px;
    }
`;
export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        color: ${themes.colors.primary};
        background-color: ${themes.colors.gray100};
    }
`;
export const GroupWrapper = styled.div`
    position: fixed;
    right: 150px;
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
