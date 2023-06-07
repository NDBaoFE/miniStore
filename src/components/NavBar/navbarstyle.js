import { Input } from "antd";
import { AiOutlineShopping } from "react-icons/ai";
import { styled } from "styled-components";
import { BsTelephoneFill } from "react-icons/Bs";

export const ContainerNavBarAll = styled.div`
    height: 160px;
`;

export const ContainerNavAbove = styled.div`
    padding-top: 20px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
`;
export const WrapBrand = styled.div`
    height: 80px;
    width: 15%;
`;

export const BrandName = styled.p`
    font-size: 18px;
    padding-top: 16px;
    padding-left: 20px;
    line-height: 25px;
    font-weight: 500;
`;

export const ColorName = styled.span`
    color: green;
    font-weight: 600;
`;

export const BrandIcon = styled(AiOutlineShopping)`
    height: 50px;
    width: 50px;
    margin-left: 20px;
    margin-top: 10px;
`;

export const WrapSearchBar = styled.div`
    height: 80px;
    width: 50%;
`;

export const SearchInput = styled(Input)`
    height: 35px;
    width: 500px;
    padding-left: 10px;
    border: none;
    margin-top: 20px;
    color: black;
    border: green solid 0.2px;
`;

export const WrapContactPhone = styled.div`
    height: 80px;
    width: 20%;
    padding-top: 10px;
`;

export const HotlineIcon = styled(BsTelephoneFill)`
    padding-top: 20px;
`;

export const Hotline = styled.p`
    font-size: 15px;
    line-height: 20px;
    padding-top: 30px;
    font-weight: 500;
`;

export const ContainerNavBelow = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0 400px;
    font-size: 12px;
    height: 40px;
    font-weight: 400;
    background-color: #011e2f;
`;

export const NavLink = styled.div`
    width: 50px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: white;
    font-weight: 500;
    cursor: pointer;
    padding-left: 80px;
    padding-right: 80px;

    &:hover {
        background-color: #31353d;
    }
`;
