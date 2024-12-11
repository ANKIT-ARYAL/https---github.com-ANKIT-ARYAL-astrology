
import React from "react";
import Navbar from "./components/NavBar/Navbar.jsx";
import Body from "./components/Body/Body.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer.jsx";
function App(){
  return (
  <>
      <Navbar />
      <Body />      
      <Footer />
  </>
  );
}
export default App