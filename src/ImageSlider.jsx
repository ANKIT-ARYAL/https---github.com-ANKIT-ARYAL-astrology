import React from 'react'
import Slider from 'react-slick'
const ImageSlider = () => {
     const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
          };
  return (
    <div className='slider-container w-[70%] h-[500px]'>
            <Slider {...settings}>
                <div>
        <img
        src='https://static.toiimg.com/thumb/msid-116440113,width-1280,height-720,resizemode-4/116440113.jpg'
        alt=''
        className='rounded-lg w-full h-[500px] object-fit'
        />
        </div>
        <div>
        <img
        src='https://static.toiimg.com/thumb/msid-109920643,width-1280,height-720,resizemode-4/109920643.jpg'
        alt=''
        className='rounded-lg w-full h-[500px] object-fit'
        />
        </div>
        <div>
        <img
        src='https://static.toiimg.com/thumb/msid-111386957,width-1070,height-580,imgsize-82778,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg'
        alt=''
        className='rounded-lg w-full h-[500px] object-fit'
        />
        </div>
        <div>
        <img
        src='https://www.prokerala.com/astrology/assets/img/header/yearly-horoscope/yearly-horoscope.jpg'
        alt=''
        className='rounded-lg w-full h-[500px] object-fit'
        />
        </div>
        </Slider>
        </div>
  )
}

export default ImageSlider
