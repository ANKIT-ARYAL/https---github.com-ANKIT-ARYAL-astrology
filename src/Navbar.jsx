import React from 'react'
import Logo from './assets/logo.png'
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className=' bg-yellow-50 min-h-56'>
    <div className='relative flex items-center justify-center ml-10 mr-10'>
        <a href='/'>
        <img
        src={Logo}
        alt='logo'
        className='w-32 h-32 rounded-full p-4 absolute left-3 top-5'
        />      
        </a>
        <div className='space-x-16 absolute top-16'>
        <Link to='/' className='nav-btn'>Home</Link>
        <Link to='/about' className='nav-btn'>About</Link>
        <div className='relative group inline-block'>
          <Link to='/horoscope'><button className='nav-btn'>Horoscope</button></Link>
          <div className='absolute hidden group-hover:block bg-white shadow-md rounded mt-2'>
            <a href="#" className='dropdown'>Daily </a>
            <a href="#" className='dropdown'>Weekly </a>
            <a href="#" className='dropdown'>Yearly </a>
          </div>
        </div>
        <Link to='/blog'><button className='nav-btn'>Blog</button></Link>
        <Link to='/contact'><button className='nav-btn'>Contact Us</button></Link>
        <Link to='/login'><button className='nav-btn'>Login</button></Link>
        <Link to='/signup'><button className='nav-btn'>Sign up</button></Link>
        </div>
        <div className='absolute top-16 right-20'>
        <Link to='/login'><FaRegUser size={30}className='hover:scale-150'/></Link>
        </div>
    </div>
    </div>
  )
}

export default Navbar

