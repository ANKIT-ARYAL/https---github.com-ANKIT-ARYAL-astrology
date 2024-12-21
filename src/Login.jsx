import React from 'react'

const Login = () => {
  return (
    <div className='div-screen '>
     
      <div className='mt-28 border-2 rounded-lg shadow-md p-5 w-fit h-fit'>
        
        <h1 className='heading'> Log In</h1>
        <div className='mt-10 p-2'>
            <input type='text' placeholder='Enter your username' 
            className='login-input'/>
        </div>
        <div className='mt-15 p-2'>
            <input type='password' placeholder='Enter your Password' 
            className='login-input'/>
        </div>
        <button className='mt-10 w-full bg-blue-400 rounded-full py-1 text-xl'>Log In</button>
      </div>
    </div>
  )
}

export default Login
