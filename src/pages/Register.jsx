import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className = 'auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" name='username' placeholder='username' />
        <input required type="email" name='email' placeholder='email'/>
        <input required type="password" name="password" placeholder='password'/>
        <button>Register</button>
        <p>This is an Error!</p>
        <span>If you have an account <Link to ="/login">Sign Up</Link></span>
      </form>
    </div>
  )
}

export default Register