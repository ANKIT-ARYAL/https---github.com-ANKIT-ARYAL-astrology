import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Login = () => {

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(values));
        setIsSubmit(true);
    }
    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(values);
        }
    },[formErrors])

    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 4) {
            errors.password = "Password cannot be less than 4 characters!";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot be more than 10 characters!";
        }
        return errors;
    };
    

  return (
    
    <div className='min-h-screen bg-gray-100'>
      <h1 className='text-3xl flex justify-center mt-10'>Broker Account </h1>
    <div className='flex justify-center w-80 mb-10 text-green-500'>
    </div>
    <div className='flex justify-center  mt-16'>{/*ContactForm */}
                <form onSubmit={handleSubmit} 
                className='border-2 w-fit rounded p-5 bg-white shadow-md'>
                    <h1 className='flex justify-center text-xl font-bold underline mb-5 '>
                        Login Details
                    </h1>
                    {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className='flex justify-center items-center mb-10 text-green-500'>Logged In Successfully!</div>)
                 : ( 
                <pre>{JSON.stringify(values, undefined ,2)}</pre>)}
                    <div>
                        <div className='mb-5 '>
                    <label htmlFor='username' className='block text-gray-700 mb-2'>
                        Username:
                    </label>
                    <input type='text' name='username' placeholder='Enter your username' 
                    className=' border-gray-400 border-2 p-2 w-full rounded'
                    value={values.username}
                    onChange={(e) => handleChanges(e)} />
                    </div>
                    <p className='text-red-500 p-2'>{formErrors.username}</p>
                    <div className='mb-5 '>
                    <label htmlFor='password'
                    className='block text-gray-400 mb-2'>
                        Password:
                    </label>
                    <input type='password' name='password' placeholder='Enter your password' 
                    className=' border-gray-400 border-2 p-2 w-full rounded'
                    value={values.password}
                    onChange={(e) => handleChanges(e)} />
                    </div>
                    <p className='text-red-500 p-2'>{formErrors.password}</p>
                    <div className='flex justify-center'>
                    <button className='bg-blue-500 text-white px-5 py-2 rounded hover:'
                    type='submit'>
                    Login
                    </button>
                    </div>
                    </div>
                </form>

            </div>
            <div>
            <div className="bg-blue-500 text-white mt-10 p-5  grid grid-cols-3 item-center"> 
        <div className='flex flex-col items-center'>
            <img src="https://cdn.vectorstock.com/i/500p/62/22/handshake-circle-symbol-logo-design-vector-21246222.jpg" 
            className="w-32 mb-2" 
            alt="logo" />
            <p className='font-bold uppercase p-2'>Broker no.1</p>
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='text-xl mb-3'>Quick Links</h1>
            <Link to='/contact' className='mt-3 underline text-white hover:text-gray-300'>Location</Link>
            <Link to='/contact' className='underline hover:text-gray-300 mt-3 text-white'>Contact Us</Link>
            <Link to='/signup' className='mt-3 text-white underline hover:text-gray-300'>Join Us</Link>
            <Link to="/"><button className="mt-3  text-white hover:text-gray-300 underline">Home</button></Link>
        </div>
        <div className="flex justify-end">
            <h4>&copy;Stock Broker, 2024</h4>
        </div>    
    </div>
    </div>
</div>
  )
}

export default Login
