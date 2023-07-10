import { styled } from "styled-components";
import { themes } from "../../../utils/theme";
import { Cascader, Table } from "antd";
import { Input } from "antd";
const { Search } = Input;
export const Col = styled.div`
    display: flex;
    align-items: center;
    .import {
        margin: 12px 16px;
    }
    div {
        cursor: pointer;
    }
    div :not(:last-child) {
        margin: 12px 16px;
    }
    .action {
        margin: 0;
    }

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
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
export const Category = styled(Cascader)`
    @media (max-width: 850px) {
        margin: 12px 0;
    }
    color: ${themes.colors.blackText};
    .ant-select-selector {
        height: 45px;
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
    width: 200px;
    .ant-btn {
        height: 32px;
        border-left: 0;
    }
    @media (max-width: 550px) {
        width: 100%;
    }
`;
export const Action = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    svg:hover {
        color: ${themes.colors.primary} !important;
    }
`;
export const ToolBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: ${themes.colors.white};
    align-items: center;
    height: 70px;
    border-radius: 10px;
    padding: 0 30px;

    margin-top: 30px;
    color: ${themes.colors.blackText};
    @media (max-width: 850px) {
        height: 100%;
    }
    @media (max-width: 550px) {
        flex-direction: column;
        align-items: center;
    }
`;
export const Type = styled.div`
    display: flex;
    align-items: center;
    &:hover {
        color: ${themes.colors.primary};
        background: ${themes.colors.gray};
    }
`;
export const Upload = styled(Type)``;
export const Button = styled.div`
    background-color: ${themes.colors.primary};
    padding: 12px 12px;
    color: ${themes.colors.white};
    border-radius: 8px;

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        color: ${themes.colors.white};
    }
    &:hover {
        background-color: ${themes.colors.primaryDark};
    }
`;
export const ProductWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: ${themes.colors.white};
    align-items: center;
    border-radius: 10px;

    margin-top: 30px;
    color: ${themes.colors.blackText};
`;
export const AntdTable = styled(Table)`
    width: 100%;
    img {
        width: 70px;
        height: 50px;
        object-fit: contain;
        border: 1px solid ${themes.colors.primary};
        border-radius: 5px;
    }
    .table-row-striped {
        background-color: ${themes.colors.stripe};
    }
    .detail {
        display: flex;
        align-items: center;
    }
`;
