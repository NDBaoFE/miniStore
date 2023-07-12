import { get } from "./ApiCaller";

const notifyApi = {
    getNotify: (token) => {
        console.log(token);
        let url = "/userNotify";
        return get(url, {}, { Authorization: token });
    },

    getNotifyDetail: (id, token) => {
        let url = `/userNotify/${id}`;
        return get(url, {}, { Authorization: token });
    },
};

export default notifyApi;
