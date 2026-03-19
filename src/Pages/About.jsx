import React, { useState , useEffect } from "react";



const About = () =>{
let [count, setCountValue] = useState(0)

let [time , setTime] = useState(Date.now().toLocaleString())
// const setCount  = () =>{
//     console.log("Hello")
//     sessionStorage.setItem('count' , "1")
// }

// setCount()

console.log("Outside User Efect")

useEffect(()=>{

   fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then((result)=>{

    console.log(result)

   }).catch((err)=>{
    console.log(err)
   })

} , [count])


return(

    <>
    <h1>This is About Component {count}  {time}</h1>
    <button onClick={() => { setCountValue(count+1)} } >Click Me</button>
    <button onClick={() => { setTime(Date.now().toLocaleString())} } >Set Time</button>
    </>
)


}

export default About;