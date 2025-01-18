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
        }
    }
})

export const {increment, decrease} = counterSlice.actions;
export default counterSlice.reducer;