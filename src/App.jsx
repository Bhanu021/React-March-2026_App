import React, { useEffect, useState } from "react"
import Navbar from "./Pages/Navbar"
import Router from './Navigations/Router'
import { useRoutes } from "react-router-dom"
import RouterV6 from "./Navigations/RoutesV6"
import AuthRoutes from "./Navigations/AuthenticatedRoutes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider, useSelector } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from './Store/store'


function App() {
    const queryClient = new QueryClient()

    

    const AppRoutes = () => {
        const routeArray = RouterV6()
        let myRoutes = useRoutes(routeArray)
        return myRoutes
    }
    const AppRoutesAuthenticated = () => {
        const routeArray = AuthRoutes()
        let myRoutes = useRoutes(routeArray)
        return myRoutes
    }

    const [isAuthnticated , setIsAuthenticated ] =  useState(false)

    useEffect(()=>{

        setIsAuthenticated(store.getState().AuthSlice.isLoggedIn)

    },[store.getState().AuthSlice.isLoggedIn])

    return (

        <>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <PersistGate persistor={persistor}  loading={null}>
                       {store.getState().AuthSlice.isLoggedIn  ? <AppRoutesAuthenticated/>   : <AppRoutes /> }
                    </PersistGate>
                </Provider>
            </QueryClientProvider>
        </>
    )

}

export default App