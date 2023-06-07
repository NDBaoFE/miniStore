import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import AdminRoute from "./AdminRoute";
import LayoutComponent from "../components/Layout";
import PublicRoute from "./EmployeeRoute";
import Home from "./home";
import Login from "./login";
import AboutUS from "./aboutus/aboutus";
import Profile from "./profile";
import Revenue from "./revenue";
import Checkout from "./checkout";
import VoucherApply from "./voucherApplying";
import ErrorPage from "./404";
import ProductManagement from "./products";
import AddProduct from "./AddProduct";
import Schedule from "./schedule";
import AddUser from "./user/AddUser/addUser";
import PublicLayout from "../components/PublicLayout";
import UserManagement from "./users";


const publicRoute = [
   
    {
        index: true,
        path: "home",
        component: <Home />,
        exact: true,
        restrict: true,
    },
    {
        index: true,
        path: "home/:page",
        component: <Home />,
        exact: true,
        restrict: true,
    },

    {
        
        index: true,
        path: "user",
        component: <UserManagement/>,
        exact: true,
        restrict: true,
    },
    {
        
        index: true,
        path: "user/new",
        component: <AddUser/>,
        exact: true,
        restrict: true,
    },{
        index: true,
        path: "profile",
        component: <Profile/>,
        exact: true,
        restrict: true,
    },
    {
        index: true,
        path: "revenue",
        component: <Revenue/>,
        exact: true,
        restrict: true,
    },
    {
        index: true,
        path: "checkout",
        component: <Checkout/>,
        exact: true,
        restrict: true,
    },
    
    {
        index: true,
        path: "voucher/:id",
        component: <VoucherApply/>,
        exact: true,
        restrict: true,
    },
    {
        index: true,
        path: "product/:id",
        component: <ProductManagement/>,
        exact: true,
        restrict: true,
    } , {
        index: true,
        path: "product",
        component: <ProductManagement/>,
        exact: true,
        restrict: true,
    }
    ,{
        index: true,
        path: "product/new",
        component: <AddProduct/>,
        exact: true,
        restrict: true,
    }
    ,{
        index: true,
        path: "schedule",
        component: <Schedule/>,
        exact: true,
        restrict: true,
    }

    
    
    
    
];
const adminRoute = [
    {
        index: true,
        path: "login",
        component: <Login />,
        exact: true,
        restrict: true,
    },{
        index: true,
        path: "aboutus",
        component: <AboutUS />,
        exact: true,
        restrict: true,
    },
    
    
];


const RouterComponent = () => {
    // useAutoLogout(jwt);
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Navigate to="home" />} />
                <Route exact path="/" element={<PublicRoute />}>
                    <Route exact element={<LayoutComponent />}>
                        {publicRoute.map((route) => (
                            <Route
                                index={route.index}
                                key={route.path}
                                path={route.path}
                                element={route.component}
                                exact={route.exact}
                                restrict={route.restrict}
                            />
                        ))}
                    </Route>
                </Route>
                <Route exact element={<AdminRoute />}>
                    <Route exact element={<PublicLayout/>}>
                        {adminRoute.map((route) => (
                            <Route
                                index={route.index}
                                key={route.path}
                                path={route.path}
                                element={route.component}
                                exact={route.exact}
                                restrict={route.restrict}
                            />
                        ))}
                    </Route>
                </Route>
                <Route path="/404" element={<ErrorPage />} />
                {/* /* <Route path="/auth" element={<Auth />} />
                <Route path="/403" element={<Error403Page />} />
                <Route path="*" element={<Error404Page />} /> */ }
            </Routes>
        </BrowserRouter>
    );
};

export default RouterComponent;
