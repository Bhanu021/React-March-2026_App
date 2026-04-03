import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage/session'
import {persistReducer , persistStore , FLUSH , REHYDRATE , PAUSE , PERSIST , PURGE , REGISTER} from 'redux-persist'
import DemoReducer from "../Redux/Slices/Demo";
import Users from '../Redux/Slices/Users'
import AuthSlice from '../Redux/Slices/AuthSlice'


const persistConfig = {
    key  : "mystore",
    whitelist : ['demoReducer' , "Users" , "AuthSlice"],  // Remove this Line , if want to all Whitelist
    storage,
}


const combine_reducers =  combineReducers({
    demoReducer : DemoReducer ,
    Users:  Users,
    AuthSlice  : AuthSlice

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