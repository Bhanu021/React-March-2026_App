import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { setCount } from "../Redux/Slices/Demo"
import { useDispatch } from "react-redux"




export default function RTK(){
    const dispatch   = useDispatch()



  const count = useSelector((state)=> state?.demoReducer?.count )


    useEffect(()=>{

        // if(!sessionStorage.getItem('count'))
        // {
        //     sessionStorage.setItem("count" , 0)
        // }

        if(!count)
        {
            dispatch(setCount(0))
        }

    },[])


    // const [count ,setCount] = useState(Number(sessionStorage.getItem('count')))



    const hanldleCount = () =>{
        // setCount(count+1)

        // sessionStorage.setItem( 'count' ,  count +1)

        dispatch(setCount(count + 1))
    }


    return (

        <>
        <h1>Value of count is  : {count}</h1>
        <button  onClick={hanldleCount} >Incre</button>

        </>

    )



}
