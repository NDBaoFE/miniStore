import "./navbarstyle.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { BsTelephoneFill } from "react-icons/Bs";
import { Link } from "react-router-dom";
import { BrandIcon, StyleSpace } from "./navbarstyle";
const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

export const NavBarUser = () => {
  return (
    <div className="container-navbar">
      <div className="container-navbar-above">
        <div className="wrap-brand">
          <BrandIcon size="3rem" />
          <p>
            Mini<br></br>
            <span>Store</span>
          </p>
        </div>

        <div className="wrap-search-bar">
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <StyleSpace>
                Category
                <DownOutlined />
              </StyleSpace>
            </a>
          </Dropdown>
          <input type="text" placeholder="Search something" />
        </div>
        <div className="wrap-phone-contact">
          <BsTelephoneFill
            className="phone-contact-icon"
            size="1.3rem"
          ></BsTelephoneFill>
          <p>
            Hotline<br></br>1800-0000
          </p>
        </div>
      </div>

      <div className="container-navbar-below">
        <div className="nav-link">Product</div>

        <div className="nav-link">News</div>
        <Link to="/aboutus">
          <div className="nav-link">About Us</div>
        </Link>
        <div className="nav-link">Career</div>

        <div className="nav-link">Login</div>
      </div>
    </div>
  );
};
