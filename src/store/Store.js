import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./reducers/StoreCounter";
import LayerReducer from "./reducers/StoreLayer";
import HistoryReducer from "./reducers/StoreHistory";
import CoreReducer from "./reducers/StoreCore";

const getStore = () => {

    if(!window.store) {
        window.store = configureStore({
            reducer : {
                CounterReducer,
                LayerReducer,
                HistoryReducer,
                CoreReducer
            },
            middleware: (getDefaultMiddleware) => getDefaultMiddleware({
                serializableCheck: false,
              }),
        })
    }
    
    return window.store
}

export default getStore;