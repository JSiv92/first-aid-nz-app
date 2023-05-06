import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../fanzLogo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="brandContainer">
          <img src={logo} className="logo" alt="logo" />
          <NavLink to="/" className="site-title">
            <h1>First Aid NZ</h1>
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="/products" className="navlink">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navlink">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/learn" className="navlink">
              Learn
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="navlink">
              Our Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navlink">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
