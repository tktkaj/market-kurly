import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number : 0
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment : (state) => {
            state.number += 1;
        },
        decrement : (state) => {
            state.number -= 1;
        },
        incrementAmount : (state, action) => {
            state.number += action.payload
        }
    }
});

export const { increment, decrement, incrementAmount } = counterSlice.actions
export default counterSlice.reducer;