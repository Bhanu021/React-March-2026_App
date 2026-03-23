import Home from "../Pages/Home"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import { Navigate } from "react-router-dom"
import Navbar from "../Pages/Navbar"
import MyReducer from "../Pages/UseReducer"


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
            ]
            
        },
        { path: "*", element: <Navigate to='/' replace /> }

    ]





}


export default RouterV6