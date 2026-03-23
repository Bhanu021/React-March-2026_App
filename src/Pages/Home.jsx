import React, { use, useMemo, useState } from "react";


const heavyCalc = (num) =>{
    console.log("I am Caluclating")
    for(let i = 0 ; i < 1000000000 ; i++)
    {
            num = num +1
    }

    return num
}


const Home = () =>{

const [data, setData] =  useState([])
const [count , setCount] = useState(0)
// const calcValue  = heavyCalc(count)
const calcValue  = useMemo(()=> heavyCalc(count) , [count])



const incre = ()=>{
    setCount(count + 1)   
}
const addData = () =>{
    setData([...data , "New Person"])
}

return(
    <>

        <div>
            <h1>Showing Data {data.length} </h1>
            {data.map((el,i)=>(
                <h4  key={i} >{el}</h4>
            ))}

            <button  onClick={addData} >Add New Data </button>

        </div>


        <div style={{marginTop: "40px"}}>

            <h4>Count : {count}</h4>
            <button onClick={incre} >Incre</button>

            <h1>Calc Value : {calcValue}</h1>

        </div>

    </>
)


}

export default Home;