import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <header id="header" className={navbar ? "navbar d" : "navbar"}>
        {/*className= alt*/}
        <h1 id="logo">
          <a href="#">
            Bali <span>by Bali Resort</span>
          </a>
        </h1>

        <nav id="nav">
          <ul>
            <li className="current">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="current">
              <Link to={"/Rooms"}>Rooms</Link>
            </li>

            <li>
              <Link to={"/Reservations"} className="button primary">
                Reservations
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
