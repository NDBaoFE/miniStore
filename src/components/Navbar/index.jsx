import BreadCrumbHeader from "../BreadCrumb";
import StyledDrawer from "../Drawer";
import AvatarContainer from "./Avatar";
import { Wrapper } from "./styled";
import { Menu, Avatar, Badge } from "antd";
import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Action, GoBack } from "./styled";
import { useNavigate, useLocation } from "react-router-dom";
import { WrapperNoti, StyledDropdown } from "./navbarstyle";
import { BellFilled } from "@ant-design/icons";
function NavBar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMenuItemHover = (item) => {
    setHoveredItem(item);
  };

  const handleMenuItemLeave = () => {
    setHoveredItem(null);
  };

  const truncateTitle = (title, maxWidth) => {
    if (title.length > maxWidth) {
      return title.substring(0, maxWidth - 1) + '...';
    }
    return title;
  };

  const options = [
    { title: "Delivery success",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et", avatar: "https://example.com/avatar1.jpg" },
    { title: "Import success",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et" ,avatar: "https://example.com/avatar2.jpg" },
    { title: "Export success",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et", avatar: "https://example.com/avatar3.jpg" },
  ];

  const menu = (
    <Menu style={{ marginTop: 10 }}>
      {options.map((option) => (
        <Menu.Item
          key={option.name}
          onMouseEnter={() => handleMenuItemHover(option)}
          onMouseLeave={handleMenuItemLeave}
          className="option-item"
          style={{
            width: 300,
            marginTop: 5,
            backgroundColor: option === hoveredItem ? "#f0f0f0" : "",
          }}
        >
          <Avatar src={options.avatar} style={{ marginRight: 12 }} />
          <span style={{fontWeight:"bold"}}>{option.title}</span>
          <br></br>
          <span style={{paddingLeft: 45, fontSize: 11}}>{truncateTitle(option.content, 40)}</span>
          <hr style={{height: 0.2, backgroundColor: "#9E9E9E", border: "none"}}/>  
        </Menu.Item>
      ))}
    </Menu>
  );

  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    if (location.pathname !== "/") {
      navigate(-1);
    }
  };

  return (
    <Wrapper>
      <StyledDrawer />
      <Action>
        <GoBack onClick={handleGoBack} location={location}>
          <FiChevronLeft style={{ marginRight: 15, fontSize: 30 }} />
        </GoBack>
        <BreadCrumbHeader />
      </Action>

      <StyledDropdown overlay={menu}>
      <Badge count={options.length} showZero>
        <WrapperNoti>
          <BellFilled style={{ fontSize: 20, fontWeight: "bold" }} />
        </WrapperNoti>
        </Badge>
      </StyledDropdown>

      <AvatarContainer />
    </Wrapper>
  );
}

export default NavBar;
