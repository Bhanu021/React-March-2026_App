import React, { useState } from 'react'
import App from '../App'



function Test({tc}) {

      console.log("Props color in Test" ,  tc)


  const [data, setData] = React.useState([10, 9, 200, 432, 897, 666, 4201, 789, 650])




  const [stData, setStData] = React.useState([])

  const [count, setCount] = useState(0);




  return (

    <>
      <h1>this is Test Component</h1>
      <div style={{ width: "100px", height: "100px", border: "1px solid black" , backgroundColor : tc }}>
        <h1>From Test</h1>
      </div>
      

    </>
  )
}

export default Test