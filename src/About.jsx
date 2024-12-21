import React from 'react'
import Logo from './assets/logo.png'
const About = () => {
  return (
    <div className='flex relative justify-center items-center mt-10'>
      <div className='w-full h-[800px] relative flex justify-center'>
      <img src='https://www.ramana-maharshi.org/wp-content/uploads/2024/01/mj_17111_3.jpg'
      className='object-fill w-full'
      />
      <h1 className='p-2 text-4xl font-light w-[550px] absolute top-5 text-white text-center'>Discover the Cosmic Connection with Jyotishi </h1>
    </div>
    <div className='absolute ml-10 left-1 top-24 flex flex-col justify-center items-center'>
    <img src={Logo} 
    className=' h-auto w-96 rounded-full'/>
    <button className='text-white bg-red-400 px-2 py-1 rounded-full  w-32 nav-btn mt-10'>Learn More</button>
    </div>
    <div className='absolute right-32 text-white top-32 w-80 flex flex-col items-center'>
      <h1 className='text-3xl px-10'>Experience</h1>
      <p className='mt-5'>"With over [X years] of expertise in Vedic astrology, our team of Jyotishis has guided countless individuals toward clarity and success. Our approach combines time-honored traditions with a personalized understanding of your unique astrological chart, ensuring accurate and meaningful insights."</p>
    </div>
    <div className='absolute top-96'>
      <button className='nav-btn bg-red-400 '>Join Us Now!</button>
    </div>
    </div>
  )
}

export default About
