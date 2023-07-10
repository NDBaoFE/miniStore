import { name, initialState } from '.';

import { createSelector } from '@reduxjs/toolkit';

const selectedDomain = (state) => state[name] || initialState;

export const selectUser = createSelector([selectedDomain], (state) => state.user);
export const selectId = createSelector([selectedDomain], (state) => state.user.id);
