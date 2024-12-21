import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './About'
import Footer from './Footer'
import Login from './Login'
import Horoscope from './Horoscope'
import Blog from './Blog'
import Contact from './Contact'
import Signup from './Signup'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
   <Route path='/' element={<Home /> } />
   <Route path='/about' element={<About/> } />
   <Route path='/login' element={<Login /> } />
   <Route path='/horoscope' element={<Horoscope /> } />
   <Route path='/blog' element={<Blog /> } />
   <Route path='/contact' element={<Contact /> } />
   <Route path='/signup' element={<Signup /> } />
   </Routes>
   <Footer />
   </Router>
    </>
  )
}

export default App
