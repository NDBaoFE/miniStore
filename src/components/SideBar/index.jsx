/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io"
import SidebarLink from "../SideBarLink";
import {  SideBar, Wrapper, SignOut, Button, Container } from "./style";


import { BsGrid } from "react-icons/Bs";
import { RiCoupon2Line } from "react-icons/ri";
import {
    HomeOutlined,
    LogoutOutlined,
    UserOutlined ,
    PieChartOutlined 
} from "@ant-design/icons";
import localStorageUtils from "../../utils/localStorageUtils";
import {ScheduleOutlined } from "@ant-design/icons"

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
// <SidebarLink to="/blog" child="Quản lý bài viết" />
//<SidebarLink to="/account" child="Quản lý tài khoản" />
const itemsAdmin = [
    getItem(
        <SidebarLink to="/home" child="Home" />,
        "/home",
        <HomeOutlined  />
    ),
    getItem(
        <SidebarLink to="/schedule" child="Schedule" />,
        "/schedule",
        <ScheduleOutlined  />
    ),
    getItem(
        <SidebarLink to="/leaderboard" child="Revenue " />,
        "/revenue",
        <PieChartOutlined />
    ),

    getItem(
        <SidebarLink to="/profile " child="Profile" />,
        "/profile",
        <UserOutlined />
    ),
    getItem(
        <SidebarLink to="/product " child="Product" />,
        "/product",
        <BsGrid />
    ),
    getItem(
        <SidebarLink to="/voucher " child="Voucher" />,
        "/voucher",
        <RiCoupon2Line />
    ),
];


const SidebarComponent = ({ collapsed, setCollapsed }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedKey, setSelectedKey] = useState(`${location.pathname}`);
    useEffect(() => {
        navigate(selectedKey);
    }, [selectedKey]);
    const handleSignOut = () => {
        localStorageUtils.removeItem("authorization");
    navigate("/login");};
    
    return (
        <Wrapper>
            <SideBar width="240px" collapsed={collapsed}>
                <Container>
                    {/* {" "}
                    <Logo>Hii</Logo> */}
                    <Button
                        onClick={() => {
                            setCollapsed(!collapsed);
                        }}
                        collapsed={collapsed }
                    >
                        <IoIosArrowForward style={{ fontSize: "20px", color: "black" }}/>
                    </Button>
                </Container>

                <Menu
                    defaultSelectedKeys={[selectedKey]}
                    defaultOpenKeys={["blog", "account"]}
                    // openKeys={[selectedKey]}
                    mode="inline"
                    onSelect={({ key }) => {
                        console.log(key);
                        setSelectedKey(key);
                    }}
                    style={{background:'transparent',marginTop:"40px"}}
                    items={itemsAdmin}
                />
                <SignOut onClick={handleSignOut}>
                    <LogoutOutlined
                        style={{ paddingRight: 10, fontSize: "24px" }}
                    />
                    Logout
                </SignOut>
            </SideBar>
        </Wrapper>
    );
};

export default SidebarComponent;
