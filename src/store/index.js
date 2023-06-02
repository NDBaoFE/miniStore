import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";

// Define the Reducers that will always be present in the application
const staticReducers = {};

const store = configureStore({ reducer: createReducer() });

// Add a dictionary to keep track of the registered async reducers
store.asyncReducers = {};

// Create an inject reducer function
// This function adds the async reducer, and creates a new combined reducer
export const injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return asyncReducer;
};

function createReducer(asyncReducers = {}) {
    if (Object.keys(asyncReducers).length === 0) {
        return (state) => state;
    } else {
        return combineReducers({
            ...staticReducers,
            ...asyncReducers,
        });
    }
}

export default store;
