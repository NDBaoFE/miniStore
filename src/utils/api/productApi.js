/* eslint-disable no-unused-vars */
import { get, post, put, remove } from "./ApiCaller";
const token = localStorage.getItem("token");
const productApi = {
    getProduct: (search, current) => {
        let url = "";
        if (search !== "") {
            url = `/product/search?keyword=${search}&offset=${current}`;
        } else {
            url = `/product?offset=${current}`;
        }
        return get(url, {}, { token: token });
    },
    getAllVoucher: () => {
        const url = `/voucher`;
        return get(url, {}, { token: token });
    },
    getAllType: () => {
        const url = `/productType`;
        return get(url, {}, { token: token });
    },
    makeOrder: (products) => {
        let url = "/orderDetail/create";

        return post(url, { ...products }, {}, { token: token });
    },
    addProduct: (product) => {
        let url = "/product";
        return post(
            url,
            {
                ...product,
                productTypeId: product.productTypeId + 1,
                isDeleted: null,
            },
            {},
            { token: token }
        );
    },
    addVoucher: (voucher, productList) => {
        console.log(voucher);
        let url = "/applyVoucherToProducts";
        return post(
            url,
            {
                productList,
                voucher: { ...voucher },
            },
            {},
            { token: token }
        );
    },
    importProduct: (productList) => {
        let url = "/productlist";
        return post(url, productList, {}, { token: token });
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
    deleteVoucher: (id) => {
        const url = `/voucher/delete/${id}`;
        return remove(url, {}, {}, { token: token });
    },
    deleteProduct: (id) => {
        const url = `/product/${id}`;
        return remove(url, {}, {}, { token: token });
    },
    getLeaderBoard: (token) => {
        const url = `/auth/leaderboard`;
        return get(url, {}, { token: token });
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
        return get(url, {}, { token: token });
    },
};

export default productApi;
