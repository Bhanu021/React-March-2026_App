import React, { useState } from "react"
import Navbar from "./Pages/Navbar"
import Router from './Navigations/Router'
import { useRoutes } from "react-router-dom"
import RouterV6 from "./Navigations/RoutesV6"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {
    const queryClient  =  new QueryClient()

    const AppRoutes = () => {
        const routeArray = RouterV6()
        let myRoutes = useRoutes(routeArray)
        return myRoutes
    }

    return (

        <>
            <QueryClientProvider client={queryClient}>
                <AppRoutes />
            </QueryClientProvider>
        </>
    )

}

export default App