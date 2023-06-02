import { styled } from "styled-components";
import { Input } from "antd";
const { Search } = Input;
import { themes } from "../../../utils/theme";
export const ToolContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background-color: ${themes.colors.white};
    padding: 20px auto;
    justify-content: center;
`;
export const VoucherContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background-color: ${themes.colors.white};
    padding: 20px auto;
    justify-content: center;
    .ant-list-item {
        cursor: pointer;
        &:hover {
            background-color: ${themes.colors.gray};
        }
    }
    .loadmore-list {
        width: 100%;
        margin: 0;
    }
    .ant-list-item-action {
        margin-right: 20px;
    }
`;
export const SearchBtn = styled.div`
    @media (max-width: 850px) {
        margin-top: 12px;
    }
    @media (max-width: 550px) {
        width: 100%;
    }
`;
export const StyledSearch = styled(Search)`
    input {
        height: 32px;
        border-right: 0;
    }
    width: 600px;
    .ant-btn {
        height: 32px;
        border-left: 0;
    }
    @media (max-width: 550px) {
        width: 100%;
    }
`;
export const ActionBtn = styled.div`
    color: ${themes.colors.primary};
    cursor: pointer;
    &:hover {
        color: ${themes.colors.primaryDark};
    }
    margin-right: 30px;
`;
