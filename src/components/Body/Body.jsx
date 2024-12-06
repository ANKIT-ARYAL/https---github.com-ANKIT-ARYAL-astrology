import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const Body = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
  
    return (
        <>
            <Slider className="slider" {...settings}>
                <div>
                    <img 
                        className="w-full h-96 object-cover"
                        src="https://media.licdn.com/dms/image/v2/D4D12AQFO1VK8dS-Jtw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698555187798?e=2147483647&v=beta&t=MVepL7hdh0QYisMO0luGB_sH5taPYOrOVEKEJ8TVXN4" 
                        alt="stocks"
                    />
                </div>
                <div>
                    <img 
                        className="w-full h-96 object-cover"
                        src="https://cms.linch.com.np/uploads/blog/66f15-untitled-1-01.png" 
                        alt="stocks"
                    />
                </div>
                <div>
                    <img 
                        className="w-full h-96 object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9ifROZA_6mLAEv7y3F94ff-9vh6vfnoxVQ&s" 
                        alt="stocks"
                    />
                </div>
            </Slider>

            <section className="p-24 text-center">
                <p className="text-lg">
                    We Are SANI Securities<br />
                    SANI Securities Company Ltd. is one of the leading brokerage firms for stock trading in Nepal for more than a decade. The company received the license from the market regulator, Security Board of Nepal (SEBON), and is a member of Nepal Stock Exchange Ltd. (NEPSE).
                    <br /><br />
                    With roughly 15% of the total market volume, we are consistently growing and pushing ourselves without compromising on service quality. We believe in customer satisfaction and our aim is to achieve high standards of business with our clients by upgrading services in line with market trends.
                </p>
                <img 
                    src="https://www.analyticssteps.com/backend/media/thumbnail/8517708/4201790_1646043215_What%20are%20StocksArtboard%201%20(1).jpg" 
                    className="w-full h-96 object-cover mt-10" 
                    alt="stock"
                />
            </section>

            <section className="border-t-2 border-black w-full">
                <h1 className="text-4xl mt-10 text-center">Our Services</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8 mx-auto">
                    <div className="flex flex-col items-center border-r-2">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX46vHOdMPovXB9l3qvc1Oy48WcjRbG3oGnw&s" 
                            className="w-32 h-28 mb-4" 
                            alt="Stock Broker Services"
                        />
                        <a href="#" className="text-center">Stock Broker Services</a>
                    </div>
                    <div className="flex flex-col items-center border-r-2">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg12L5XB7Da82YQUtHx5YXRMGgbLE7g-xMoQ&s" 
                            className="w-32 h-28 mb-4" 
                            alt="Portfolio Management"
                        />
                        <a href="#" className="text-center">Portfolio Management</a>
                    </div>
                    <div className="flex flex-col items-center border-r-2">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/11135/11135173.png" 
                            className="w-32 h-28 mb-4" 
                            alt="Private Equity"
                        />
                        <a href="#" className="text-center">Private Equity</a>
                    </div>
                    <div className="flex flex-col items-center border-r-2">
                        <img 
                            src="https://img.freepik.com/premium-vector/investment-research-flat-vector-icon_9206-236.jpg" 
                            className="w-32 h-28 mb-4" 
                            alt="Investing Research & Consulting"
                        />
                        <a href="#" className="text-center">Investing Research & Consulting</a>
                    </div>
                    <div className="flex flex-col items-center border-r-2">
                        <img 
                            src="https://play-lh.googleusercontent.com/aLoQIWnCiqOAmMTzqIbqg6Ylio-E_WGw2Ld4bYeRyf7nTeyYcf9F6hHimvCak4-d0vzO=w240-h480-rw" 
                            className="w-32 h-28 mb-4" 
                            alt="Facilitate in Listing with NEPSE"
                        />
                        <a href="#" className="text-center">Facilitate in Listing with NEPSE</a>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-20 mb-20">
                    <div className="w-full sm:w-96 h-96">
                        <img 
                            src="https://c02.purpledshub.com/uploads/sites/41/2023/11/countries-in-the-world.jpg" 
                            className="w-full h-full object-cover"
                            alt="World"
                        />
                    </div>
                    <div className="ml-10">
                        <h1 className="text-2xl font-bold">Available Worldwide</h1>
                        <p className="mt-11 text-justify max-w-lg">
                            With the new update in the regulation from NEPSE, stocks can now be accessed worldwide with its powerful online system, opening doors to global investors. We are committed to offering easy access to Nepalese investment opportunities from any corner of the world, with an ever-expanding range of products and services.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="bg-blue-500 h-48 w-full mt-10">
                <div className="grid grid-cols-3 h-full items-center">
                    <div className="flex flex-col items-center">
                        <img 
                            src="https://cdn.vectorstock.com/i/500p/62/22/handshake-circle-symbol-logo-design-vector-21246222.jpg" 
                            className="w-32 p-2" 
                            alt="logo" 
                        />
                        <p className="text-white text-center uppercase">Broker No.1</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl text-white">Quick Links</h1>
                        <Link to="/contact"><button className="mt-3 text-white hover:text-gray-300 underline">Location</button></Link>
                        <Link to="/contact"><button className="mt-3  text-white hover:text-gray-300 underline">Contact Us</button></Link>
                        <Link to='/signup' className='mt-3 text-white underline hover:text-gray-300'>Join Us</Link>
                        <Link to="/"><button className="mt-3  text-white hover:text-gray-300 underline">Home</button></Link>
                    </div>
                    <div className="text-white text-right">
                        <h4>&copy; Stock Broker, 2024</h4>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Body;
