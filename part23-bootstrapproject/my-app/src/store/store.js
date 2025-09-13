import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosreducer.js";


export default configureStore({
    reducer:{
        todos:todosReducer
    }
})