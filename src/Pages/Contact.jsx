import React, { useCallback, useState } from "react";
// import Todos from "./Todos";
import { Todos, Todos2, Todos3 } from "./Todos";

// For More info Read useCallback.md





const Contact = () => {
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)

    // const TodosWithCallback =  useCallback(Todos , [data])


    // const incre = () => {
    //     setCount(count + 1)
    // }
    //  const addData = () => {
    //     setData([...data, "New Person"])
    // }

    
    console.log("Count is Running")

    const incre = useCallback(() => {
        setCount(count + 1)
    }, [count])

    console.log("Count is Running")
    const addData =  useCallback(()=>{

        setData([...data, "New Person"])
    },[data])

   


    return (

        <>
            <Todos data={data} addData={addData} />
            <button onClick={addData} >Add New Data </button>

            <h4>Count : {count}</h4>
            <button onClick={incre} >Incre</button>

        </>
    )


}

export default Contact;