import { get, post, put } from "./ApiCaller";

const productApi = {
    getProduct: (search) => {
        let url = "";
        if (search !== "") {
            url = `/product/search?keyword=${search}`;
        } else {
            url = `/product`;
        }
        return get(url, {}, {});
    },
    login: (email, password) => {
        const url = `/auth/login`;
        return post(
            url,
            {
                email: email,
                password: password,
            },
            {},
            {}
        );
    },
    getLeaderBoard: (token) => {
        const url = `/auth/leaderboard`;
        return get(url, {}, { Authorization: token });
    },

    getPersonalAccount: (token) => {
        const url = `/auth/profile`;
        return get(url, {}, { authorization: token });
    },

    updateOwnAccount: (info, token) => {
        const url = `/auth/profile/edit`;
        return put(
            url,
            {
                image: info.avatar,
                dateOfBirth: info.birthdate,
                bio: info.bio,
                facebook: info.facebook,
                fullname: info.fullName,
                email: info.email,
                phone: info.phone,
                id: info.id,
                region: "VietNam",
            },
            {},
            { authorization: token }
        );
    },
    signup: (value) => {
        const url = `/auth/signup`;
        return post(
            url,
            {
                name: value.name,
                email: value.email,
                password: value.password,
            },
            {},
            {}
        );
    },
    getBalance: (token) => {
        const url = `/auth/balance`;
        return get(url, {}, { authorization: token });
    },
    getblogs: (token, page) => {
        const url = `/auth/allblog?page=${page}`;
        return get(url, {}, { authorization: token });
    },
    getBlogDetail: (token, id) => {
        const url = `/auth/blog?id=${id}`;
        return get(url, {}, { authorization: token });
    },
};

export default productApi;
