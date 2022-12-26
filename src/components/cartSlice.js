import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        value:[
            {
                name:'biriyani',
            },
        ],
    },
    reducers:{
      addItem:(state, action)=>{
        state.value.push(action.payload)
      },
      deleteItem:(state)=>{
        state.value.pop()
      }      
    }
})

export const {addItem, deleteItem} = cartSlice.actions
export default cartSlice.reducer