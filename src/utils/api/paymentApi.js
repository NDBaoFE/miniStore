import { get, post } from "./ApiCaller";

export const paymentApi = {
    getPaymentStatus: (param, token) => {
        const url = `/vnpay-payment?${param}`;
        return get(url, {}, { Authorization: token });
    },
    vnPay: (total, token) => {
        const url = `/submitOrder?amount=${total}&orderInfo=thanhtoan`;
        return post(url, {}, {}, { Authorization: token });
    },
};
