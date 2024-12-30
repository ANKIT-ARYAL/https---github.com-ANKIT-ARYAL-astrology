import React from 'react'
import Slider from 'react-slick'
import ImageSlider from './ImageSlider';

const Home = () => {
   
    
  return (
    <>
    <div className='div-screen'>
      <div className='w-[100%] flex space-x-20 ml-10'>
        <ImageSlider />
        <div className='flex flex-col'>
        <img
        src='https://m.media-amazon.com/images/I/91hyHj0i1KL._AC_UF1000,1000_QL80_.jpg'
        alt='image1'
        className='rounded-lg h-64 object-cover border-2 p-2'
        />
        <div className='flex space-x-10 mt-2 '>
        <p className='heading'>Daily</p>
        <p className='heading'>Weekly</p>
        </div>
        <div className='grid grid-cols-4 p-2 h-48'>
            <div className='border-daily '>
                <img src='https://sundayguardianlive.com/wp-content/uploads/2022/12/Page-19-lead.jpg' 
                className='image-daily'
                />
                <p className='txt'>SUN</p>
                
            </div>
            <div className='border-daily'>
            <img src='https://media-cdn.socastsrm.com/wordpress/wp-content/blogs.dir/2732/files/2024/09/616524668.jpg' 
                className='image-daily'
                />
                <p className='txt'>MON</p>
            </div>
            <div className='border-daily'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokWbDjrFDfWw7xSUQR6uj2CyunVPiAZqUkg&s' 
                className='image-daily'
                />
                <p className='txt'>DEC</p>
            </div>
            <div className='border-daily'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcm852Y3EinBpsQNp0IIZWGwyTIPcynVB0dA&s' 
                className='image-daily'
                />
                <p className='txt'>JAN</p>
            </div>
        </div>
        </div>
      </div>
      <div className='w-[40%]'>
        <h1 className='heading'>Daily/Weekly - Horoscope</h1>
        <div className='grid grid-cols-6  items-center'>
        <div className='horoscope'>
            <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4AKJF95aa_fOSKRLWOJ1BpQo6z3z-jUqp6w&s'
            alt='aquarius'
            className='rounded-lg p-2'
            />
            <p>Aquarius</p>
        </div>
        <div className='horoscope '>
            <img 
            src='https://cdn.shopify.com/s/files/1/0519/7573/files/Zodiac_Symbols_Purple-02.png?v=1490207656'
            alt='taurus'
            className='rounded-lg p-2'
            />
            <p>Taurus</p>
        </div>
        <div className='horoscope'>
            <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv5UF81BxjSPR0oDgdeei0O6KNd_JZChEqrg&s'
            alt='aries'
            className='rounded-lg p-2'
            />
            <p>Aries</p>
        </div>
        <div className='horoscope'>
            <img 
            src='https://png.pngtree.com/png-clipart/20230922/original/pngtree-gemini-zodiac-sign-astronomy-vector-woman-vector-png-image_12726446.png'
            alt='gemini'
            className='rounded-lg p-2'
            />
            <p>Gemini</p>
        </div>
        <div className='horoscope'>
            <img 
            src='https://m.media-amazon.com/images/I/41KCpAO9HNS.jpg'
            alt='cancer'
            className='rounded-lg p-2'
            />
            <p>Cancer</p>
        </div>
        <div className='horoscope'>
            <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKUl7NpcFfCiAsjqldhWv65284Of7GNipyw&s'
            alt='leo'
            className='rounded-lg p-2'
            />
            <p>Leo</p>
        </div>
        
        <div className='horoscope'>
            <img 
            src='https://cdn.shopify.com/s/files/1/0519/7573/files/Zodiac_Symbols_Purple-06.png?v=1490212097'
            alt='virgo'
            className='rounded-lg p-2'
            />
            <p>Virgo</p>
        </div>
        <div className='horoscope'>
            <img 
            src='https://png.pngtree.com/png-clipart/20230922/original/pngtree-libra-zodiac-sign-art-design-zodiac-vector-png-image_12726206.png'
            alt='libra'
            className='rounded-lg p-2'
            />
            <p>Libra</p>
        </div>
        <div className='horoscope'>
            <img 
            src='https://cdn.shopify.com/s/files/1/0519/7573/files/Zodiac_Symbols_Purple-08.png?v=1490214922'
            alt='scorpio'
            className='rounded-lg p-2'
            />
            <p>Scorpio</p>
        </div>
        <div className='horoscope'>
            <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENMR7TiIHDk9HFLrndoyJiMmoOo3fZiW3Hg&s'
            alt='Sagittarius'
            className='rounded-lg p-2'
            />
            <p>Sagittarius</p>
        </div>
        <div className='horoscope'>
            <img 
            src='https://cdn.shopify.com/s/files/1/0519/7573/files/Zodiac_Symbols_Purple-10.png?v=1490217337'
            alt='capricorn'
            className='rounded-lg p-2'
            />
            <p>Capricorn</p>
        </div>
        <div className='horoscope'>
            <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3XZwy5_ua9BhCOjSv9-4xIGL252SN2tspQ&s'
            alt='pisces'
            className='rounded-lg p-2'
            />
            <p>Pisces</p>
        </div>
      </div>
      <div className='flex justify-around p-2 mt-5'>
        <button className='horoscope-btns bg-yellow-100 nav-btn'>Daily</button>
        <button className='horoscope-btns bg-blue-900 text-white hover:scale-110'>Weekly</button>
      </div>
      <p className='mt-10 text-blue-900 font-serif'>
      Bṛhat Parāśara Horāśāstra: A 71-chapter work that is a foundation of classical Indian astrology. The first part of the book dates to the 7th to early 8th centuries, while the second part is from the later 8th century.
      </p>
      </div>
    </div>
    <div className='flex'>
    <div className='section'>
    <div className='flex-col'>
    <p className='heading p-2'>
        Today
    </p>
    <img src='https://cdn.britannica.com/45/104045-050-116C1F93/Signs-of-the-Zodiac-astrology.jpg'
    className='horoscopic-pic' 
    />
    <p className='section-text'>
    Horoscope Today: Check today's horoscope, gemini horoscope, pisces horoscope, cancer horoscope, virgo horoscope, aries horoscope, libra horoscope, 
    </p>
    </div>
  </div>
  <div className='section'>
    <div className='flex-col'>
    <p className='heading p-2'>
        Weekly
    </p>
    <img src='https://thumbs.dreamstime.com/b/esoteric-illustration-circle-zodiac-signs-graphic-representation-digital-art-mystical-338846865.jpg'
    className='horoscopic-pic' 
    />
    <p className='section-text'>
    Horoscope Weekly: Check week's horoscope, gemini horoscope, pisces horoscope, cancer horoscope, virgo horoscope, aries horoscope, libra horoscope, 
    </p>
    </div>
  </div>
  <div className='section'>
    <div className='flex-col'>
    <p className='heading p-2'>
        Yearly
    </p>
    <img src='https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/910ac774-a784-4e07-be93-4dd85ee6896a/4447b3cd-5d02-4e36-99a3-efaefb758ba9.png'
    className='horoscopic-pic' 
    />
    <p className='section-text'>
    Horoscope Yearly: Check year's horoscope, gemini horoscope, pisces horoscope, cancer horoscope, virgo horoscope, aries horoscope, libra horoscope, 
    </p>
    </div>
  </div>
  </div>
  </>
  )
}

export default Home
