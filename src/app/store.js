import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'
export const store=configureStore({
    reducer:todoReducer
})

//reducer is a pure function that takes a state and an action as an argument and returns a new state.

//both action and state are objects. An action is a plain javascript obj describing an event that leads to change in state, for instance Increment or Decrement