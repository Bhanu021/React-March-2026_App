import { useEffect, useState } from "react"




export default function RTK(){


    useEffect(()=>{

        if(!sessionStorage.getItem('count'))
        {
            sessionStorage.setItem("count" , 0)
        }

    },[])


    const [count ,setCount] = useState(Number(sessionStorage.getItem('count')))



    const hanldleCount = () =>{
        // setCount(count+1)

        sessionStorage.setItem( 'count' ,  count +1)
    }


    return (

        <>
        <h1>Value of count is  : {count}</h1>
        <button  onClick={hanldleCount} >Incre</button>

        </>

    )



}
