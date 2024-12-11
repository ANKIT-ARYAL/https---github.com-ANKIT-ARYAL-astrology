import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import wed from '../../assets/wed.mp4';
import john from '../../assets/john.png';
import jane from '../../assets/jane.png';
import shane from '../../assets/shane.png';
import ada from '../../assets/ada.png';
import shine from '../../assets/shine.png';
const Body = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1 ,
        slidesToScroll: 1 ,
        autoplay: true,
        autoplaySpeed: 2000,
    };
  
    return (
<>
    <Slider className="slider" {...settings}>
        <div className="relative">
            <img 
            className="w-full p-1  h-[500px] object-cover"
            src="https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/Marriage.jpg" 
            alt="stocks"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Semi-transparent overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">We make your special day</h2>
            <h1 className="text-5xl font-extrabold mb-6">MEMORABLE</h1>
            <div className="flex gap-4 justify-center">
                <button className="border py-2 px-4 border-white bg-transparent text-white hover:bg-white hover:text-black">
                Portfolio
                </button>
                <button className="border py-2 px-4 border-white bg-red-300 text-white hover:bg-red-400">                
                Get Started
                </button>
            </div>
            </div>
        </div>
        <div className="relative">
            <img 
            className="w-full p-1  h-[500px] object-cover"
            src="https://www.altitudehimalaya.com/media/files/Category/Destination-Wedding-in-Nepal.jpeg" 
            alt="stocks"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Semi-transparent overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">We make your special day</h2>
            <h1 className="text-5xl font-extrabold mb-6">MEMORABLE</h1>
            <div className="flex gap-4 justify-center">
                <button className="border py-2 px-4 border-white bg-transparent text-white hover:bg-white hover:text-black">
                Portfolio
                </button>
                <button className="border py-2 px-4 border-white bg-red-300 text-white hover:bg-red-400">                
                Get Started
                </button>
            </div>
            </div>
        </div>
        <div className="relative">
            <img 
            className="w-full p-1  h-[500px] object-cover"
            src="https://www.holidify.com/images/cmsuploads/compressed/10042838573_aa6fc7e02d_o_20190627111137.png" 
            alt="stocks"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Semi-transparent overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">We make your special day</h2>
            <h1 className="text-5xl font-extrabold mb-6">MEMORABLE</h1>
            <div className="flex gap-4 justify-center">
                <button className="border py-2 px-4 border-white bg-transparent text-white hover:bg-white hover:text-black">
                Portfolio
                </button>
                <button className="border py-2 px-4 border-white bg-red-300 text-white hover:bg-red-400">                
                Get Started
                </button>
            </div>
            </div>
        </div>
</Slider>

            

    <section className="p-24 text-center text-gray-700 ">
        <p >
            Its is a long established fact that a reader will be distracted by the readbale content of a page when looking at <br></br>it's layout. The point of using Lorem Ipsum is that it has more-or-less normal distribution of letters,
            </p>
    </section>
    <section >
        <div className='relative'>
        <img src="https://media.istockphoto.com/id/513439341/photo/portrait-of-enthusiastic-business-people-in-circle.jpg?s=612x612&w=0&k=20&c=oxwsq8WGFT0ixmSojntYBEZqifne4P7DlqOWbXCqWUk="
   alt="Background image" class="w-full p-1  h-96 object-cover" />

        <div className="absolute inset-0 bg-blue-900 bg-opacity-80">
        <div className='flex flex-col  justify-center items-center'>
         <h1 className="text-xl text-center text-white p-6 ">
          Our Services
          <p className='border-white border-t mt-2 w-28 rounded-full border-2'></p>
        </h1>
        </div>
        <div className=" border-t-2 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3 mx-auto">
            <div className="flex flex-col items-center mt-10">
                 <img 
                     src='https://png.pngtree.com/png-vector/20210814/ourmid/pngtree-black-and-white-wedding-ring-transparent-background-png-image_3797242.jpg'
                    className="w-32 h-28 mb-4" 
                     alt="Wedding Services"
                        />
                    <a href="#" className="text-center text-white">Wedding Services</a>
                     <p className='text-white mt-2 text-sm '>
                        There are many variations of pass <br></br>
                        of Lorem  Ipsum available, but the <br></br>
                        majority have suffered alteration <br></br>
                        in some form. 
                     </p>
                    </div>
                    <div className="flex flex-col items-center mt-10">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilXnCDlid3o8ZyKiFa9vE0X5VbbAywdWsjw&s" 
                            className="w-32 h-28 mb-4 " 
                            alt="Food & Catering"
                        />
                        
                        <a href="#" className="text-center text-white">
                            Food and Catering
                        </a>
                        <p className='text-white mt-2 text-sm '>
                            Contrary to popular belief, Lorem <br></br>
                            Ipsum is not simply random text. It <br></br>
                            has roots in a piece of classical <br></br>
                            Latin literature  from 45 BC.
                        </p>
                    </div>
                    <div className="flex flex-col items-center mt-10">
                        <img 
                            src="https://previews.123rf.com/images/fokaspokas/fokaspokas1805/fokaspokas180500233/101169083-simple-calendar-icon-on-transparent-background.jpg" 
                            className="w-32 h-28 mb-4" 
                            alt="Event Managemnt"
                        />
                        <a href="#" className="text-center text-white">
                            Event Management
                        </a>
                        <p className='text-white mt-2 text-sm '>
                            It is a long established fact that a <br></br>
                            reader will be distracted by the <br></br>
                            readbale content.
                        </p>
                    </div>
                    <div className="flex flex-col items-center mt-10">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqJKGOOSCWV1etvy4vdeXOh2KTyPJbDrRSw&s" 
                            className="w-32 h-28 mb-4" 
                            alt="photography"
                        />
                        <a href="#" className="text-center text-white">
                            Photography
                        </a>
                        <p className='text-white mt-2 text-sm '>
                            Lorem ipsum dolor sit amet,<br></br>
                            consectetur adipsicing elit, sed do <br></br>
                            eiusmod tempor incididunt ut <br></br>
                            labore et magna aliqua.
                        </p>
                    </div>
                </div>
                </div>
                </div>
        </section>
        <section>
            <div className='relative '>
            <img src="https://media.istockphoto.com/id/513439341/photo/portrait-of-enthusiastic-business-people-in-circle.jpg?s=612x612&w=0&k=20&c=oxwsq8WGFT0ixmSojntYBEZqifne4P7DlqOWbXCqWUk="
   alt="Background image" class="w-full p-1  h-64 object-cover" />

        <div className="absolute inset-0 bg-blue-900 bg-opacity-80">
        <div className="flex flex-col items-center justify-center mb-20 ml-20 mr-20  bg-white w-[1280px]">
            <div className="flex justify-end w-full p-1  items-center px-10 py-5 ">
                
                 <a href="#" 
                    className="mr-96 text-3xl font-semibold bg-gradient-to-r from-blue-400 via-pink-500 to-red-500 text-transparent bg-clip-text items-center justify-center">
                    Image Gallery
                </a>
                    <button className="px-4 py-2 text-red-500 font-medium rounded-md border border-red-500 hover:bg-red-500 hover:text-white transition-all">
                    View All
                    </button>
                </div>
          
            <div className='grid grid-cols-3 mt-5 p'>
                <div className='grid grid-cols-3 border w-64 p-4 mx-auto'>
                <div className='flex'> 
                    <img className='w-16 h-16'
                    src='https://lovelyweddingskc.com/wp-content/uploads/sites/27677/2020/07/Wildcliff-Outdoor-Wedding-Venue-KC-768x1024.jpg'
                    alt= ''
                    />
        
                </div>
                <div className='flex'> 
                    <img className='w-16 h-16'
                    src='https://www.theknot.com/tk-media/images/f4b9e7f6-d195-47d9-99c1-279ca9c2fee7'
                    alt= ''
                    />
                </div>
                <div className='flex'> 
                    <img className='w-16 h-16'
                    src='https://images.shaadisaga.com/shaadisaga_production/photos/pictures/001/019/064/new_medium/taj_palace_delhi.JPG?1565096201'
                    alt= ''
                    />
                </div>
                <div className='flex'> 
                    <img className='w-16 h-16'
                    src='https://media-api.xogrp.com/images/a5ab8a8f-071d-49b8-a9d0-46e22c1a9ab3~rs_768.h'
                    alt= ''
                    />
                </div>
                <div className='flex'> 
                    <img className='w-16 h-16'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDqGeL0oIGqiBDxcvF9Diiypf7UrQOtZinA&s'
                    alt= ''
                    />
                </div>
                <div className='flex'> 
                    <img className='w-16 h-16'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyW0JEnblqFvHGvWhBSoqqBmnH0gHLIfY7aQ&s'
                    alt= ''
                    />
                </div>
                <div className='flex'> 
                    <img className='w-16 h-16'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYcW2FMXLGFmwZDIrD82EEjjjWgGLWKRcLg&s'
                    alt= ''
                    />
                </div>
                <div className='flex'> 
                    <img className='w-16 h-16'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDh_8I3PIgQXGzFWOuewZap3huHot9luU0w&s'
                    alt= ''
                    />
                </div>
                <div className='flex'> 
                    <img className='w-16 h-16'
                    src='https://media.istockphoto.com/id/497039777/photo/wedding-setting.jpg?s=612x612&w=0&k=20&c=uHwz_57iBRVXrUPacCiLTuTPYyZS1az9GA0sCDeMP5U='
                    alt= ''
                    />
                </div>
                <div className='flex'> 
                    <img className='w-16 h-16'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvl8eUp1siqm-4JNKdNo6mnwiNNXZPUXQetA&s'
                    alt= ''
                    />
                </div>
                <div className='flex'> 
                    <img className='w-16 h-16'
                    src='https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481512.jpg?semt=ais_hybrid'
                    alt= ''
                    />
                </div>
                <div className='flex'> 
                    <img className='w-16 h-16'
                    src='https://tessajunephotography.com/wp-content/uploads/2023/03/059_WeddingatThePaseovenueinApacheJunction2CArizonaonly45minutesfromPhoenix.jpg'
                    alt= ''
                    />
                </div>
                </div>
            <div className='col-span-2'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjMhpMqPewF8hTWXxXe0DZNvjJQZahS50iA&s'
                alt=''
                className='w-[600px] h-auto ' />
            </div>
            </div>
            </div>
            </div>
         </div>   
        </section>
            <div className="flex flex-col items-center justify-center mt-80 p-5 mb-20 mx-auto bg-white w-[1280px]">
            <div className="flex justify-end w-full p-1  items-center px-10 py-5 ">
                <a href="#"
                className="mr-96 text-3xl font-semibold bg-gradient-to-r from-blue-400 via-pink-500 to-red-500 text-transparent bg-clip-text items-center justify-center"
                >
                Video Gallery
                </a>
                <button className="px-4 py-2 text-red-500 font-medium rounded-md border border-red-500 hover:bg-red-500 hover:text-white transition-all">
                View All
                </button>
            </div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  
  <div className="flex flex-col items-center justify-center space-y-4">
    <img
      src="https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
      className="w-[200px] h-auto object-cover"
      alt="Wedding 1"
    />
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR15iLV3LRiCUYFbKV_UYEOLhiOr4ZFnNJSHg&s"
      className="w-[200px] h-auto object-cover"
      alt="Wedding 2"
    />
    <img
      src="https://amatya.co.uk/wp-content/uploads/2023/11/Kathmandu-Wedding-Photographer-0083-1080x675.webp"
      className="w-[200px] h-auto object-cover"
      alt="Wedding 3"
    />
    <img
      src="https://www.bankrate.com/2021/09/24141024/Average-wedding-costs-how-to-save-money.jpg?auto=webp&optimize=high&crop=16:9"
      className="w-[200px] h-auto object-cover "
      alt="Wedding 4"
    />
  </div>

  <div className="flex justify-center items-center">
    <video className="w-full h-auto" controls>
      <source src={wed} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>
</div>
    <section>
        <div className='border-white'>
    <div className='relative '>
        <img src="https://media.istockphoto.com/id/513439341/photo/portrait-of-enthusiastic-business-people-in-circle.jpg?s=612x612&w=0&k=20&c=oxwsq8WGFT0ixmSojntYBEZqifne4P7DlqOWbXCqWUk="
        alt="Background image" class="w-full p-1  h-96 object-cover object-bottom" />

        <div className="absolute bottom-0 inset-0 bg-blue-900 bg-opacity-80 ">     
        <div className="flex flex-col items-center justify-center mt-20 mb-20 ml-20 mr-20 bg-white w-[1280px]">
               <div className="flex justify-end w-full p-1  items-center px-10 py-5 ">
                <a href ="#"
                className="mr-96 text-3xl font-semibold bg-gradient-to-r from-blue-400 via-pink-500 to-red-500 text-transparent bg-clip-text items-center justify-center"
                >
                Our Packages
                </a>
                <button className="px-4 py-2 text-red-500 font-medium rounded-md border border-red-500 hover:bg-red-500 hover:text-white transition-all">
                View All
                </button>
            </div>
            <p>
                It is a long established fact that the reader will be distracted by the readbale content of a page when looking at its layout. the point of
            </p>
            <p>
                using Lorem ipsum is that it has a more-or lessnormal distribution of letters.
            </p>
         
            <div className='grid grid-cols-3 p-4  justify-center w-[1200px] ml-20 '>
            <div className='border w-fit rounded-md shadow-md p-7 h-[500px] bg-white'>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <h1 className='text-red-600 text-3xl'> 
                        Rs 5,000
                    </h1>
                <button className='text-red-600 bg-red-200 rounded-xl text-sm mt-2 px-2'>Package Demo</button>
        
                    <span className='mt-24 p-3'>Lorem ipsum dolor sit amet</span>
                    <span className='p-3'>Lorem ipsum dolor</span>
                    <span className='mb-10 p-3'>Lorem ipsum dolor</span>
                    <button className='w-full p-1  border rounded-xl text-gray-400'>GET STARTED</button>
                </div>
                </div>
                <div className='border w-fit rounded-md shadow-md p-7  bg-gradient-to-b from-green-400 via-pink-500 to-red-500'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-red-600 text-3xl'> 
                            Rs 10,000
                        </h1>
                    <button className='text-red-500 bg-red-200 rounded-xl text-sm mt-2 px-2'>Package Demo</button>
                    <span className='mt-10 p-3'>Lorem ipsum dolor sit amet</span>
                    <span className='p-3'>Lorem ipsum dolor</span>
                    <span className='p-3'>Lorem ipsum dolor</span>
                    <span className='p-3'>Lorem ipsum dolor</span>
                    <span className='mb-6 p-3'>Lorem ipsum dolor</span>
                    <button className='w-full p-1  border rounded-xl text-gray-400'>GET STARTED</button>
                </div>
                </div>
                <div className='border w-fit rounded-md shadow-md p-7 h-[500px] bg-white'>
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <h1 className='text-red-600 text-3xl'> 
                            Rs 5,000
                        </h1>
                    <button className='text-red-600 bg-red-200 rounded-xl text-sm mt-2 px-2'>Package Demo</button>
                    <span className='mt-24 p-3'>Lorem ipsum dolor sit amet</span>
                    <span className='p-3'>Lorem ipsum dolor</span>
                    <span className='mb-10 p-3'>Lorem ipsum dolor</span>
                    <button className='w-full p-1  border rounded-xl text-gray-400'>GET STARTED</button>
                </div>
                </div>
                </div>
                </div>
            </div>
            </div>
            </div>
        </section>
<section>
<div className='relative mt-96'>
        <img src="https://media.istockphoto.com/id/513439341/photo/portrait-of-enthusiastic-business-people-in-circle.jpg?s=612x612&w=0&k=20&c=oxwsq8WGFT0ixmSojntYBEZqifne4P7DlqOWbXCqWUk="
   alt="Background image" class="w-full p-1  h-96 object-cover" />

        <div className="absolute inset-0 bg-blue-900 bg-opacity-80">
        <div className='grid grid-cols-2'>
            <div className=' bg-red-400 w-[600px]  p-6 h-96 clip-slanted-right'>
                <div className='flex flex-col justify-center items-center mt-10'>
                    <h1 className=' text-white  py-2'>Client's Feedback</h1>
                    <p className='border-white border-t mb-10 w-16 rounded-full border-2'></p>
                    <p className='mt-4 text-sm text-white text-center'>
                        "It is a long established fact that a reader will be<br></br>
                        distrabcted by the readable content of a page when<br></br>
                        looking at it's layout."
                    </p>
                    <p className='mt-4 text-lg text-white'>
                        JOHN DOE -
                    </p>
                    <div className='flex p-4 justify-evenly'>
                    <img src={john}
                    className='w-16 h-16 rounded-full p-1  opacity-40' />
                    <img src={jane}
                    className='w-16 h-16 rounded-full p-1 opacity-40' />
                    <img src={shane}
                    className='w-16 h-16 rounded-full p-1 ' />
                    <img src={ada}
                    className='w-16 h-16 rounded-full p-1 opacity-40' />
                    <img src={shine}
                    className='w-16 h-16 rounded-full p-1 opacity-40' />
                </div>
               </div> 
            </div>
            <div className='flex flex-col items-center justify-center'>
                 <h1 className='text-white text-3xl'>
                    Subscribe to Our
                 </h1>
                 <h1 className='text-red-300 text-3xl'>Newsletter</h1>

                 <p className='mt-10 text-white'>
                No spam message from us, only give you latest offer<br></br>
                which is best for you and your business
            </p>
            <input type='text' className='bg-white text-white w-96 mt-10 py-3'></input>
            <button className='p-3 text-white'>Subscribe Now</button>
            </div>
        </div>
        </div>
        </div>
    </section>
    <section>
    <div className="flex justify-center items-center p-4 ">
                 <a href ="#" 
                    className="text-3xl font-semibold bg-gradient-to-r from-blue-400 via-pink-500 to-red-500 text-transparent bg-clip-text items-center justify-center">
                    Our Teams
                </a>
    </div>   
    <div className='grid grid-cols-5 ml-20'>
            <div className='flex-col'>
                <img className='w-32 h-auto' 
                src={john}
                alt='' />
                <p className='text-sm'>
                    John Doe
                </p>
                <p className='text-xs'>Event Manager</p>
            </div>
            <div className='flex-col p-2'>
                <img className='w-32 h-auto mt-7' 
                src={jane}
                alt='' />
                <p className='text-sm'>
                    Jane Doe
                </p>
                <p className='text-xs'>Architect and interior designer</p>
            </div>
            <div className='flex-col p-2'>
                <img className='w-32 h-auto' 
                src={shane}
                alt='' />
                <p className='text-sm'>
                    Shane Matthews
                </p>
                <p className='text-xs'>Video/Photography</p>
            </div><div className='flex-col p-2'>
                <img className='w-32 h-auto mt-7' 
                src={ada}
                alt='' />
                <p className='text-sm'>
                    Ada Smith
                </p>
                <p className='text-xs'>Flowerist</p>
            </div><div className='flex-col p-2'>
                <img className='w-32 h-auto' 
                src={shine}
                alt='' />
                <p className='text-sm'>
                   Shine Matthews
                </p>
                <p className='text-xs'>Video/Photography</p>
            </div>
        </div>
    </section>
    <section>
    <div className="flex justify-center items-center p-4 mt-10 ">
                 <a href="#" 
                    className="text-3xl font-semibold bg-gradient-to-r from-blue-400 via-pink-500 to-red-500 text-transparent bg-clip-text items-center justify-center">
                    Recent Blog
                </a>
    </div>   
<div className='grid grid-cols-3 p-3 ml-16'>
    <div className="border w-fit shadow-lg flex items-center flex-col ">
        <div className="relative">
        {/* First Image */}
        <img 
        src="https://www.bankrate.com/2021/09/24141024/Average-wedding-costs-how-to-save-money.jpg?auto=webp&optimize=high&crop=16:9" 
        alt="" 
        className="w-96 h-auto" 
        />
        {/* Second Image */}
        <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjIyBNWfRA5mpfJHHFQiNRN5tu2b-O0_t7Q&s" 
        alt="" 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full p-1  border-4 border-white w-20 h-20" 
        />
        <p className='flex justify-end'>2020, DEC 19 </p>
    </div>
    <p className='mt-10'>LOREM IPUM DOLOR</p>
    <p className='mb-5'>SIT AMET LOOR</p>
    <p className='text-sm'>
        It is a long established fact that a reader will be
        distracted <br></br>
        by the readable content of a page when
        looking at it's<br></br> 
        layout.The point of using lorem ,it is a long established <br></br>
        </p>
        <p className='text-gray-400 text-sm'><br></br>fact that a reader will be
        distracted by the readable <br></br>
        content of a page when
        looking at it's layout.The point <br></br>
        of using lorem.
    </p>
    <button className='text-gray-500 border flex justify-center items-center p-2 mb-3'>Learn More</button>
    </div>
    <div className="border w-fit shadow-lg flex items-center flex-col">
        <div className="relative">
        {/* First Image */}
        <img 
        src="https://media.istockphoto.com/id/1526986072/photo/airplane-flying-over-tropical-sea-at-sunset.jpg?s=612x612&w=0&k=20&c=Ccvg3BqlqsWTT0Mt0CvHlbwCuRjPAIWaCLMKSl3PCks=" 
        alt="" 
        className="w-96 h-auto" 
        />
        {/* Second Image */}
        <img 
        src="https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.jpg?s=612x612&w=0&k=20&c=_bb2PdPJMtY9KmNNBSFY6w_TOcC98we45LvsYoa48p8=" 
        alt="" 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full p-1  border-4 border-white w-20 h-20" 
        />
        <p className='flex justify-end'>2020, DEC 19 </p>
    </div>
    <p className='mt-10'>LOREM IPUM DOLOR</p>
    <p className='mb-5'>SIT AMET LOOR</p>
    <p className='text-sm'>
        It is a long established fact that a reader will be
        distracted <br></br>
        by the readable content of a page when
        looking at it's<br></br> 
        layout.The point of using lorem ,it is a long established <br></br>
        </p>
        <p className='text-gray-400 text-sm'><br></br>fact that a reader will be
        distracted by the readable <br></br>
        content of a page when
        looking at it's layout.The point <br></br>
        of using lorem.
    </p>
    <button className='text-gray-500 border flex justify-center items-center p-2 mb-3'>Learn More</button>
    </div>
    <div className="border w-fit shadow-lg flex items-center flex-col">
        <div className="relative">
        {/* First Image */}
        <img 
        src="https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg" 
        alt="" 
        className="w-96 h-auto" 
        />
        {/* Second Image */}
        <img 
        src="https://media.istockphoto.com/id/1124826836/photo/newlyweds-on-the-beach-at-sunset.jpg?s=612x612&w=0&k=20&c=uxB3llYeczLczznWDt-mJdxlo483NV0FNV0N48Y1E48=" 
        alt="" 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full p-1  border-4 border-white w-20 h-20" 
        />
        <p className='flex justify-end'>2020, DEC 19 </p>
    </div>
    <p className='mt-10'>LOREM IPUM DOLOR</p>
    <p className='mb-5'>SIT AMET LOOR</p>
    <p className='text-sm'>
        It is a long established fact that a reader will be
        distracted <br></br>
        by the readable content of a page when
        looking at it's<br></br> 
        layout.The point of using lorem ,it is a long established <br></br>
        </p>
        <p className='text-gray-400 text-sm'><br></br>fact that a reader will be
        distracted by the readable <br></br>
        content of a page when
        looking at it's layout.The point <br></br>
        of using lorem.
    </p>
    <button className='text-gray-500 border flex justify-center items-center p-2 mb-3'>Learn More</button>
    </div>
 </div>   
 </section>
<section>
    <div className='mt-28 flex flex-col items-center'>
        <h1 className='text-red-500 text-3xl'>
            Have a Question About Our Company And Events Setups
        </h1>
        <p className='mt-5'>
            Let us take care of it! We are willing to give some advice and
        </p>
        <p>
            support whatever you need.
        </p>
        <button className='mt-5 border w-64 p-2 border-gray-900 mb-10'>CONTACT US</button>
    </div>
</section>
</>
    );
}

export default Body;
