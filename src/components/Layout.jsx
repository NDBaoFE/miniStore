import { StyledLayout, Wrapper } from "./style";
import { Outlet } from "react-router-dom";
import SidebarComponent from "./SideBar/index";
// import { themes } from "../utils/theme/index";
import { useState } from "react";
import NavBar from "./Navbar";

// import { useNavigate } from "react-router-dom";
// import localStorageUtils from "../utils/localStorageUtils";
const { Content } = StyledLayout;
const LayoutComponent = () => {
    // const navigate = useNavigate();
    // const token = localStorageUtils.getItem("authorization");
    // if (!token) {
    //     navigate("/login");
    // }
    console.log("gi")
    const [collapsed, setCollapsed] = useState(false);
    return (
        <StyledLayout collapsed={collapsed}>
            <SidebarComponent
                collapsed={collapsed}
                setCollapsed={setCollapsed}
            />
            <StyledLayout
                className="site-layout"
                style={{
                    
                    marginLeft: "0",
                    
                }}
                
            >
                {/* <PageHeaderComponent /> */}
                <Content className="background" >
                    <Wrapper className="site-layout-background" style={{ minHeight: "100vh" ,paddingTop: "8px" }} >
                        <NavBar/>
                        <Outlet />
                    </Wrapper>
                </Content>
            </StyledLayout>
        </StyledLayout>
    );
};

export default LayoutComponent;
