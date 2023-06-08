import { createSlice } from "@reduxjs/toolkit";
import { injectReducer } from "@/store";
import generateActions from "@/utils/generateActions";
export const initialState = {
  userId: 0,
  name:"",
  email:"",
  phone:"",
  address:"",
  roleId: 1,
  info:{},
}

export const name = "editAccount";

export const slice = createSlice({
name,
initialState,
reducers:{
    ...generateActions(initialState),

    modal_confirm: (state,action) => {
        state.modal.confirm = action.payload;
    },

    setUser: (state, action) =>{
        state.userId = action.payload.userId;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.phone = action.payload.phone;
        state.address = action.payload.address;
        state.roleId = action.payload.roleId;   
    },
    getUserInfo: (state) => {
        state.info = {
            name: state.name,
            email: state.email,
            phone: state.phone,
            address: state.address,
            roleId: state.roleId,
            userId: state.userId,

        }
    }
}

});

injectReducer(name, slice.reducer);

export const {actions} = slice;



