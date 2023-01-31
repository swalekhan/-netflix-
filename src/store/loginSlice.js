import { createSlice } from "@reduxjs/toolkit";


const storedtoken = localStorage.getItem("token")
const LoginSlice = createSlice({
    name:"login",
    initialState:{loginState:storedtoken},
    reducers:{
        login(state,action){
            console.log(action)
         state.loginState = action.payload;
         localStorage.setItem("token",action.payload)
        },
        logout(state){
            state.loginState = null;
            localStorage.removeItem("token")
        }
    }
})


export const login = (email, password)=>{
    return (dispatch)=>{
        const response =  fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCWiniCYxqAVOK5BkdZfgrK35YR2k8VUt8",{
            method:"POST",
            body:JSON.stringify({
              email,
              password,
              returnSecureToken:true,
            }),
            headers:{
              "Content-Type":"application/json"
            }
          })
          response.then((res)=>{
            if(!res.ok){
              throw new Error("error")
            }else{
              return res.json()
            }
          }).then((data)=>{
            console.log(data)
            dispatch(loginActions.login(data.idToken))
          })
    }
}
export const loginActions = LoginSlice.actions;

export default LoginSlice.reducer;
// console.log(LoginSlice)