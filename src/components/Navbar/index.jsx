import BreadCrumbHeader from "../BreadCrumb";
import StyledDrawer from "../Drawer";
import AvatarContainer from "./Avatar";
import { Wrapper } from "./styled";
import { Menu, Avatar, Badge } from "antd";
import { useState, useEffect } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Action, GoBack } from "./styled";
import { useNavigate, useLocation } from "react-router-dom";
import { WrapperNoti, StyledDropdown } from "./navbarstyle";
import { BellFilled } from "@ant-design/icons";
import notifyApi from "../../utils/api/notifyApi";
import { Link } from "react-router-dom";


function NavBar() {

  const [data, setData] = useState([]);
  const token=localStorage.getItem("Authorization");
  useEffect(() => {
    // Fetch data from API
    notifyApi
      .getNotify(token)
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [token]);

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMenuItemHover = (item) => {
    setHoveredItem(item);
  };

  const handleMenuItemLeave = () => {
    setHoveredItem(null);
  };

  const truncateTitle = (title, maxWidth) => {
    if (title.length > maxWidth) {
      return title.substring(0, maxWidth - 1) + "...";
    }
    return title;
  };

  const menu = (
    <Menu style={{ marginTop: 10 }}>
      {data &&
        data.map((option) => (
          <Menu.Item
          
            key={option.userNotificationId}
            onMouseEnter={() => handleMenuItemHover(option)}
            onMouseLeave={handleMenuItemLeave}
            className="option-item"
            style={{
              width: 300,
              marginTop: 5,
              backgroundColor: option === hoveredItem ? "#f0f0f0" : "",
            }}
          >
            <Link to={`/notify/${option.userNotificationId}`} style={{ display: "contents" }}></Link>
            <Avatar src={option.avatar} style={{ marginRight: 12 }} />
            <span style={{ fontWeight: "bold" }}>{option.title}</span>
            <br />
            <span style={{ paddingLeft: 45, fontSize: 11 }}>
              {truncateTitle(option.description, 40)}
            </span>
            <hr
              style={{
                height: 0.2,
                backgroundColor: "#9E9E9E",
                border: "none",
              }}
            />

            
          </Menu.Item>
        ))}
    </Menu>
  );
console.log();
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
        <Badge count={data.length} showZero>
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
