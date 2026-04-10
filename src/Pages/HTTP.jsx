import React, { useEffect, useState } from "react"
import Lottie from "lottie-react"
import NoDataFound from '../Assets/No-Data-Found.json'
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import useApiCall from "../hooks/useApiCall";

const options = {
    animationData: NoDataFound,
    loop: true
};


function HTTPComponent() {

    const [count, setcount] = useState(0)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const {data :  appData , isLoading : load , isError}  =  useApiCall('https://jsonplaceholder.typicode.com/todos' , 'get')
    console.log(appData)
    console.log(load)
    console.log(isError)

    // console.log(data)

    // By Fetch

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json()).then((result) => {
    //         console.log(result)
    //         setLoading(false)
    //         if (Array.isArray(result) && result.length > 0) {
    //             setData(result)
    //         }
    //         else {
    //             setData([])
    //         }
    //     }).catch((err) => {
    //         setLoading(false)
    //         console.log(err)
    //         setData([])
    //     })
    // }, [loading])


    // By Axios


    const FetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        return response.data

    }


    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/to').then((res)=>{
    //         console.log(res.data)
    //         setData(res.data)
    //         setLoading(false)
    //     }).catch((err)=>{
    //         setLoading(false)
    //         setData([])
    //         console.log(err)

    //     })
    // },[loading])


    // const mutation =  useMutation({
    //     mutationFn : FetchData,
    //     mutationKey : ['FetchData'],
    //     retry :  3,
    //     onSuccess : (res) =>{
    //         setData(res)
    //         setLoading(false)
    //     },
    //     onError : () =>{
    //         setData([])
    //         setLoading(false)
    //     }
    // })  

    // React.useEffect(()=>{
    //     mutation.mutate()

    // },[])


    const { data : myData , isLoading  } = useQuery({
        queryKey: ['FetchData'],
        queryFn: FetchData,
        refetchOnWindowFocus : true,
        refetchOnMount :  true,
       refetchOnReconnect  : true
    }); 



    // console.log(myData)



    return (

        <>

            {isLoading ?

                <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10%" }}>
                    <Lottie style={{ width: 200, height: 200 }} animationData={NoDataFound} loop={true} />

                </div>

                :



                <table className="table table-striped" style={{ width: "80%" }}>
                    <thead>
                        <tr>
                            <th scope="col">SR#</th>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myData.map((el, i) => (

                            <tr key={`user-item-${i}`}>
                                <th scope="row">{i + 1}</th>
                                <td>{el?.id}</td>
                                <td>{el.title}</td>
                                {/* <td>{String(el.completed)}</td> */}
                                <td><sapn style={{ color: "white", backgroundColor: el.completed ? "green" : "red", padding: "5px 10px 5px 10px" }} >{el.completed ? "Completed" : "Not Completed"}</sapn></td>
                            </tr>

                        ))}

                    </tbody>
                </table>

            }

        </>

    )


}


export default HTTPComponent

