import React from 'react'
import Logo from './assets/logo.png'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Footer = () => {

  const handleClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className='bg-blue-900 text-white mt-10 flex'>
      <div className='flex flex-col p-5 w-96 items-center '>
        <h1 className='text-xl mb-2  underline'>Quick Links</h1>
        <Link to="/" className='footer-links' onClick={handleClick}>Home</Link>
        <Link to="/about" className='footer-links' onClick={handleClick}>About us</Link>
        <Link to="/horoscope" className='footer-links' onClick={handleClick}>Horoscope</Link>
        <Link to="/contact" className='footer-links' onClick={handleClick}>Contact us</Link>
        <Link to="/login" className='footer-links' onClick={handleClick}>Login</Link>
        <Link to="/signup" className='footer-links' onClick={handleClick}>Sign up</Link>
      </div>
      <div className='flex flex-col p-5 w-96 items-center '>
        <h1 className='text-xl mb-2  underline'>Quick Links</h1>
        <Link to="/" className='footer-links' onClick={handleClick}>Home</Link>
        <Link to="/about" className='footer-links' onClick={handleClick}>About us</Link>
        <Link to="/horoscope" className='footer-links' onClick={handleClick}>Horoscope</Link>
        <Link to="/contact" className='footer-links' onClick={handleClick}>Contact us</Link>
        <Link to="/login" className='footer-links' onClick={handleClick}>Login</Link>
        <Link to="/signup" className='footer-links' onClick={handleClick}>Sign up</Link>
      </div>
      <div className='flex p-5 w-[600px] items-center '>
        <img 
        src={Logo}
        className='rounded-full h-64'
        />
        <div className='flex-col'>
        <p className='ml-10'>
        Jyotishi.com is a platform that provides a wide range of Lal Kitab astrology-based astrology remedies products and services.
        </p>
        <div className='flex'>
        <CiFacebook size={30} className='footer-icons'/>
        <FaInstagram size={30} className='footer-icons '/> 
        <FaTiktok size={30} className='footer-icons'/>
        <CiYoutube size={30} className='footer-icons'/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
