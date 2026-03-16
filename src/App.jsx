import React, { useState } from "react"
import Navbar from "./Components/Navbar"
import Test from "./Components/Test"
import A from "./Components/A"
import B from "./Components/B"
import PropsDrilling from "./Components/PropsDrilling"

function App() {

    const [color, setColor] = useState('black')



    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count + 1)
    }

    return (

        <>
            {/* <Navbar  nc={color}  name={'Bhanu'} email='bhanu@gmail.com' mobile='8118835178' isLight={false} />  *  color={color} this is color props passing to Navar Component */}
            {/* <Test  tc={color} /> */}

            {/* <input  placeholder="Enter Color"  onChange={(e)=>setColor(e.target.value)} />
            <A  color={color}  count={count} handleCount={handleCount} />
            <B color={color} count={count} handleCount={handleCount} /> */}

            <PropsDrilling/>
        </>
    )

}

export default App