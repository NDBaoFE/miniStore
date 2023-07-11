import { injectReducer } from "../../../store/index";
import generateActions from "../../../utils/generateActions";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  userNotificationId: 1,
  userId:3,
  description: "Xin chào d?n v?i Ministore",
  date: 1688464168778,
  title: "Thông báo xin chào 2",
  info:{}
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

    setNotification: (state, action) => {
      state.userNotificationId = action.payload.userNotificationId;
      state.userId = action.payload.userId;
      state.description = action.payload.description;
      state.date = action.payload.date;
      state.title = action.payload.title;
  
    },
    getNotificationInfo: (state) => {
      state.info = {
        userNotificationId: state.userNotificationId,
        userId: state.userId,
        description: state.description,
        date: state.date,
        title: state.title,


      };
    },
  },
});

injectReducer(name, slice.reducer);

export const { actions } = slice;
