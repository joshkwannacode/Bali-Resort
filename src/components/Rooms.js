import React from "react";
import single from "../assets/images/room-imgs/single.webp";
import doubles from "../assets/images/room-imgs/doubles.webp";
import king from "../assets/images/room-imgs/king.webp";
import party from "../assets/images/room-imgs/party.webp";
function Rooms() {
  return (
    <div className="rooms">
      <section className="wrapper style4 container">
        <div id="center">
          <h2 className="room-title"> Rooms </h2>

          <div className="rooms-detail">
            <img src={single} alt="single bed" className="rooms-img" />
            <p className="rooms-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              impedit corporis quod molestias magnam, odit hic deserunt, illo
              est eveniet maxime, itaque reiciendis quasi facilis explicabo
              dolore? Omnis, provident molestias!
            </p>
          </div>
          <h3 className="rooms-name">Single Bed</h3>
          <div className="rooms-detail">
            <img src={doubles} alt="Double bed" className="rooms-img" />
            <p className="rooms-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              impedit corporis quod molestias magnam, odit hic deserunt, illo
              est eveniet maxime, itaque reiciendis quasi facilis explicabo
              dolore? Omnis, provident molestias!
            </p>
          </div>
          <h3 className="rooms-name">Double Bed</h3>
          <div className="rooms-detail">
            <img src={king} alt="Special Suite" className="rooms-img" />
            <p className="rooms-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              impedit corporis quod molestias magnam, odit hic deserunt, illo
              est eveniet maxime, itaque reiciendis quasi facilis explicabo
              dolore? Omnis, provident molestias!
            </p>
          </div>
          <h3 className="rooms-name">Special Suite</h3>
          <div className="rooms-detail">
            <img src={party} alt="Penthouse" className="rooms-img" />
            <p className="rooms-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              impedit corporis quod molestias magnam, odit hic deserunt, illo
              est eveniet maxime, itaque reiciendis quasi facilis explicabo
              dolore? Omnis, provident molestias!
            </p>
          </div>
          <h3 className="rooms-name">Penthouse</h3>
        </div>
      </section>
    </div>
  );
}

export default Rooms;
