import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage/session'
import {persistReducer , persistStore , FLUSH , REHYDRATE , PAUSE , PERSIST , PURGE , REGISTER} from 'redux-persist'
import DemoReducer from "../Redux/Slices/Demo";


const persistConfig = {
    key  : "mystore",
    whitelist : ['demoReducer'],
    storage,
}


const combine_reducers =  combineReducers({
    demoReducer : DemoReducer 

})





const persistedReducer  =  persistReducer(persistConfig , combine_reducers)


export const store  = configureStore({
reducer :  persistedReducer,
middleware : (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck : {
        ignoredActions : [FLUSH ,  REHYDRATE , PAUSE , PERSIST , PURGE , REGISTER]
    },
}).concat([])

})

export const persistor   =  persistStore(store)