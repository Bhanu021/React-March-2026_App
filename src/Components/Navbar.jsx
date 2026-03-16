import React, { useState } from 'react'
import '../CSS/nav.css'


function Navbar(props) {   // Recieved Props as nc

   const {nc , name , email, mobile , isLight  =  true} = props;

    const [links, setLinks] = useState([
        { route: "Home", isActive: true },
        { route: "About", isActive: false },
        { route: "Contact", isActive: false }
    ])


    const handleclick = (index) => {
        let temp = [...links]
        temp.forEach((el) => el.isActive = false)
        temp[index].isActive = true;
        setLinks([...temp])

    }

    return (
        <>

            <div className='main-div'>
                <ul className='ul-list'>
                    {links.map((el, index) => (
                        <li key={`list-${index}`} style={{ backgroundColor: el.isActive ? "#04AA6D" : "transparent" }} className='list-item' onClick={() => handleclick(index)} >{el.route}</li>
                    ))}
                </ul>
            </div>

            <div style={{width : "100px" , height :"100px" ,border : "1px solid black" , backgroundColor : nc}}>
                <h1>From Navbar</h1>
            </div>

            <h1>{name} {email}  {mobile}</h1>

            {isLight ? " Light Aviable " : "Nt Avl"}
        </>

    )


}


export default Navbar