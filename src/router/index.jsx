import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import AdminRoute from "./AdminRoute";
import LayoutComponent from "../components/Layout";
import PublicRoute from "./EmployeeRoute";
import Home from "./home";
import Login from "./login";

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
        path: "login",
        component: <Login />,
        exact: true,
        restrict: true,
    },
];
const adminRoute = [
    
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
                    <Route exact>
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
                {/* <Route path="/auth" element={<Auth />} />
                <Route path="/403" element={<Error403Page />} />
                <Route path="*" element={<Error404Page />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default RouterComponent;