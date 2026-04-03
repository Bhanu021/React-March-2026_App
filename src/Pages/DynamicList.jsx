import { useDispatch, useSelector } from "react-redux"
import { setUsers } from "../Redux/Slices/Users"
import { useState } from "react"






const DynamicList = () => {
    const dispatch = useDispatch()

    const UsersList = useSelector((state) => state.Users.users)

    const [name, setName] = useState("")


    const onClick = (e) => {
        e.preventDefault()

        dispatch(setUsers(name))

    }


    return (
        <>

            <form>
                <input placeholder="Enter Your Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                <button onClick={onClick} >Submit</button>
            </form>


            <>
            {UsersList.map((el,i)=>(
                <h1 key={i}>{el}</h1>
            ))}
            </>



        </>
    )

}


export default DynamicList