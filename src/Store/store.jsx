import { combineReducers, combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage/session'
import {persistReducer , persistStore , FLUSH , REHYDRATE , PAUSE , PERSIST , PURGE , REGISTER} from 'redux-persist'


const persistConfig = {
    key  : "root",
    whitelist : [],
    storage,
}


const combine_reducers =  combineReducers({})



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