import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    historyList : [],
    nowPageParams : {}
}

export const HistorySlice = createSlice({
    name : 'history',
    initialState,
    reducers : {
        // 히스토리 추가 리듀서
        addHistoryList : (state, action) => {
            state.historyList.push(action.payload);
        },
        // 원하는곳까지 히스토리 삭제 리듀서
        removeHistoryList : (state, action) => {
            state.historyList.splice(state.historyList.length - 1,action.payload);
        },
        // 마지막 히스토리 삭제 리듀서
        removeLastHistoryList : (state) => {
            state.historyList.pop();
        },
        // 모든 히스토리 삭제 리듀서
        clearHistoryList : (state) => {
            state.historyList = [];
        },
        // 현재 페이지 파라미터 가져오기
        getNowPageParams : (state) => {
            return state.nowPageParams;
        },
        // 현재 페이지의 파라미터 세팅하기
        setNowPageParams : (state, action) => {
            state.nowPageParams = action.payload
        }
    }
});

export const { addHistoryList, removeHistoryList, removeLastHistoryList, clearHistoryList, setNowPageParams, getNowPageParams } = HistorySlice.actions
export default HistorySlice.reducer;