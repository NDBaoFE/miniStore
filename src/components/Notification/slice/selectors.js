import { initialState, name } from ".";

import generateSelectors from "../../../utils/generateSelectors";
import { createSelector } from "@reduxjs/toolkit";

const selectDomain = (state) => state[name] || initialState;

const selectors = {
    ...generateSelectors(initialState, selectDomain),
    modal: {
        confirm: createSelector([selectDomain], (state) => state.modal.confirm),
    },
};
export default selectors;
