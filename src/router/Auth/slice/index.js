import { injectReducer } from "../../../store";
import { createSlice } from "@reduxjs/toolkit";

export const name = "auth";

export const initialState = {
    user: {
        name: "",
        role: "",
        id: "",
    },
};

const slice = createSlice({
    name,
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user.name = action.payload.name;
            state.user.role = action.payload.role;
            state.user.id = action.payload.id;
        },
    },
});

injectReducer(name, slice.reducer);

export const { setUser } = slice.actions;

export default slice;
