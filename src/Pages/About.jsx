import React, { useState , useEffect } from "react";



const About = () =>{



let [color , setcolor] = useState("red")
let [count , setCount] = useState(0)



// Call on Mounting  :: Page Mounting
//  Call on Page Update When Dependency is passed :: Page Update
//  Page Unmounting



useEffect(()=>{
    sessionStorage.setItem("myPage","I have Land on about page")
    return ()=>{
        console.log("Leaving the Page")
        sessionStorage.removeItem("myPage")
    }
 
} , [count])


return(

    <>  

        <h1 style={{color : color}}>i am Heading text {count}</h1>
        <button onClick={()=> setCount(count +1)} >Increase</button>
        <button onClick={()=> setCount(count -1)} >Decrease</button>
    </>
)


}

export default About;