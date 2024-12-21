import React from 'react'
import Chat from './Chat'


const Contact = () => {
  return (
    <>
    <h1 className='heading mt-10'>Message US</h1>
    <div className='min-h-screen flex justify-end mt-10 relative'>
      <div className='flex flex-col items-center absolute r-3'>
    <h1 className='text-xl text-blue-900'>Live Chat</h1>
        <Chat />
        </div>
    </div>
    </>
  )
}

export default Contact
