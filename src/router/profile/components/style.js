import { styled } from "styled-components";
import { themes } from "../../../utils/theme";
import { Image } from "antd";
import { Table, Cascader } from "antd";
import { Input } from "antd";
const { Search } = Input;
import {UserAddOutlined } from "@ant-design/icons"
import { Space } from "antd";

export const AvatarWrapper = styled.div`
    position: relative;
    border-radius: 8px 8px 0 0;
    width: 100%;

    height: 300px;

    display: flex;
    align-items: center;
    justify-content: center;
`;
export const AvatarInfo = styled.div`
    display: flex;
    flex-direction: column;
    .ant-image {
        width: 180px;
        img {
            border-radius: 8px 8px 0 0;
            object-fit: cover;
          
        }

       
    }
    .ant-image-mask {
        border-radius: 8px 8px 8px 8px;
        height: 165px;
        margin-top: 34px;
        margin-left: 24px;

    
    }
`;
export const Avatar = styled(Image)`
    width:100px;

    

`
export const ProfileIcon = styled(UserAddOutlined)`
    padding-top:25px;
    height: 100px;
    width: 100px;
    font-size:50px;
    border: black solid 1px;
    border-radius: 50px
`



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
        margin: 10;
    }
    h2 {
        margin: 0;
        margin-bottom: 10px;
        padding: 5px;
        font-size: 20px;
        text-transform: uppercase;
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
    right: 10px;
    bottom: 10px;
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


export const CancelButton = styled.div`
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
`


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
`

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
    a {
        color: ${themes.colors.white};
    }
    &:hover {
        background-color: ${themes.colors.primaryDark};
    }
`;

export const UserWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: ${themes.colors.white};
    align-items: center;
    border-radius: 10px;

    margin-top: 0px;
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
        margin-top:-20px;
    }
    .table-row-striped {
        background-color: ${themes.colors.stripe};
    }
    .detail {
        display: flex;
        align-items: center;
    }
`;


export const RevenueDashboardContainer = styled.div`
    height: 300px;
    width: 20%;
    border: black solid 1px;
    margin-right: 20px;
    background-color: white; 
`
export const RevenueTitle = styled.div`
    text-align:center;
    padding-top: 20px;
    line-height: 1px;
` 

export const WrapperUserManagement = styled.div`
    display:flex;
    justify-content: center;
    margin-top:20px;

`

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


