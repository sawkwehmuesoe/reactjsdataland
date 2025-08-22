import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchposts = createAsyncThunk(
  
    'posts/fetchposts',async(obj,{rejectWithValue,fulfillWithValue})=>{
    
      try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');   
        // return res.data;

        return fulfillWithValue(res.data);

      }catch(error){
        return rejectWithValue("Something went wrong , try again")
      }
  
    }
  );

export const postsSlice = createSlice({
  name: 'posts',

  initialState: {
    posts:[],
    favorites:[],
    loading:false,
    error:null
  },
  reducers: {

    togglefavorite: (state, action) => {

      // console.log(action);

      const postid = action.payload;
        
      if(state.favorites.includes(postid)){
        state.favorites = state.favorites.filter(id => id !== postid)
      }else{
        state.favorites.push(postid);
      }

    },

  
  },
  extraReducers: (builder) => {
    
    builder
      .addCase(fetchposts.pending, (state) => {
          // console.log("Pending");

          state.loading = true;
          state.error = null;
      })
      .addCase(fetchposts.fulfilled,(state,action)=>{
        
        // console.log(action.payload);

        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchposts.rejected, (state,action) => {
          state.loading = false;
          state.error = action.payload;
    })
  },
})


export const { togglefavorite } = postsSlice.actions; // after thunk
export default postsSlice.reducer;