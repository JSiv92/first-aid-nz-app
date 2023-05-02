import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>First Aid NZ</h1>
        </Link>
        <Link to="/products">Shop</Link>
        <Link to="/about">About Us</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/services">Our Services</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </header>
  );
};

export default Navbar;
