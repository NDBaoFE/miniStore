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
    roleId: 3,
    genders: ["Male", "Female"],
    gender: true,
    info: {},
};

export const name = "AddUser";

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
            state.roles = action.payload.roles;
            state.roleId = action.payload.roleId;
            state.genders = action.payload.genders;
            state.genderTypeId = action.genderTypeId;
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
