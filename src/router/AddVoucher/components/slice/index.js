import { injectReducer } from "../../../../store";
import generateActions from "../../../../utils/generateActions";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    voucherId: 0,
    description: "",
    name: "",
    voucherImg: "",
    minItem: null,
    minTotal: null,
    quantity: null,
    percentDiscount: null,
    maxPercent: null,
    expiredDate: null,
    isApplyAll: 0,
    info: {},
    types: ["False", "True"],
    productList: [],
};

export const name = "voucher";

export const slice = createSlice({
    name,
    initialState,
    reducers: {
        ...generateActions(initialState),

        setVoucher: (state, action) => {
            state.voucherId = action.payload.voucherId;
            state.description = action.payload.description;
            state.name = action.payload.name;
            state.name = action.payload.name;
            state.voucherImg = action.payload.voucherImg;
            state.minItem = action.payload.minItem;
            state.minTotal = action.payload.minTotal;
            state.voucherImg = action.payload.voucherImg;
            state.quantity = action.payload.quantity;
            state.percentDiscount = action.payload.percentDiscount;
            state.maxPercent = action.payload.maxPercent;
            state.expiredDate = action.payload.expiredDate;
            state.isApplyAll = action.payload.isApplyAll;
        },
        getVoucherInfo: (state) => {
            state.info = {
                description: state.description,
                name: state.name,
                voucherImg: state.voucherImg,
                minItem: state.minItem,
                minTotal: state.minTotal,
                quantity: state.quantity,
                percentDiscount: state.percentDiscount,
                maxPercent: state.maxPercent,
                expiredDate: state.expiredDate,
                isApplyAll: state.isApplyAll,
                isDeleted: null,
            };
        },
        applyProductToVoucher: (state, action) => {
            state.productList = [];
            for (let item of action.payload) {
                state.productList.push(item);
            }
        },
    },
});

injectReducer(name, slice.reducer);

export const { actions } = slice;
