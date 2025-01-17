import React from 'react';
import './LoginForm.css';
import { FaUserAlt, FaLock } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>Login</h1>

            <div className='input-box'>
              <input type='text' placeholder='Username'></input>
              <FaUserAlt className='icon'/>
            </div>

            <div className='input-box'>
              <input type='password' placeholder='Password'></input>
              <FaLock className='icon'/>
            </div>

            <div className='remember-forgot'>
              <label><input type='checkbox' />Remember me</label>
              <a href='#'>Forgot password?</a>
            </div>

            <button type='submit'>Login</button>

            <div className='register-link'>
              <p>Don't have an account? <a href='#'>register</a></p>
            </div>
        </form>
    </div>
  )
}

