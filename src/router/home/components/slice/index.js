import { injectReducer } from "../../../../store";
import { createSlice } from "@reduxjs/toolkit";
import { calculateFinalPrice } from "../../../../utils/price";
import { toastError, toastSuccess } from "../../../../components/Toast";

export const initialState = {
    productId: 0,
    products: [],
    orderList: JSON.parse(localStorage.getItem("fullcart")) || {
        data: [],
        voucherId: null,
        percentDiscount: 0,
    },
    note: "",
    paymentMethod: 1,
    paymentArray: ["Cash", "Credit Card"],
    selectedVoucher: {},
    vouchers: [],
    totalPrice: "",
};

export const name = "orderList";
const slice = createSlice({
    name,
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const { productId, quantity, addQuantity } = action.payload;
            let productExists = false;

            state.orderList.data = state.orderList.data.map((product) => {
                if (product.productId === productId) {
                    if (product.cartQuantity < quantity) {
                        product.cartQuantity += addQuantity;
                    } else {
                        toastError("Not enough Quantity");
                    }
                    productExists = true;
                }
                return product;
            });

            if (!productExists) {
                if (quantity === 0) {
                    toastError("Can not add 0 quantity product");
                } else {
                    const newProduct = {
                        ...action.payload,
                        cartQuantity: addQuantity,
                        voucherId: null,
                        finalPrice: action.payload.price,
                    };
                    state.orderList.data.push(newProduct);
                }
            }
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
            state.selectedVoucher = {};
            state.note = "";
            state.paymentMethod = 1;
        },

        updateProductQuantity: (state, action) => {
            for (let product of state.orderList.data) {
                if (product.productId == action.payload.productId) {
                    if (action.payload.InputQuantity > product.quantity) {
                        toastError(
                            `This product has only ${product.quantity} quantity`
                        );
                        product.cartQuantity = product.quantity;
                    }
                    product.cartQuantity = action.payload.InputQuantity;
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
            let applied = false;
            const { productVouchers, voucherId } =
                action.payload.currentVoucher;
            if (productVouchers && productVouchers.length > 0) {
                for (let product of state.orderList.data) {
                    if (
                        productVouchers.find(
                            (pv) => pv.product.productId === product.productId
                        )
                    ) {
                        applied = true;
                        product.voucherId = voucherId;
                        product.finalPrice = calculateFinalPrice(
                            product,
                            action.payload.currentVoucher
                        );
                        state.orderList.percentDiscount =
                            action.payload.currentVoucher.percentDiscount;
                    }
                }
            }
            if (applied) {
                toastSuccess("Apply Voucher Successfully");
            } else {
                toastError("No Product to apply");
            }
        },

        applyToAllVoucher: (state, action) => {
            state.orderList.voucherId = action.payload.voucherId;
            state.orderList.percentDiscount = action.payload.percentDiscount;
            toastSuccess("Apply Voucher Successfully");
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        removeVoucher: (state, action) => {
            for (let product of state.orderList.data) {
                if (product.productId == action.payload.productId) {
                    product.voucherId = null;
                    product.finalPrice = product.price;
                }
            }
        },
        removeApplyAllVoucher: (state) => {
            state.orderList.voucherId = null;
            state.orderList.percentDiscount = 0;
            for (let product of state.orderList.data) {
                product.voucherId = null;
                product.finalPrice = product.price;
            }
            toastSuccess("Remove Voucher Successfully");
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
    setTotalPrice,
    removeVoucher,
    removeApplyAllVoucher,
} = slice.actions;
