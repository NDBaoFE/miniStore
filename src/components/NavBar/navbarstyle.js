import { Input, Dropdown, List, Avatar } from "antd";
import { AiOutlineShopping } from "react-icons/ai";
import { styled } from "styled-components";
import { BsTelephoneFill } from "react-icons/Bs";
import { BellFilled } from "@ant-design/icons";

export const ContainerNavBarAll = styled.div`
    height: 140px;
`;

export const ContainerNavAbove = styled.div`
    padding-top: 20px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
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
    color: black;
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
    color: black;
`;

export const WrapSearchBar = styled.div`
    height: 80px;
    width: 30%;
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
    width: 10%;
    padding-top: 10px;
`;

export const HotlineIcon = styled(BsTelephoneFill)`
    padding-top: 40px;
    color: red;
`;

export const Hotline = styled.p`
    font-size: 15px;
    line-height: 20px;
    padding-top: 78px;
    font-weight: 500;
    color: black;
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
    padding-left: 60px;
    padding-right: 90px;

    &:hover {
        background-color: #31353d;
    }
`;
export const WrapperNoti = styled.div`
    border: none;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NotiIcon = styled(BellFilled)`
    font-size: 20px;
    text-align: center;
`;

export const StyledDropdown = styled(Dropdown)`
    margin-left: 370px;
`;

export const StyleListItem = styled(List.Item)`
    padding-left: 20px;
`;
export const StyledAvatar = styled(Avatar)`
    img {
        width: 80px;
        height: 80px;
        object-fit: contain;
    }
`;
