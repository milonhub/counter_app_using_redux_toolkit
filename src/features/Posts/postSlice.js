
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchPosts = createAsyncThunk('posts/fetsposts',
async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
})



const postSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        post: [],
        error: null
    },

    extraReducers: (builder)=>{
        builder.addCase(fetchPosts.pending, (state)=>{
            state.isLoading = true
        });

        builder.addCase(fetchPosts.fulfilled, (state, action)=>{
            state.isLoading = false
            state.post = action.payload
            state.error = null
        });

        builder.addCase(fetchPosts.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
})


export default postSlice.reducer;