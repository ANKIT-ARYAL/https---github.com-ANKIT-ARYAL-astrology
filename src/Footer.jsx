import React from 'react'
import Logo from './assets/logo.png'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
const Footer = () => {
  return (
    <div className='bg-blue-900 text-white mt-10 flex'>
      <div className='flex flex-col p-5 w-96 items-center '>
        <h1 className='text-xl mb-2  underline'>Quick Links</h1>
        <a href="/" className='footer-links'>Home</a>
        <a href="/about" className='footer-links'>About us</a>
        <a href="/" className='footer-links'>Horoscope</a>
        <a href="/" className='footer-links'>Contact us</a>
        <a href="/" className='footer-links'>Login</a>
        <a href="/" className='footer-links'>Sign up</a>
      </div>
      <div className='flex flex-col p-5 w-96 items-center '>
        <h1 className='text-xl mb-2  underline'>Quick Links</h1>
        <a href="/" className='footer-links'>Home</a>
        <a href="/about" className='footer-links'>About us</a>
        <a href="/" className='footer-links'>Horoscope</a>
        <a href="/" className='footer-links'>Contact us</a>
        <a href="/" className='footer-links'>Login</a>
        <a href="/" className='footer-links'>Sign up</a>
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
