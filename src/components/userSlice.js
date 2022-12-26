import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        value:[]
    },
    reducers:{
        adduser:(state, action)=> {
            state.value.push(action.payload)
        },
        removeuser:(state)=>{
            state.value.pop()
        }
    }
})

export const {adduser, removeuser} = userSlice.actions 
export default userSlice.reducer