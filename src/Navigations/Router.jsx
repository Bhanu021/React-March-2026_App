import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '../Pages/Navbar';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import PageNotFound from '../Pages/PageNotFound';


function Router() {

    return (
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/** To Stay and Show Page Not Found Page */}
            {/* <Route path="*" element={<PageNotFound />} /> */}
            {/** To Redirect to any other valida page. Without Showing Page Not Found Page */}
            <Route path="*" element={<Navigate to='/' replace />} />

        </Routes>
        </>

    )
}

export default Router;