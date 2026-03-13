import React , {useState} from 'react'
import '../CSS/nav.css'


function Navbar(){

    const [links , setLinks ] = useState([
        {route  : "Home" , isActive   :true},
        {route  : "About" , isActive   :false},
        {route  : "Contact" , isActive   :false}
    ])


// const [activeIndex , setActiveIndex]=  useState(null)


// const handleclick  = (index) =>{
//     let elementsArray  =  document.getElementsByClassName('list-item');
//     for(const el of elementsArray)
//     {
//         el.style.backgroundColor =  'transparent'
//     }
//     elementsArray[index].style.backgroundColor =  '#04AA6D'
    
// }  


const handleclick = (index) =>{
    let temp =  [...links]
    temp.forEach((el)=>  el.isActive = false   )
    temp[index].isActive =  true;
    setLinks([...temp])

}

return(
    <>
    {/* JSX Code Will Come HERE */}


     {/* <div className='main-div'>
        <ul className='ul-list'>
          <li className='list-item' onClick={()=>handleclick(0)} >Home</li>
          <li className='list-item' onClick={()=>handleclick(1)}>About</li>
          <li className='list-item' onClick={()=>handleclick(2)}>Contact</li>
        </ul>
    </div> */}
     <div className='main-div'>
        <ul className='ul-list'>
            {links.map((el,index)=>(
          <li key={`list-${index}`}  style={{backgroundColor : el.isActive ?  "#04AA6D"  : "transparent"  }} className='list-item' onClick={()=>handleclick(index)} >{el.route}</li>
            ))}
        </ul>
    </div>
    </>

)


}


export default Navbar