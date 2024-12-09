import React, { useState, useEffect } from 'react'
import map from "../../assets/map.jpg"
import { Link } from 'react-router-dom'

const Contact = () => {

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [values, setValues] = useState({
        firstname: '',
        lastname:'',
        email:'',
        number:''
    });

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(values));
        setIsSubmit(true);
    };
    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(values);
        }
    },[formErrors])

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for basic email validation
    
        if (!values.firstname) {
            errors.firstname = "First Name is required!";
        }
        if (!values.lastname) {
            errors.lastname = "Last Name is required!";
        }
        if (!values.email) {
            errors.email = "Email ID is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
    
        if (!values.number) {
            errors.number = "Phone number is required!";
        } else if (values.number.length < 10) {
            errors.number = "Phone number must be at least 10 digits!";
        }
    
        return errors;
    };
    
  return (
<>

    <h1 className='text-3xl flex justify-center mt-10 bg-blue-500 p-10 text-white'>Contact Us</h1> 
        <div className='ml-32 mt-10 grid grid-cols-3 border-b-2 pb-5 w-full'>
            <div className='flex items-center border-r-2  ml-10'>
                <img className='h-20 mt-5' 
                src='https://t4.ftcdn.net/jpg/07/49/96/63/360_F_749966377_H8eVJv5rUM8soqdZ8JnSF09TXpa6YQ8D.jpg' 
                alt='logo'/>
            <div className='ml-6 flex flex-col items-center'>
                <h1 className='text-3xl font-bold'>Email Us at</h1>
                <p>abcd@xyz.com</p>  
            </div>
            </div>
            <div>
                <div className='flex items-center border-r-2 ml-10'>
                <img className='h-20 mt-5' 
                src='https://static.vecteezy.com/system/resources/thumbnails/006/303/078/small/phone-icon-in-trendy-flat-style-isolated-on-grey-background-handset-icon-with-waves-telephone-symbol-for-your-design-logo-ui-illustration-eps10-free-vector.jpg' 
                alt='logo'/>
            <div className='ml-6 flex flex-col items-center'>
                <h1 className='text-3xl font-bold'>Call Us at</h1>
                <p>12345678</p>  
            </div>
            </div>    
            </div>
            <div>
                <div className='flex items-center ml-10'>
                <img className='h-20 mt-5' 
                src='https://i.pinimg.com/736x/14/d7/5b/14d75bf8577bfea661086277ffe713f8.jpg' 
                alt='logo'/>
            <div className='ml-6 flex flex-col items-center'>
                <h1 className='text-3xl font-bold'>Our Office</h1>
                <p>Kathmandu, Nepal</p>  
            </div>
            </div>                
            </div>
        </div >
    <div>{/*for contact form and map */}
        <div className='grid grid-cols-3'>
        <div className='flex justify-center  mt-16 ml-10'>{/*ContactForm */}
            
                <form onSubmit={handleSubmit}
                className='border-2 w-fit rounded p-5 bg-white shadow-md'>
                    <h1 className='flex justify-center text-xl font-bold underline mb-5 '>
                        Registration Form
                    </h1>
                    <div className='flex justify-center w-80 mb-10 text-green-500'>
                {Object.keys(formErrors).length === 0 && isSubmit ? (<div>Registration Form Successfully Submitted!</div>)
                 : ( 
                <pre>{JSON.stringify(values, undefined ,2)}</pre>)}
            </div>
                    <div className='mb-5 '>
                    <label htmlFor='firstname' className='block text-gray-700 mb-2'>
                        First Name:
                    </label>
                    <input type='text' name='firstname' placeholder='Enter your firstname'  
                    className=' border-gray-400 border-2 p-2 w-full rounded'
                    value={values.firstname}
                    onChange={(e) => handleChanges(e)} />
                    </div>
                    <p className='text-red-500 p-2'>{formErrors.firstname}</p>
                    <div className='mb-5 '>
                    <label htmlFor='lastname' className='block text-gray-700 mb-2'>
                        Last Name:
                    </label>
                    <input type='text' name='lastname' placeholder='Enter your lastname' 
                    className=' border-gray-400 border-2 p-2 w-full rounded' 
                    value={values.lastname}
                    onChange={(e) => handleChanges(e)} />
                    </div>
                    <p className='text-red-500 p-2'>{formErrors.lastname}</p>
                    <div className='mb-5 '>
                    <label htmlFor='email' className='block text-gray-700 mb-2'>
                        Email:
                    </label>
                    <input type='email' name='email' placeholder='Enter your email ID' 
                    className=' border-gray-400 border-2 p-2 w-full rounded'
                    value={values.email}
                    onChange={(e) => handleChanges(e)} />
                    </div>
                    <p className='text-red-500 p-2'>{formErrors.email}</p>
                    <div className='mb-5 '>
                    <label htmlFor='number'
                    className='block text-gray-400 mb-2'>
                        Phone Number:
                    </label>
                    <input type='tel' name='number' placeholder='Enter your phone number' 
                    className=' border-gray-400 border-2 p-2 w-full rounded'
                    value={values.number}
                    onChange={(e) => handleChanges(e)} />
                    </div>
                    <p className='text-red-500 p-2'>{formErrors.number}</p>
                    <div className='flex justify-center'>
                    <button type='submit'
                    className='bg-blue-500 text-white px-5 py-2 rounded '>
                    Submit
                    </button>
                    </div>
                    
                </form>

            </div>
        <div className='ml-28 mt-16 col-span-2 mb-10'>
            <h1 className='text-xl mb-10 border-gray-500 border-b-2 w-fit font-bold'>Our Office Location</h1>
                <img className='w-120 h-96'
                src={map} 
                alt='map' />
        </div>
        </div>
    </div>    
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
</>
  )
}

export default Contact
