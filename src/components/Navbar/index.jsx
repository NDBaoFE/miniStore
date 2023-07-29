import BreadCrumbHeader from "../BreadCrumb";
import StyledDrawer from "../Drawer";
import AvatarContainer from "./Avatar";
import { Wrapper } from "./styled";
import { Menu, Badge } from "antd";
import { useState, useEffect } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Action, GoBack } from "./styled";
import { useNavigate, useLocation } from "react-router-dom";
import { WrapperNoti, StyledDropdown, StyledAvatar } from "./navbarstyle";
import { BellFilled } from "@ant-design/icons";
import notifyApi from "../../utils/api/notifyApi";
import { Link } from "react-router-dom";
import ava from "../../assets/image/Store.png"

function NavBar() {

  const [data, setData] = useState([]);
  const token=localStorage.getItem("Authorization");
  useEffect(() => {
    // Fetch data from API
    notifyApi
      .getNotify(token)
      .then((response) => {
         let notification=response.data.data.reverse();
         console.log(notification);
        setData(notification);
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
    <Menu style={{ marginTop: 10 ,maxHeight:"520px",overFlowY:"scroll",overflowX:"hidden"}}>
      {data.length > 0 ?(
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
            <div style={{ display: "flex", alignItems: "center",justifyContent:"space-between" }}>
            <StyledAvatar src={ava} style={{ marginRight: 12,width:"80px",height:"80px" }} width={80}  height={80}/>
            <div style={{ fontWeight: "bold",lineHeight:"10px"}}>{option.title}</div>
            </div>
          
            <br />
            <div style={{ paddingLeft: 45, fontSize: 11 }}>
              {truncateTitle(option.description, 40)}
            </div>


            
          </Menu.Item>
        ))
      
      ): (
        <Menu.Item disabled>No notification</Menu.Item>
      )}
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
