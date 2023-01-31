import { configureStore } from "@reduxjs/toolkit";
// import { configure } from "@testing-library/react";
import signupReducer from './signupSlice'
import loginReducer from './loginSlice'





const store = configureStore({
    reducer: {
        signup: signupReducer,
        login:loginReducer
    }
})


export default store;