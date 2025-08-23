import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersreducer.js";


export default configureStore({
    reducer:{
        users:usersReducer
    }
})