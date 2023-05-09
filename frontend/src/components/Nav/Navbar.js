import logo from "../../assets/fanzLogo.png";

import React, { useState } from "react";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <img src={logo} className="logo" alt="logo" />
        <NavLink to="/" className="site-title">
          <h1>First&nbsp;Aid&nbsp;NZ</h1>
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <i className="fas fa-caret-down" />
            </NavLink>
            {dropdown && <Dropdown />}
          </li>

          <li className="nav-item">
            <NavLink
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Shop
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/learn"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Learn
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Login
            </NavLink>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
