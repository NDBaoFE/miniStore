/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

import SidebarLink from "../SideBarLink";
import {  SideBar, Wrapper, SignOut, Button, Container } from "./style";

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
        <SidebarLink to="/chart " child="Profile" />,
        "/profile",
        <UserOutlined />
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22 12H3" stroke="#11142d"></path>
                            <g stroke="#808191">
                                <path d="M22 4H13"></path>
                                <path opacity=".301" d="M22 20H13"></path>
                            </g>
                            <path d="M7 7l-5 5 5 5" stroke="#11142d"></path>
                        </svg>
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
