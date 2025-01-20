import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading : 0,
    property : {}
}

export const CoreSlice = createSlice({
    name : 'core',
    initialState,
    reducers : {
        // 로딩 화면을 노출하는 리듀서
        showLoading : (state) => {
            state.loading += 1;
        },
        // 로딩 화면을 숨기는 리듀서
        hideLoading : (state) => {
            state.loading -= 1;
        },
        getProperty : (state) => {
            return state.property;
        },
        setProperty : (state, action) => {
            state.property = action.payload
        }
    },
})

export const { showLoading, hideLoading, getProperty, setProperty } = CoreSlice.actions
export default CoreSlice.reducer;