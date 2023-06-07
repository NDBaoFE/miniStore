import { styled } from "styled-components";
import { themes } from "../../../utils/theme";
import { Image } from "antd";
import { Checkbox } from "antd";
import { Input } from "antd";
const { Search } = Input;

const CheckboxGroup = Checkbox.Group;
export const AvatarWrapper = styled.div`
    position: relative;
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: 300px;
    background: ${themes.colors.primary200};
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const AvatarInfo = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    .ant-image {
        width: 100%;
        img {
            width: 100%;
            height: 300px;
            border-radius: 8px 8px 8px 8px;
            object-fit: cover;
        }
    }
    .ant-image-mask {
        border-radius: 8px 8px 0 0;
    }
`;
export const Avatar = styled(Image)``;
export const Info = styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 10.5px;
    line-height: 17px;
    padding: 15px 15px;
    text-align: center;
    background-color: ${themes.colors.primary};
    width: 200px;
    border-radius: 0 0 8px 8px;
    h3 {
        margin: 0;
    }
    h2 {
        margin: 0;
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
export const StyledCheckGroupBox = styled(CheckboxGroup)`
    display: flex;
    flex-direction: column;
    .ant-checkbox-group-item {
        margin: 15px 30px;
    }
    .ant-checkbox {
        margin-right: 10px;
    }
`;
export const StyledSearch = styled(Search)`
    input {
        height: 32px;
        border-right: 0;
    }
    width: 200px;
    .ant-btn {
        height: 32px;
        border-left: 0;
    }
    @media (max-width: 550px) {
        width: 100%;
    }
`;
export const SearchBtn = styled.div``;
