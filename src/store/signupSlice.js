import { createSlice } from "@reduxjs/toolkit";


const signupSlice = createSlice({
    name:"signup",
    initialState:{signupState:false},
    reducers:{
        getStarted(state){
            state.signupState = !state.signupState;
        }
    }
})

export const signupActions = signupSlice.actions;

export default signupSlice.reducer;