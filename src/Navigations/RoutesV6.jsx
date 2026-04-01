import React from "react"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import { Navigate } from "react-router-dom"
import Navbar from "../Pages/Navbar"
import MyReducer from "../Pages/UseReducer"
import FormsComponent from "../Pages/Forms"
import HTTPComponent from "../Pages/HTTP"


const HOCPage = React.lazy(() => import("../Pages/HOC"));
const RTKPage = React.lazy(()=> import('../Pages/RTK'))


const RouterV6 = () => {


    // Routes Without Child

    // return  [

    //         {path : "/" ,  element :  <Home/>},
    //         {path : "/about" ,  element :  <About/>},
    //         {path : "/contact" ,  element :  <Contact/>},
    //         {path : "*" , element : <Navigate to='/' replace />}
    // ]


    // Routes with Child

    return [
        {
            path: "/", element: <Navbar />, children: [

                { path: "/", element: <Home /> },
                { path: "/about", element: <About /> },
                { path: "/contact", element: <Contact /> },
                { path: "/reducer", element: <MyReducer /> },
                { path: "/forms", element: <FormsComponent /> },
                { path: "/http", element: <HTTPComponent /> },
                { path: "/hoc", element: <HOCPage /> },
                { path: "/rtk", element: <RTKPage /> },
            ]
            
        },
        { path: "*", element: <Navigate to='/' replace /> }

    ]





}


export default RouterV6