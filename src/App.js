import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Rooms from "./components/Rooms";
import SubmitPage from "./components/SubmitPage";
import "./assets/css/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reservations from "./components/Reservations";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route exact path="/Rooms" component={Rooms} />
          <Route exact path="/Reservations" component={Reservations} />
          <Route exact path="/SubmitPage" component={SubmitPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
