import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Signup from '../../signup/Signup';
import { signupActions } from '../../store/signupSlice';
import './Login.css'
const Login = () =>{
    const signupState = useSelector( state =>state.signup.signupState);
    const dispatch = useDispatch()
    console.log(signupState)

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(signupActions.getStarted())
    }
 return (
    
    <div className='login'>
        
        <div className='login-header'>
          <h1 className='logo'>Netflix</h1>
          <button>Sign up</button>
        </div>
       <div className='login-body'>
       {signupState ? <Signup/>:(
            <>
         <h1>Unlimited movies, TV shows and more.</h1>
         <h2>Watch anywhere. Cancel anytime.</h2>
         <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
         <form className='login-form'>
            <input type='text' placeholder="Enter email"/>
            <button onClick={submitHandler}>get started</button>
         </form>
         </> )}
       </div> 
       
       <div className='gradeint'></div>
    </div>
 )
}
export default Login;