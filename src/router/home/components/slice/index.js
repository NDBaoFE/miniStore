import { injectReducer } from "../../../../store";
import { createSlice } from "@reduxjs/toolkit";
import { calculateFinalPrice } from "../../../../utils/price";
import { toastError } from "../../../../components/Toast";

export const initialState = {
    productId: 0,
    products: [],
    orderList: {
        data: [],
        voucherId: null,
        percentDiscount: 0,
    },
    note: "",
    paymentMethod: 1,
    paymentArray: ["Cash", "Credit Card"],
    selectedVoucher: {},
    vouchers: [],
};
export const name = "orderList";
const slice = createSlice({
    name,
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const { productId, quantity, addQuantity } = action.payload;

            for (let product of state.orderList.data) {
                if (product.productId == productId) {
                    if (product.quantity < quantity) {
                        product.quantity += addQuantity;
                    } else {
                        toastError("Not enough Quantity");
                    }

                    return;
                }
            }

            const newProduct = {
                ...action.payload,
                quantity: addQuantity,
                voucherId: null,
                finalPrice: action.payload.price,
            };
            state.orderList.data.push(newProduct);
        },
        deleteProduct: (state, action) => {
            for (let i = 0; i < state.orderList.data.length; i++) {
                if (state.orderList.data[i].productId == action.payload) {
                    state.orderList.data.splice(i, 1);
                } else {
                    console.log("false");
                }
            }
        },
        clearOrder: (state) => {
            state.orderList.data = [];
        },

        updateProductQuantity: (state, action) => {
            for (let product of state.orderList.data) {
                if (product.id == action.payload.id) {
                    product.quantity = action.payload.quantity;
                    return;
                }
            }
        },
        getProductById: (state, productId) => {
            const data = state.orderList.data;
            return data.find((product) => product.productId === productId);
        },
        updateNote: (state, action) => {
            state.note = action.payload;
        },
        updatePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
        },
        getVoucherAppliedByProduct: (state, action) => {
            if (state.orderList.length === 0) return null;

            for (let product of state.orderList) {
                if (product.productId === action.payload) {
                    if (state.vouchers.length === 0) return null;

                    for (let voucher of state.vouchers) {
                        if (voucher.id === product.voucherId) {
                            return voucher;
                        }
                    }
                }
            }

            return null;
        },

        selectVoucher: (state, action) => {
            state.selectedVoucher = action.payload;
        },
        getVouchers: (state, action) => {
            state.vouchers = [];
            for (let voucher in action.payload) {
                state.vouchers.push(voucher);
            }
        },
        applyVoucher: (state, action) => {
            for (let product of state.orderList.data) {
                if (product.productId == action.payload.productId) {
                    product.voucherId = action.payload.voucherId;
                    product.finalPrice = calculateFinalPrice(
                        product,
                        action.payload
                    );
                }
            }
        },
        applyToAllVoucher: (state, action) => {
            state.orderList.voucherId = action.payload.voucherId;
            state.orderList.percentDiscount = action.payload.percentDiscount;
        },
    },
});

injectReducer(name, slice.reducer);

export const {
    addProduct,
    updateProductQuantity,
    deleteProduct,
    updateNote,
    updatePaymentMethod,
    getVouchers,
    selectVoucher,
    applyVoucher,
    getVoucherAppliedByProduct,
    getProductById,
    applyToAllVoucher,
    clearOrder,
} = slice.actions;
