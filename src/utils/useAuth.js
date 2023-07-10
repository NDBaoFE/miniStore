import { useState, useEffect, useCallback } from "react";

import { useDispatch } from "react-redux";

import authApi from "./api/authApi";
import localStorageUtils from "./localStorageUtils";
import { useNavigate } from "react-router-dom";
import { toastError } from "../components/Toast";
import { setUser } from "../router/Auth/slice";

const useAuth = () => {
    const [userRole, setUserRole] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [userId, setUserId] = useState(null);
    const [profile, setProfile] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = localStorageUtils.getToken();
    const checkTokenExpiration = useCallback(() => {
        if (token) {
            const decoded = localStorageUtils.getJWTUser();
            if (!decoded) {
                setUserRole(undefined);
            }
            if (decoded?.exp < Date.now() / 1000) {
                setUserRole(undefined);
                localStorage.removeItem("token");
                navigate("/login");
                toastError(
                    "Phiên đăng nhập đã hết hạn! Vui lòng đăng nhập lại"
                );
                return;
            }
        }
    }, [token]);

    useEffect(() => {
        // Get the JWT token from the cookie
        const token = localStorageUtils.getToken();

        // If there is no token, return
        if (!token) {
            setUserRole(undefined);
            return;
        }

        try {
            setIsLoading(true);
            authApi.getUser(token).then((user) => {
                const { data } = user.data;
                console.log(data);

                if (!user.data?.data?.roles) {
                    setUserRole(undefined);
                } else {
                    setProfile(user.data.data);
                    setUserRole(user.data?.data?.roles);
                    setUserId(user.data?.data?.userId);
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 1000);
                }
            });
        } catch (err) {
            // If the token is invalid, return

            return;
        }
        const intervalId = setInterval(checkTokenExpiration, 5000);
        return () => clearInterval(intervalId);
    }, [checkTokenExpiration]);

    return { isLoading, userRole, userId, profile };
};
export default useAuth;
