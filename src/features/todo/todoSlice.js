import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { text } from "express";

const initialState={
    todos:[{id:1, text:"Hi"}]
}

//Reducer is a functionality and Slice is a Bigger aspect of this!

//These 3 are built in attributes of CreateSlice Function
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
        },
    }
})

export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer