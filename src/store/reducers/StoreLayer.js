import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    layerList : []
}

export const LayerSlice = createSlice({
    name : 'layer',
    initialState,
    reducers : {
        // 레이어 열기 리듀서
        addLayerList : (state, action) => {
            state.layerList.push(action.payload);
        },
        // 원하는 인덱스의 레이어 닫기 리듀서
        removeLayerList : (state, action) => {
            state.layerList.splice(action.payload, 1);
        },
        // 마지막 인데스의 레이어 닫기 리듀서
        closeLastLayerList : (state) => {
            state.layerList.pop();
        },
        // 모든 레이어 닫기 리듀서
        clearLayerList : (state) => {
            state.layerList = [];
        }
    }
});

export const { addLayerList, removeLayerList, closeLastLayerList, clearLayerList } = LayerSlice.actions
export default LayerSlice.reducer;