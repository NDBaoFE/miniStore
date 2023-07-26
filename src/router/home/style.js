import { styled } from "styled-components";
import { themes } from "../../utils/theme";
import { Cascader } from "antd";
import { Pagination } from "antd";
import { Input } from "antd";
const { Search } = Input;
export const HomeSection = styled.section`
    margin: 20px auto;
    max-width: 1096px;
    display: flex;
    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`;
export const Left = styled.div`
    width: 65%;
    border-radius: 10px;
    @media (max-width: 1024px) {
        width: 70%;
    }
`;
export const Right = styled.div`
    position: sticky;

    background: ${themes.colors.white};
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const RightContainer = styled.div`
    width: 35%;
    height: 100%;
    margin-left: 36px;
    @media (max-width: 1024px) {
        margin-left: 20px;
        width: 70%;
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
    flex-wrap: wrap;
    @media (max-width: 850px) {
        height: 100%;
    }
    @media (max-width: 550px) {
        flex-direction: column;
        align-items: center;
    }
`;
export const ProductWrapper = styled.div`
    margin-top: 30px;
    border-radius: 10px;
    width: 100%;
    background: transparent;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;
export const Col = styled.div`
    display: flex;
    align-items: center;
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
    margin-left: 12px;
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
export const Img = styled.img``;
export const Action = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    svg:hover {
        color: ${themes.colors.primary} !important;
    }
`;
export const CardWrapper = styled.div`
    background: #fefefe;
    border: 1px solid #eeeef1;
    border-radius: 16px;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    position: relative;
    padding-bottom: 40px;
    h3 {
        position: absolute;
        bottom: 10px;
        color: ${themes.colors.primary};
    }
`;
export const CardHero = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 130%;
    /* or 18px */

    text-align: center;

    /* #3B5162 */

    color: #091925;
`;
export const CardImg = styled.img`
    height: 140px;
    width: 150px;
    /* @media (max-width: 600px) {
        width: 100%;
    } */
`;
export const CardPrice = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 140%;
    /* identical to box height, or 20px */

    text-align: center;

    color: #000000;
`;
export const AddButton = styled.div`
    position: absolute;
    border-radius: 10px;
    height: 260px;
    width: 100%;

    background-color: ${themes.colors.primary700};
    transform: translate(0, -100%);
    z-index: 2;
    opacity: 0;
    transition: all 0.3s;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: middle;
    font-size: 100px;
`;
export const CardContainer = styled.div`
    position: relative;
    width: calc((100% - 24px) / 3);
    cursor: pointer;
    &:hover {
        .add {
            opacity: 1;
        }
    }
    @media (max-width: 1024px) {
        width: calc((100% - 48px) / 2);
    }
    @media (max-width: 550px) {
        width: 100%;
    }
`;
export const StyledPagination = styled(Pagination)`
    .ant-pagination-item {
        background: ${themes.colors.white};
        border-radius: 12px;
        border: 1px solid #e4e4e4;
        font-size: 14px;
        font-weight: 700;
        -webkit-transition: all 0.2s;
        -o-transition: all 0.2s;
        transition: all 0.2s;
        border-color: rgba(228, 228, 228, 0.1);
        a {
            color: ${themes.colors.blackText};
        }
        cursor: pointer;
    }
    .ant-pagination-item-active {
        background: ${themes.colors.primary};
    }
    .ant-pagination-prev .ant-pagination-item-link,
    .ant-pagination-next .ant-pagination-item-link {
        border-radius: 12px;
        border: 1px solid #e4e4e4;
        font-size: 14px;
        font-weight: 700;
        -webkit-transition: all 0.2s;
        -o-transition: all 0.2s;
        transition: all 0.2s;
        border-color: rgba(228, 228, 228, 0.1);
        color: white;
    }
    .ant-pagination-item:not(.ant-pagination-item-active):hover {
        background-color: ${themes.colors.primary};
    }
`;
export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
