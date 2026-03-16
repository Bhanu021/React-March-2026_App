import React, { useState } from "react";



function A({count , handleCount, color}) {

   

    return (
        <>
            <h3>Component : A</h3>
            <button style={{backgroundColor : color}} onClick={handleCount}>Count : {count}</button>
        </>
    )

}


export default A;