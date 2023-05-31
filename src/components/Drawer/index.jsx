import { Button, Drawer } from 'antd';
import { useState } from 'react';
import { Container } from './style';
import { MenuOutlined } from '@ant-design/icons';
import {
    HomeOutlined,
    UserOutlined ,
    PieChartOutlined,
    ScheduleOutlined
} from "@ant-design/icons";
import SidebarLink from '../SideBarLink';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { StyledMenu } from './style';
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
const StyledDrawer = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState(`${location.pathname}`);
  useEffect(() => {
      navigate(selectedKey);
  }, [selectedKey]);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Container className="menu">
      <Button type="primary" onClick={showDrawer} icon={<MenuOutlined />} className="menu"/>
      <Drawer title="Basic Drawer" placement="left" onClose={onClose} open={open} width={300}>
      <StyledMenu
                    defaultSelectedKeys={[selectedKey]}
                    defaultOpenKeys={["blog", "account"]}
                    mode="inline"
                    onSelect={({ key }) => {
                        console.log(key);
                        setSelectedKey(key);
                    }}
                    style={{background:'transparent',marginTop:"40px"}}
                    items={itemsAdmin}
                />
      </Drawer>
    </Container>
  );
};
export default StyledDrawer;