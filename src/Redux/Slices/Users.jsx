import { createSlice } from "@reduxjs/toolkit";



const Users =  createSlice({
        name  : "Users",
        initialState :{
            users : []
        },
        reducers : {
            setUsers : (state , action) =>{

                state.users  =  [...state.users , action.payload]
            } 
        }

        

})

export const {setUsers} =  Users.actions

export default Users.reducer