import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>First Aid NZ</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
