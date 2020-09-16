import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header id="header" className="navbar">
        {/*className= alt*/}
        <h1 id="logo">
          Bali <span>by Bali Resort</span>
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
