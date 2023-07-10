import { injectReducer } from "@/store";
import generateActions from "@/utils/generateActions";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    productId: 0,
    cost: 0,
    name: "",
    productImg: "",
    price: 0,
    typeid: 0,
    quantity: 0,
    productCode: "",
    info: {},
};

export const name = "editAccount";

export const slice = createSlice({
    name,
    initialState,
    reducers: {
        ...generateActions(initialState),

        modal_confirm: (state, action) => {
            state.modal.confirm = action.payload;
        },
        setProduct: (state, action) => {
            state.productId = action.payload.productId;
            state.cost = action.payload.cost;
            state.name = action.payload.name;
            state.productImg = action.payload.productImg;
            state.price = action.payload.price;
            state.typeid = action.payload.typeid;
            state.quantity = action.payload.quantity;
            state.productCode = action.payload.productCode;
        },
        getProductInfo: (state) => {
            state.info = {
                name: state.name,
                productImg: state.productImg,
                price: state.price,
                typeid: state.typeid,
                quantity: state.quantity,
                productCode: state.productCode,
                cost: state.cost,
                productId: state.productId,
            };
        },
    },
});

injectReducer(name, slice.reducer);

export const { actions } = slice;
