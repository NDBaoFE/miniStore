import { injectReducer } from "../../../../store";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    productId: 0,
    orderList: [],
    note: "hi",
    paymentMethod: 1,
    paymentArray: ["Cash", "Credit Card"],
};
export const name = "orderList";
const slice = createSlice({
    name,
    initialState,
    reducers: {
        addProduct: (state, action) => {
            for (let product of state.orderList) {
                if (product.productId == action.payload.productId) {
                    product.quantity += action.payload.quantity;
                    return;
                }
            }
            state.orderList.push(action.payload);
        },
        deleteProduct: (state, action) => {
            for (let i = 0; i < state.orderList.length; i++) {
                if (state.orderList[i].productId == action.payload) {
                    state.orderList.splice(i, 1);
                } else {
                    console.log("false");
                }
            }
        },
        updateProductQuantity: (state, action) => {
            for (let product of state.orderList) {
                if (product.id == action.payload.id) {
                    product.quantity = action.payload.quantity;
                    return;
                }
            }
        },
        updateNote: (state, action) => {
            state.note = action.payload;
        },
        updatePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
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
} = slice.actions;
