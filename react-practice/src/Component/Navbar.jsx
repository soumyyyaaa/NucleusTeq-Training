import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <header>
        <div class="inner-wrap">
          <div class="brand">
            <h1>NucleusTeq</h1>
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contactus">Contact</Link>
          </nav>
          
        </div>
      </header>
    </>
  );
}

export default Navbar;