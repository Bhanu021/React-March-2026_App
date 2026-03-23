import React, { useReducer, useState } from "react";
import '../CSS/table.css'



const initialData = [
    {
        id: 101,
        maths: 35,
        science: 40,
        name: "Rahul"
    },
    {
        id: 102,
        maths: 45,
        science: 50,
        name: "Mohan"
    },
    {
        id: 103,
        maths: 55,
        science: 60,
        name: "kamal"
    },
    {
        id: 104,
        maths: 65,
        science: 70,
        name: "aman"
    },
    {
        id: 105,
        maths: 75,
        science: 80,
        name: "gaurav"
    },
]



const reducer = (state, action) => {

    console.log(action, "Action")

    switch (action.type) {

        case "INCRE_MATH":
            return state.map((st) => {
                if (st.id == action.id) {
                    return { ...st, maths: st.maths + 1 }
                }
                else {
                    return st
                }
            })
        default:
            return state

    }

}



const MyReducer = () => {
    const [data, dispatch] = useReducer(reducer, initialData)


    const clickHandler = (st) => {

        

        dispatch({ type: "INCRE_MATH", id: st.id })

    }





    return (

        <>

            <div style={{ gap: 40, display: "flex", alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                {data.map((st, i) => (


                    <button key={`student-${i}`} onClick={() => clickHandler(st)} >{st.name}</button>


                ))}
            </div>


            <div className="tb-div">
                <table>
                    <thead>
                        <tr>
                            <th>SR#</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Maths</th>
                            <th>Science</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((el,i)=>(
                            <tr key={`data-${i}`}>
                                <td>{i+1}</td>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                                <td>{el.maths}</td>
                                <td>{el.science}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        </>

    )

}


export default MyReducer


