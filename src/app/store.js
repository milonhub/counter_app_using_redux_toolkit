import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice";
import postReducer from "../features/Posts/postSlice";


const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReducer,
    }
})

export default store;