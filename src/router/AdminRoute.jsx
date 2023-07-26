import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../utils/useAuth";
import { toastError } from "../components/Toast";

const AdminRoute = () => {
    const { userRole } = useAuth();
    if (userRole === undefined) {
        toastError("PLease Login First");
        return <Navigate to="/login" replace />;
    } else if (userRole === null) {
        return <Outlet />;
    }
    return userRole === 'admin' || userRole === 'ADMIN' || userRole === null ? (
        <Outlet />
    ) : (
        <Navigate to="/403" replace />
    );
};

export default AdminRoute;
