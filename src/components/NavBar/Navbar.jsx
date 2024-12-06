import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-blue-700 p-4">
      {/* Logo and Navigation */}
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img
            className="h-16 w-16 mr-2"
            src="https://cdn.vectorstock.com/i/500p/62/22/handshake-circle-symbol-logo-design-vector-21246222.jpg"
            alt="Broker Logo"
          />
          <p className="text-white font-bold uppercase">Broker No.1</p>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <Link
            to="/"
            className="text-white text-lg tracking-wide hover:text-blue-300 transition"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg tracking-wide hover:text-blue-300 transition"
          >
            Contact Us
          </Link>
          <Link
            to="/login"
            className="text-white text-lg tracking-wide hover:text-blue-300 transition"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="text-white text-lg tracking-wide hover:text-blue-300 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
