import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Body from "./components/Body/Body";
import Contact from "./components/Body/Contact";
import Login from "./components/Body/Login";
import Signup from "./components/Body/Signup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App(){
  return (
  <>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router>

  </>
  );
}
export default App