import React from "react";



// useMemo // Memmorisez Value
// useCallback  Memorized Functions

export const Todos =  React.memo(({data, addData})=>{

    console.log("Reding from Todos component")

    return(
        <>
         <div>
            <h1>Showing Data {data.length} </h1>
            {data.map((el,i)=>(
                <h4  key={i} >{el}</h4>
            ))}
        </div>

        </>
    )

})




export const Todos2 =  React.memo(({data, addData})=>{

    console.log("Reding from Todos component")

    return(
        <>
         <div >
            <h1>Showing Data {data.length} </h1>
            {data.map((el,i)=>(
                <h4  key={i} >{el}</h4>
            ))}
        </div>

        </>
    )

})

export const Todos3 =  React.memo(({data, addData})=>{

    console.log("Reding from Todos component")

    return(
        <>
         <div>
            <h1>Showing Data {data.length} </h1>
            {data.map((el,i)=>(
                <h4  key={i} >{el}</h4>
            ))}
        </div>

        </>
    )

})


// export default Todos;


// Default 
//  Name
