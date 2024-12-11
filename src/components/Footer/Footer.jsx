import React from 'react'
import map from '../../assets/map.jpg';
const Footer = () => {
  return (
<>
<div class="relative h-96">
    <img src="https://media.istockphoto.com/id/513439341/photo/portrait-of-enthusiastic-business-people-in-circle.jpg?s=612x612&w=0&k=20&c=oxwsq8WGFT0ixmSojntYBEZqifne4P7DlqOWbXCqWUk="
   alt="Background image" class="w-full h-96 object-cover" />
  <div class="absolute inset-0 bg-blue-900 bg-opacity-80"> 
    <div className='flex flex-col items-center justify-center text-white border-b p-2'>
    <h1 className=' mt-5 text-xl'>LOGO</h1>
    <p className='text-sm'> It is a long established fact that a reader will be distracted by the readable content</p>
    </div>
    <div className='grid grid-cols-4 text-white text-sm mt-5'>
        <div className='flex flex-col items-start'>
            <a href="#" className='mb-2 font-bold'>Quick Links</a>
            <a href="#">About us</a>
            <a href="#">FAQ</a>
            <a href="#">Contact us</a>
            <a href="#">About us</a>
            <a href="#">About us</a>
            <div className='flex mt-16'>
                <img src='https://img.freepik.com/free-vector/instagram-logo_1199-122.jpg?semt=ais_hybrid' 
                className='w-10 h-10 rounded-full p-2'/>
                <img src='https://images.ctfassets.net/h67z7i6sbjau/5zteWRcC1qbgLZoClcMmYl/a0391fdc321eddce7de41152108723b5/Brand_Guidelines_hero_2x.jpg?fm=webp&q=85' 
                className='w-10 h-10 rounded-full p-2'/>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4N37TIgWC_QLpspNwGddZH8DhzljeYMFnA&s' 
                className='w-10 h-10 rounded-full p-2'/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png' 
                className=' w-10 h-10 rounded-full p-2'/>
            </div>
        </div>
        <div className='flex flex-col items-start justify-center'>
            <h1 className='font-bold mb-2'>Contact</h1>
            <div className='flex p-2 justify-center'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcq4x13Q56Lx4t6tyYwR68Ftj2nKG-U4rDDg&s'
                className='w-10 h-10 rounded-full p-2 ' />
                <p className='p-2'>01-1233434, 9876534210</p>
            </div>
            <div className='flex p-2'>
                <img src='https://img.freepik.com/free-vector/location_53876-25530.jpg'
                className='w-10 h-10 rounded-full p-2' />
                <p className='p-2'>Kathmandu, Nepal</p>
                
            </div>
            <img src={map}
                className='w-72 h-36' />
        </div>
        <div className='flex flex-col items-start ml-52 mt-10'>
            <h1 className='font-bold mb-4 '>Gallery</h1>
            <a href="#">Photo Gallery</a>
            <a href="#">Video Gallery</a>
        </div>
        <div className='flex flex-col items-start ml-40 mt-10'>
            <h1 className='font-bold mb-4 '>About US</h1>
            <a href="#">Contact US</a>
            <a href="#">Lorem Ipsum</a>
        </div>
    </div>
    <h1 className='flex items-center justify-center bg-black text-white'>&copy;2020 UIDesign</h1>
</div>
</div>
</>    
  )
}

export default Footer
