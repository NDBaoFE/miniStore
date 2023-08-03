/* eslint-disable no-unused-vars */
import { get, post, remove, put } from "./ApiCaller"; 

const userApi = {
    getUser: (search, current, token) => {
        let url = "";
        if (search !== "") {
            url = `/user/search?keyword=${search}&offset=${current}`;
        } else {
            url = `/user?offset=${current}`;
        }
        return get(url, {}, { Authorization: token });
    },

    getUserDetail: (id, token) => {
        let url = `/user/details?id=${id}`;
        return get(url, {}, { Authorization: token });
    },

    addUser: (user, token) => {
        let url = "/user/add";
        return post(
            url,
            {
                ...user,
            },
            {},
            { Authorization: token }
        );
    },

    deleteUser: (id, token) => {
        const url = `/user/${id}`;
        return remove(url, {}, {}, { Authorization: token });
    },

    updateUser: (info, id, token) => {
        const url = `/user`;
        return put(
            url,
            {
                //user info to update
                name: info.name,
                phone: info.phone,
                gender: info.gender,
                dob: info.dob,
                roleId: info.roleId,
                address: info.address,
                email: info.email,
                userImg: info.userImg,
            },
            {},
            { Authorization: token }
        );
    },
};

export default userApi;
