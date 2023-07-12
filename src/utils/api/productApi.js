/* eslint-disable no-unused-vars */
import { get, post, put, remove } from "./ApiCaller";

const productApi = {
    getProduct: (search, current, token) => {
        let url = "";
        if (search !== "") {
            url = `/product/search?keyword=${search}&offset=${current}`;
        } else {
            url = `/product?offset=${current}`;
        }
        return get(url, {}, { Authorization: token });
    },
    getAllProduct: (search, token) => {
        let url = "";
        if (search !== "") {
            url = `/product/all?search=${search}`;
        } else {
            url = `/product/all`;
        }
        return get(url, {}, { Authorization: token });
    },

    getProductDetail: (id, token) => {
        let url = `/product/${id}`;
        return get(url, {}, { Authorization: token });
    },

    getAllVoucher: (token) => {
        const url = `/voucher`;
        return get(url, {}, { Authorization: token });
    },
    getAllType: (token) => {
        const url = `/productType`;
        return get(url, {}, { Authorization: token });
    },
    makeOrder: (products, token) => {
        let url = "/orderDetail/create";

        return post(url, { ...products }, {}, { Authorization: token });
    },
    addProduct: (product, token) => {
        let url = "/product";
        return post(
            url,
            [
                {
                    ...product,
                    productTypeId: product.productTypeId + 1,
                    isDeleted: null,
                },
            ],
            {},
            { Authorization: token }
        );
    },
    updateProduct: (product, id, token) => {
        let url = "/product";
        console.log(product.productTypeId);
        return put(
            url,

            {
                productId: id,
                ...product,
                productTypeId: product.productTypeId + 1,
                isDeleted: null,
                minimum: null,
            },

            {},
            { Authorization: token }
        );
    },
    getUserShift: (offset, token) => {
        const url = `/userShift?offset=${offset}`;
        return get(url, {}, { authorization: token });
    },
    viewOwnShift: (offset, token) => {
        const url = `/userShift/schedule?offset=${offset}`;
        return get(url, {}, { authorization: token });
    },
    addVoucher: (voucher, productList, token) => {
        let url = "/applyVoucherToProducts";
        return post(
            url,
            {
                voucher: { ...voucher },
                productList: [...productList],
            },
            {},
            { Authorization: token }
        );
    },
    assignEmployee: (userShifts, token) => {
        let url = "/userShift/assign";
        return post(url, [...userShifts], {}, { authorization: token });
    },
    importProduct: (productList, token) => {
        let url = "/product";
        return post(url, productList, {}, { authorization: token });
    },
    login: (email, password, token) => {
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

    deleteVoucher: (id, token) => {
        const url = `/voucher/delete/${id}`;
        return remove(url, {}, {}, { Authorization: token });
    },

    deleteProduct: (id, token) => {
        const url = `/product/${id}`;
        return remove(url, {}, {}, { Authorization: token });
    },

    getVoucher: (type, id, count, token) => {
        const url =
            type == true
                ? `/getAllVouchers?results=${count}`
                : `/getVoucherByProductId?productId=${id}&results=${count}`;

        return get(url, {}, { Authorization: token });
    },

    getAllTicket: (token) => {
        const url = `/ticket`;
        return get(url, {}, { Authorization: token });
    },
    getTicketType: (token) => {
        const url = `/ticketType`;
        return get(url, {}, { Authorization: token });
    },
    getTicketDetail: (id, token) => {
        const url = `/ticket/${id}`;
        return get(url, {}, { Authorization: token });
    },
    ticketApprove: (id, status, token) => {
        const url = `/ticket/approve?ticketId=${id}&isApproved=${status}`;
        return get(url, {}, { Authorization: token });
    },
    getAllOrder: (token) => {
        const url = `/order`;
        return get(url, {}, { Authorization: token });
    },
    addTicket: (ticket, token) => {
        const url = `/ticket`;
        return post(
            url,
            {
                ...ticket,
            },
            {},
            { Authorization: token }
        );
    },
    requestShift: (userShiftId, token) => {
        const url = `/shiftRequest?userShiftId=${userShiftId}`;
        return post(url, {}, {}, { Authorization: token });
    },
    checkin: (shift, token) => {
        const url = `/userShift/checkin?userShiftId=${shift}`;
        return get(url, {}, { Authorization: token });
    },
    ticketApproval: (ticketId, status, token) => {
        const url = `/ticket/approve?ticketId=${ticketId}&isApproved=${status}`;
        return get(url, {}, { Authorization: token });
    },
    dashboard: (token) => {
        const url = `/dashboard`;
        return get(url, {}, { Authorization: token });
    },
};

export default productApi;
