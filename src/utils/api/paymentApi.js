import { get } from "./ApiCaller";

export const paymentApi = {
    getPaymentStatus: (param, token) => {
        const url = `/vnpay-payment?${param}`;
        return get(url, {}, { Authorization: token });
    },
};
