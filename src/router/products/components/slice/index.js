import { injectReducer } from "../../../../store";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    importedList: [
        // {
        //     productId: 22,
        //     name: "6 lon nước ngọt Coca Cola 320ml",
        //     quantity: 19,
        //     productTypeId: 1,
        //     productTypeName: "Nước giải khát",
        //     price: 5860,
        //     cost: 3860,
        //     productImg:
        //         "https://cdn.tgdd.vn/Products/Images/2443/125398/bhx/6-lon-nuoc-ngot-coca-cola-320ml-202303301632485062_300x300.jpg",
        //     productCode: "1231233312",
        //     isDeleted: null,
        //     minimum: null,
        // },
        // {
        //     productId: 23,
        //     name: "6 lon soda Schweppes 320ml",
        //     quantity: 11,
        //     productTypeId: 1,
        //     productTypeName: "Nước giải khát",
        //     price: 4000,
        //     cost: 2000,
        //     productImg:
        //         "https://cdn.tgdd.vn/Products/Images/2443/128857/bhx/6-lon-soda-schweppes-320ml-202303301629044011_300x300.jpg",
        //     productCode: "1231233312",
        //     isDeleted: null,
        //     minimum: null,
        // },
        // {
        //     productId: 24,
        //     name: "6 chai nước ngọt Pepsi Cola 390ml",
        //     quantity: 20,
        //     productTypeId: 1,
        //     productTypeName: "Nước giải khát",
        //     price: 3800,
        //     cost: 1800,
        //     productImg:
        //         "https://cdn.tgdd.vn/Products/Images/2443/83823/bhx/6-chai-nuoc-ngot-pepsi-cola-390ml-202212122325242919_300x300.jpg",
        //     productCode: "1231233312",
        //     isDeleted: null,
        //     minimum: null,
        // },
        // {
        //     productId: 25,
        //     name: "6 lon sá xị Chương Dương Sleek 330ml",
        //     quantity: 21,
        //     productTypeId: 1,
        //     productTypeName: "Nước giải khát",
        //     price: 4800,
        //     cost: 2800,
        //     productImg:
        //         "https://cdn.tgdd.vn/Products/Images/2443/196004/bhx/6-lon-sa-xi-chuong-duong-sleek-330ml-202212201606030258_300x300.jpg",
        //     productCode: "1231233312",
        //     isDeleted: null,
        //     minimum: null,
        // },
        // {
        //     productId: 26,
        //     name: "6 lon nước ngọt 7 Up chanh 330ml",
        //     quantity: 20,
        //     productTypeId: 1,
        //     productTypeName: "Nước giải khát",
        //     price: 5860,
        //     cost: 3860,
        //     productImg:
        //         "https://cdn.tgdd.vn/Products/Images/2443/198121/bhx/6-lon-nuoc-ngot-7-up-vi-chanh-320ml-202212201112261768_300x300.jpg",
        //     productCode: "1231233312",
        //     isDeleted: null,
        //     minimum: null,
        // },
        // {
        //     productId: 27,
        //     name: "6 lon nước ngọt Sprite chanh 320ml",
        //     quantity: 25,
        //     productTypeId: 1,
        //     productTypeName: "Nước giải khát",
        //     price: 5600,
        //     cost: 3600,
        //     productImg:
        //         "https://cdn.tgdd.vn/Products/Images/2443/195224/bhx/6-lon-nuoc-ngot-sprite-huong-chanh-320ml-202303302259217748_300x300.jpg",
        //     productCode: "1231233312",
        //     isDeleted: null,
        //     minimum: null,
        // },
        // {
        //     productId: 28,
        //     name: "6 lon nước ngọt Mirinda soda kem 320ml",
        //     quantity: 22,
        //     productTypeId: 1,
        //     productTypeName: "Nước giải khát",
        //     price: 5800,
        //     cost: 3800,
        //     productImg:
        //         "https://cdn.tgdd.vn/Products/Images/2443/195220/bhx/6-lon-nuoc-ngot-mirinda-vi-soda-kem-320ml-202212122338292664_300x300.jpg",
        //     productCode: "1231233312",
        //     isDeleted: null,
        //     minimum: null,
        // },
        // {
        //     productId: 29,
        //     name: "2 chai nước ngọt Coca Cola Zero 600ml",
        //     quantity: 20,
        //     productTypeId: 1,
        //     productTypeName: "Nước giải khát",
        //     price: 1500,
        //     cost: -500,
        //     productImg:
        //         "https://cdn.tgdd.vn/Products/Images/2443/307819/bhx/2-chai-nuoc-ngot-co-ga-coca-cola-zero-600ml-202305191506424529_300x300.jpg",
        //     productCode: "1231233312",
        //     isDeleted: null,
        //     minimum: null,
        // },
        // {
        //     productId: 30,
        //     name: "2 chai Fanta soda kem trái cây 600ml",
        //     quantity: 20,
        //     productTypeId: 1,
        //     productTypeName: "Nước giải khát",
        //     price: 1500,
        //     cost: -500,
        //     productImg:
        //         "https://cdn.tgdd.vn/Products/Images/2443/307816/bhx/2-chai-nuoc-ngot-co-ga-fanta-huong-soda-kem-trai-cay-600ml-202305191450342769_300x300.jpg",
        //     productCode: "1231233312",
        //     isDeleted: null,
        //     minimum: null,
        // },
    ],
};
export const name = "importedList";
const slice = createSlice({
    name,
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.importedList = action.payload;
        },
    },
});

injectReducer(name, slice.reducer);

export const { setProducts } = slice.actions;
