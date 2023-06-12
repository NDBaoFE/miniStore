/* eslint-disable no-unused-vars */
import { get, post, put, remove } from "./ApiCaller";
const token = localStorage.getItem("Authorization");
const productApi = {
    getProduct: (search, current) => {
        let url = "";
        if (search !== "") {
            url = `/product/search?keyword=${search}&offset=${current}`;
        } else {
            url = `/product?offset=${current}`;
        }
        return get(url, {}, { authorization: token });
    },
    getAllVoucher: () => {
        const url = `/voucher`;
        return get(url, {}, { authorization: token });
    },
    getAllType: () => {
        const url = `/productType`;
        return get(url, {}, { authorization: token });
    },
    makeOrder: (products) => {
        let url = "/orderDetail/create";

        return post(url, { ...products }, {}, { authorization: token });
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
            { authorization: token }
        );
    },
    addVoucher: (voucher, productList) => {
        console.log(voucher);
        let url = "/applyVoucherToProducts";
        return post(
            url,
            {
                productList,
                authorization: { ...voucher },
            },
            {},
            { authorization: token }
        );
    },
    importProduct: (productList) => {
        let url = "/productlist";
        return post(url, productList, {}, { authorization: token });
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
        return remove(url, {}, {}, { authorization: token });
    },
    deleteProduct: (id) => {
        const url = `/product/${id}`;
        return remove(url, {}, {}, { authorization: token });
    },
    getLeaderBoard: (token) => {
        const url = `/auth/leaderboard`;
        return get(url, {}, { authorization: token });
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
