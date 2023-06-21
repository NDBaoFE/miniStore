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
        return get(url, {}, {Authorization: token });
    },

    getProductDetail:(id)=>{
        let url = `/product/${id}`
        return get(url, {}, {Authorization:token})
    },

    
    getAllVoucher: () => {
        const url = `/voucher`;
        return get(url, {}, {Authorization: token });
    },
    getAllType: () => {
        const url = `/productType`;
        return get(url, {}, {Authorization: token });
    },
    makeOrder: (products) => {
        let url = "/orderDetail/create";

        return post(url, { ...products }, {}, {Authorization: token });
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
            { Authorization: token }
        );
    },
    addVoucher: (voucher, productList) => {
        console.log(voucher);
        let url = "/applyVoucherToProducts";
        return post(
            url,
            {
                productList: { ...voucher },
            },
            {},
            { Authorization: token }
        );
    },
    importProduct: (productList) => {
        let url = "/productlist";
        return post(url, productList, {}, { Authorization: token });
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
        return remove(url, {}, {}, { Authorization: token });
    },
    deleteProduct: (id) => {
        const url = `/product/${id}`;
        return remove(url, {}, {}, { Authorization: token });
    },
    getLeaderBoard: (token) => {
        const url = `/auth/leaderboard`;
        return get(url, {}, { Authorization: token });
    },

    getPersonalAccount: (token) => {
        const url = `/auth/profile`;
        return get(url, {}, { Authorization: token });
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
            { Authorization: token }
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
        return get(url, {}, { Authorization: token });
    },
    getblogs: (token, page) => {
        const url = `/auth/allblog?page=${page}`;
        return get(url, {}, { Authorization: token });
    },
    getBlogDetail: (token, id) => {
        const url = `/auth/blog?id=${id}`;
        return get(url, {}, { Authorization: token });
    },
};

export default productApi;
