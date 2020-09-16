import React, { useEffect, useState } from "react";
import "./styles.css";

import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as ResortDate from "../data/Bali.json";
import img from "../assets/images/map.jpg";
import { Link } from "react-router-dom";
import "../assets/css/main.css";

let phone = "320";
let tablet = "900";
let bigScreen = "2600";
let bigLaptop = "1400";
let laptop = "1000";
function useWindowSize() {
  const [width, setWidth] = useState(calculateWidth());
  useEffect(() => {
    function updateSize() {
      setWidth(calculateWidth());
    }

    window.addEventListener("resize", updateSize);

    return () => {
      console.log();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  function calculateWidth() {
    if (window.innerWidth < bigScreen && window.innerWidth > bigLaptop) {
      return "20vw";
    } else if (window.innerWidth < bigLaptop && window.innerWidth > laptop) {
      return "67vw";
    } else if (window.innerWidth < laptop && window.innerWidth > phone) {
      return "10vw";
    } else {
      return "300vw";
    }
  }
  return width;
}

//For map API location Bali
export function Map() {
  const width = useWindowSize();
  const [viewport, setViewport] = useState({
    latitude: -8.340539,
    longitude: 115.091949,
    width: width,
    height: "100vh",
    zoom: 10,
  });

  const [selectedResort, setSelectedResort] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedResort(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
  return (
    <div>
      <div className="map-container">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken="pk.eyJ1Ijoic3RvcGpvc2hrIiwiYSI6ImNrZHBudjkxZDIzZmMyc3Jvb3l6cHp3NnoifQ.aq0U3skvAjqJ7ZS-HloO-w"
          mapStyle="mapbox://styles/stopjoshk/ckdpotpyf0eqg1io81pyz6oek"
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          {ResortDate.features.map((Resort) => (
            <Marker
              key={Resort.properties.Resort_ID}
              latitude={Resort.geometry.coordinates[1]}
              longitude={Resort.geometry.coordinates[0]}
            >
              <label type="button">
                <span
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedResort(Resort);
                  }}
                  style={{
                    padding: "0",
                    border: "none",
                    background: "none",
                    width: "2vw",
                    outline: "none",
                  }}
                >
                  <img
                    src={img}
                    style={{ height: 20, width: 20 }}
                    alt="Marker-icon"
                  />
                </span>
              </label>
            </Marker>
          ))}

          {selectedResort ? (
            <Popup
              latitude={selectedResort.geometry.coordinates[1]}
              longitude={selectedResort.geometry.coordinates[0]}
              onClose={() => {
                setSelectedResort(null);
              }}
            >
              <div>
                <h2>{selectedResort.properties.NAME}</h2>
                <p>{selectedResort.properties.DESCRIPTIO}</p>
                <br />
                <p>{selectedResort.properties.FACILITY}</p>
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <section id="banner">
        <div className="inner">
          <header>
            <h2>Bali Resort</h2>
          </header>
          <p>
            Enjoy your holiday at bali with <strong>Bali Resort</strong>
            <br />
            The 5 star Experience
            <br />
          </p>
          <footer>
            <ul className="buttons stacked">
              <li>
                <a href="#our-location" className="button fit scrolly">
                  Our Locations
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </section>

      <article id="main">
        <header className="special container">
          <span className="icon solid fas fa-globe-asia"></span>
          <h2>
            <strong>Award-winning Bali Resort and Spa</strong>, BALI is a
            world–class destination resort located on 90 hectares of cliff-top
            land perched above Jimbaran Bay, just 10 kilometres from Bali
            airport.
          </h2>
          <p>
            Bali’s majestic sunsets and ocean-front views are complemented by a
            white-sand beach and shared facilities as Bali’s only integrated
            resort. With <strong>full access</strong> to all dining and
            recreation at both AYANA and RIMBA and complimentary resort shuttle,
            guests enjoy the most extensive on-site facilities of any resort in
            Bali. There are 19 restaurants and bars including the iconic Rock
            Bar; exclusive private beach and beach club; 12 swimming pools;
            world-class spa with Hydrotherapy Seawater Pool and Spa on the Rocks
            treatment villas; golf-putting and fitness center; and complimentary
            WiFi.
            <br />
          </p>
        </header>
        <section className="wrapper style3 container special">
          <header className="major" id="our-location">
            <h2>Our locations</h2>
          </header>

          <div className="row">
            <div className="map-container">{Map()}</div>
          </div>

          <footer className="major">
            <ul className="buttons">
              <li>
                <Link to={"/Reservations"} className="button">
                  Make a reservation
                </Link>
              </li>
            </ul>
          </footer>
        </section>
        <section className="wrapper style2 container special-alt">
          <div className="row gtr-50">
            <div className="col-8 col-12-narrower" id="rooms">
              <header>
                <h2>Our Rooms and Services</h2>
              </header>
              <p>
                Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                eget arcu comteger ut fermentum lorem. Lorem ipsum dolor sit
                amet. Sed tristique purus vitae volutpat ultrices. eu elit eget
                commodo. Sed tristique purus vitae volutpat ultrices. Aliquam eu
                elit eget arcu commodo.
              </p>
              <footer>
                <ul className="buttons">
                  <li>
                    <Link className="button" to={"/Rooms"}>
                      Find Out More
                    </Link>
                  </li>
                </ul>
              </footer>
            </div>
            <div className="col-4 col-12-narrower imp-narrower"></div>
          </div>
        </section>

        <section className="wrapper style1 container special">
          <div className="row">
            <div className="col-4 col-12-narrower">
              <section>
                <span className="icon solid featured fas fa-award"></span>
                <header>
                  <h3>World-Class</h3>
                </header>
                <p>
                  Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                  eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper
                  elit, et sagittis turpis. Integer ut fermentum.
                </p>
              </section>
            </div>
            <div className="col-4 col-12-narrower">
              <section>
                <span className="icon solid featured fas fa-wifi"></span>
                <header>
                  <h3>Free Wifi </h3>
                </header>
                <p>
                  Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                  eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper
                  elit, et sagittis turpis. Integer ut fermentum.
                </p>
              </section>
            </div>
            <div className="col-4 col-12-narrower">
              <section>
                <span className="icon solid featured fa-map-marker-alt"></span>
                <header>
                  <h3>Best Locations</h3>
                </header>
                <p>
                  Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                  eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper
                  elit, et sagittis turpis. Integer ut fermentum.
                </p>
              </section>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

export default Layout;
