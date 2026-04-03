import React, { useState } from 'react'
import '../CSS/nav.css'
import { useNavigate, Outlet } from 'react-router-dom';
import { setAuth } from '../Redux/Slices/AuthSlice';
import { useDispatch } from 'react-redux';


function Navbar(props) {   // Recieved Props as nc

    const navigate = useNavigate()
    const dispatch =  useDispatch()

    const { nc, name, email, mobile, isLight = true } = props;

    const [links, setLinks] = useState([
        { route: "Home", link: "/", isActive: true },
        { route: "About", link: '/about', isActive: false },
        { route: "Contact", link: '/contact', isActive: false },
        { route: "Reducer", link: '/reducer', isActive: false },
        { route: "Forms", link: '/forms', isActive: false },
        { route: "HTTP", link: '/http', isActive: false },
        { route: "HOC", link: '/hoc', isActive: false },
        { route: "RTK", link: '/rtk', isActive: false },
        { route: "Users", link: '/dynamic', isActive: false },
    ])


    const handleclick = (index) => {
        let temp = [...links]
        temp.forEach((el) => el.isActive = false)
        temp[index].isActive = true;
        setLinks([...temp])
        navigate(temp[index].link)

    }

    const handleLogout  = () =>{
    
        dispatch(setAuth(false))
        navigate('/login')
        window.location.reload()

    }

    return (
        <>
            <div className='main-div'>
                <ul className='ul-list'>
                    {links.map((el, index) => (
                        <li key={`list-${index}`} style={{ backgroundColor: el.isActive ? "#04AA6D" : "transparent" }} className='list-item' onClick={() => handleclick(index)} >
                            {/* <a href={el.link}>{el.route}</a>  */}
                            {el.route}
                        </li>
                    ))}
                    <li  onClick={handleLogout} className='list-item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                        </svg>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>

    )


}


export default Navbar