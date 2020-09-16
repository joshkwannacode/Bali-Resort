import React, { useState, useEffect, useRef } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as ResortDate from "../data/Bali.json";
import img from "../assets/images/map.jpg";
import { Link } from "react-router-dom";
import "../assets/css/main.css";
import mapboxgl from "mapbox-gl";

//For map API location Bali
mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RvcGpvc2hrIiwiYSI6ImNrZHBudjkxZDIzZmMyc3Jvb3l6cHp3NnoifQ.aq0U3skvAjqJ7ZS-HloO-w";
export function Map() {
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/stopjoshk/ckdpotpyf0eqg1io81pyz6oek",
      center: [115.091949, -8.340539],
      zoom: 10,
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
    ResortDate.features.forEach(function (marker) {
      // create a HTML element for each feature
      var el = document.createElement("div");
      el.className = "marker";

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              "<h3>" +
                marker.properties.NAME +
                "</h3><p>" +
                marker.properties.DESCRIPTIO +
                "</p>" +
                "<p>" +
                marker.properties.FACILITY +
                "</p>"
            )
        )
        .addTo(map);
    });
    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <div className="map-container" ref={mapContainerRef} />;
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
