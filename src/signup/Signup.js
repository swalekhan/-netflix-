import { useRef } from "react";
import React from "react";
import './Signup.css'
import { useDispatch } from "react-redux";
// import { loginActions } from "../store/loginSlice";
import { login } from "../store/loginSlice";

const Signup = () =>{
    const dispatch = useDispatch()
  const emailRef = useRef();
  const passRef = useRef()
  const submitHandler = (e)=>{
     e.preventDefault()
     dispatch(login(emailRef.current.value,passRef.current.value))
  }
    return (
        <div className="signup-screen">
         <form onSubmit={submitHandler}>
           <h1>Signup</h1>
           <input ref={emailRef} type="email" placeholder="email" required/>
           <input ref={passRef} type="password" placeholder="email" required/>
           <button>Signup</button>
           <h4>already user</h4>
         </form>
        </div>
        
    )
}

export default Signup;