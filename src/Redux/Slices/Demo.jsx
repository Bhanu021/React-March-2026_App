import { createSlice } from "@reduxjs/toolkit";



const DemoReducer = createSlice({

    name  : "DemoReducer",
    initialState : {
        count  :  0
    },
    reducers :{
        setCount  :  (state , action) =>{
            console.log(action)
            state.count = action.payload
        }
    }
})


export const {setCount} = DemoReducer.actions


export default DemoReducer.reducer