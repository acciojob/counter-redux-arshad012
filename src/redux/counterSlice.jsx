import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state, action) => {
            state.count = state.count + action.payload;
        },
        decrease: (state, action) => {
            state.count = state.count - action.payload;
        },
        resetCounter: (state) => {
            state.count = 0;
        }
    }
})

export const {increment, decrease, resetCounter} = counterSlice.actions;
export default counterSlice.reducer;