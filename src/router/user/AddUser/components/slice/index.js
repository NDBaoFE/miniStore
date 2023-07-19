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
    roles: ["Select your role","Admin", "Employee", "Guard"],
    roleId: 0,
    roleIdInput: "",
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
            state.roleIdInput = action.payload.roleIdInput;
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
        setRoleId: (state, action) => {
            state.roleId = action.payload;
            state.roleIdInput = "";
        },
        disableSelectYourRole: (state) => {
            const roles = state.roles;
            let index = roles.indexOf("Select your role");
            if (index !== -1) {
                roles.splice(index, 1);
            }
            state.roles = roles;
        },
    },
});

injectReducer(name, slice.reducer);

export const { actions } = slice;