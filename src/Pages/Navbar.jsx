import React, { useState } from 'react'
import '../CSS/nav.css'
import { useNavigate, Outlet } from 'react-router-dom';


function Navbar(props) {   // Recieved Props as nc

    const navigate  = useNavigate()

    const { nc, name, email, mobile, isLight = true } = props;

    const [links, setLinks] = useState([
        { route: "Home", link: "/", isActive: true },
        { route: "About", link: '/about', isActive: false },
        { route: "Contact", link: '/contact', isActive: false }
    ])


    const handleclick = (index) => {
        let temp = [...links]
        temp.forEach((el) => el.isActive = false)
        temp[index].isActive = true;
        setLinks([...temp])
        navigate(temp[index].link)

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
                </ul>
            </div>
            <Outlet />
        </>

    )


}


export default Navbar