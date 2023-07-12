import { injectReducer } from "../../../store/index";
import generateActions from "../../../utils/generateActions";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {


  password: '',
  newPassword:'',
  confirmPassword:'',
  info: {},



};

export const name = "changePassword";

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...generateActions(initialState),

    modal_confirm: (state, action) => {
      state.modal.confirm = action.payload;
    },


    getPasswordInfo: (state) => {
      state.info = {

        password: state.password,
        newPassword:state.newPassword,
        confirmPassword: state.confirmPassword

      };

      
    },
  },
});

injectReducer(name, slice.reducer);

export const { actions } = slice;
