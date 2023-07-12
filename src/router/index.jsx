import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import AdminRoute from "./AdminRoute";
import LayoutComponent from "../components/Layout";
import EmployeeRoute from "./EmployeeRoute";
import PublicRoute from "./PublicRoute";
import Home from "./home";
import Login from "./login";
import AboutUS from "./aboutus/aboutus";

import Revenue from "./revenue";
import Checkout from "./checkout";
import VoucherApply from "./voucherApplying";
import ErrorPage from "./404";
import ProductManagement from "./products";
import AddProduct from "./AddProduct";
import AddUser from "./user/AddUser/addUser";
import PublicLayout from "../components/PublicLayout";
import VoucherManagement from "./VoucherMangement";
import AddVoucher from "./AddVoucher";
import UserManagement from "./users";
import Setting from "./setting";
import UpdateUser from "./user/UpdateUser/updateUser";
import UpdateProduct from "./UpdateProduct";
import ViewUser from "./user/ViewUser/viewUser";
import EmployeeSchedule from "./EmployeeSchedule";
import Timetable from "./weeklyschedule";
import EmployeeTimetable from "./EmployeeSchedule";
import TicketPage from "./ticket";
import TicketDetail from "./TicketDetail";
import Error403Page from "./403/Error403Page";
import Profile from "./profile/profile";
import Notification from "../components/Notification/Notification";
import Password from "./password/Password";
import Payroll from "./payroll";
import PayrollByUser from "./payrollByUser";
import OrderManagemntPage from "./OrderManagement";


const publicRoute = [
   
   
    {
        index: true,
        path: "login",
        component: <Login />,
        exact: true,
        restrict: true,
    },
    {
        index: true,
        path: "about",
        component: <AboutUS />,
        exact: true,
        restrict: true,
    },
    
    
    
    
];
const adminRoute = [
    
    {
        index: true,
        path: "schedule",
        component: <Timetable/>,
        exact: true,
        restrict: true,
    },
    
    
];
const employeeRoute = [
    {
        index: true,
        path: "employee-schedule",
        component: <EmployeeTimetable/>,
        exact: true,
        restrict: true,
    },
    {
        index: true,
        path: "ticket/:id",
        component: <TicketDetail/>,
        exact: true,
        restrict: true,
    },
    {
        index: true,
        path: "ticket",
        component: <TicketPage/>,
        exact: true,
        restrict: true,
    },
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
        path: "user/detail/:id",
        component: <ViewUser/>,
        exact: true,
        restrict: true,
    },

    {
        
        index: true,
        path: "user/update/:id",
        component: <UpdateUser/>,
        exact: true,
        restrict: true,
    },
    {
        
        index: true,
        path: "user/add",
        component: <AddUser/>,
        exact: true,
        restrict: true,
    }, 
    {
        
        index: true,
        path: "user/changePassword",
        component: <Password/>,
        exact: true,
        restrict: true,
    },
    
    {
        index: true,
        path: "profile",
        component: <Profile/>,
        exact: true,
        restrict: true,
    },
    {
        index: true,
        path: "notify/:id",
        component: <Notification/>,
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
        path: "payroll",
        component: <Payroll/>,
        exact: true,
        restrict: true,
    }, 

    {
        
        index: true,
        path: "payroll/:id",
        component: <PayrollByUser/>,
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
        path: "apply-voucher/:id",
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
    },
    {
        index: true,
        path: "product/view/:id",
        component: <UpdateProduct/>,
        exact: true,
        restrict: true,
    }
     , {
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
        path: "voucher",
        component: <VoucherManagement/>,
        exact: true,
        restrict: true,
    }
    ,{
        index: true,
        path: "voucher/new",
        component: <AddVoucher/>,
        exact: true,
        restrict: true,
    }
    ,{
        index: true,
        path: "setting/general",
        component: <Setting/>,
        exact: true,
        restrict: true,
    },
    {
        index: true,
        path: "employee-schedule",
        component: <EmployeeSchedule/>,
        exact: true,
        restrict: true,
    },

    {
        index: true,
        path: "orderManagement",
        component: <OrderManagemntPage/>,
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
                    <Route exact element={<PublicLayout />}>
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
                <Route exact element={<EmployeeRoute />}>
                    <Route exact element={<LayoutComponent/>}>
                        {employeeRoute.map((route) => (
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
                    <Route exact element={<LayoutComponent/>}>
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
                 <Route path="/403" element={<Error403Page />} /> 
                <Route path="*" element={<ErrorPage />} /> 
            </Routes>
        </BrowserRouter>
    );
};


export default RouterComponent;