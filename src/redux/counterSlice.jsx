import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        updateCounter: (state, action) => {
            state.count += action.payload;
        },
        resetCounter: (state, action) => {
            state.count = 0;
        }
        // decCounter: (state, action) => {
        //     state.count += action.payload;
        // }
    }
})

export const {updateCounter, resetCounter} = counterSlice.actions;
export default counterSlice.reducer;