import axios from "axios";
import { useEffect, useState } from "react";


const useApiCall = (url, method) => {

    const [apiData, setapiData] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [isError, setIsError] = useState(false)


    useEffect(() => {

        const controller = new AbortController();
        const signal = controller.signal;


        const fetchData = async () => {
            try {

                setisLoading(true)
                const response = await axios.get(url, { signal: signal })
                const data = response.data
                setapiData(data)
                setisLoading(false)

            } catch (err) {

                if (axios.isCancel(err)) {
                    console.log(err)
                }

                setIsError(true)
            }
        }

        fetchData()


        return () => {
            console.log("Inside Unmount")
            controller.abort()
        }



    }, [url])


    return { data: apiData, isLoading, isError }


}


export default useApiCall;

