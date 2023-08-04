import { injectReducer } from "../../../../../store/index";
import generateActions from "../../../../../utils/generateActions";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    userId: 0,
    name: "",
    email: "",
    dob: "",
    phone: "",
    userImg: "",
    address: "",
    roles: ["Admin", "Employee", "Guard"],
    roleId: 0,
    genders: ["Male", "Female"],
    gender: 0,
    info: {},
};

export const name = "viewUser";

export const slice = createSlice({
    name,
    initialState,
    reducers: {
        ...generateActions(initialState),

        modal_confirm: (state, action) => {
            state.modal.confirm = action.payload;
        },

        setUser: (state, action) => {
            state.userId = action.payload.userId;
            state.name = action.payload.name;
            state.dob = action.payload.dob;
            state.email = action.payload.email;
            state.userImg = action.payload.userImg;
            state.phone = action.payload.phone;
            state.address = action.payload.address;
            state.gender = action.payload.gender == true ? 1 : 0;
        },
        getUserInfo: (state) => {
            state.info = {
                name: state.name,
                email: state.email,
                userImg: state.userImg,
                dob: state.dob,
                phone: state.phone,
                address: state.address,
                roleId: state.roleId,
                gender: state.gender,
            };
        },
    },
});

injectReducer(name, slice.reducer);

export const { actions } = slice;
