import { get } from "../api/ApiCaller";

import { toastError } from "../../components/Toast";

const authApi = {
    getUser: async (token) => {
        const endpoint = "/user/profile";
        return await get(endpoint, {}, { authorization: token })
            .then((res) => {
                if (res.data.status !== 200) toastError(res.data.message);
                return res;
            })
            .catch((err) => toastError(err.message));
    },
};
export default authApi;
