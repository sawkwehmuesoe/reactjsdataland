import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const BASEURL = `https://jsonplaceholder.typicode.com/users`; 

// Thunk to fetch users 
export const fetchusers = createAsyncThunk('data/fetchusers',async(obj,{rejectWithValue})=>{
    try{
        const res = await axios.get(BASEURL);
        return res.data;
    }catch(err){
        return rejectWithValue("Something went wrong in fetchusers",err)
    }
}); 

const userSlice = createSlice({
    name:"users",
    initialState:{
        users:[],
        loading:false,
        error:null
    },

    reducers:{

    },

    extraReducers:(builder)=>{
        builder
            .addCase(fetchusers.pending,(state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchusers.fulfilled,(state,action)=>{
                state.loading = false;
                state.error = null;
                state.users = action.payload;
            })
            .addCase(fetchusers.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default userSlice.reducer;