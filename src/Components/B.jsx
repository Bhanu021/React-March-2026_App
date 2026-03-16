import React  , {useState} from "react";



function B(props) {

    const {count , handleCount, color} = props

    return (
        <>
            <h3>Component : B</h3>
            <button style={{backgroundColor : color}}  onClick={handleCount}>Count : {count}</button>
        </>
    )

}


export default B;