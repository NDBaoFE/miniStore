import { injectReducer } from "../../../../store/index";
import generateActions from "../../../../utils/generateActions";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {

  email: "",
  password:"",
  info: {},
};

export const name = "Login";

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...generateActions(initialState),

    modal_confirm: (state, action) => {
      state.modal.confirm = action.payload;
    },

    setUser: (state, action) => {

      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    getLoginInfo: (state) => {
      state.info = {
        email: state.email,
        password: state.password
      };
    },
  },
});

injectReducer(name, slice.reducer);

export const { actions } = slice;
