import React from "react";
import { useHistory } from "react-router-dom";

function Reservations() {
  let history = useHistory();

  function handleClick() {
    history.push("/SubmitPage");
  }
  return (
    <div className="reservations">
      <section className="wrapper style4 container">
        <div id="center">
          <p>
            <strong>Dear Customers,</strong> <br />
            Due to COVID19 we are not sure when we are able to operate. But if
            you fill in the form bellow we will send you an email as soon as as
            we can operate and try to cater to your requirments!
          </p>
          <form>
            <label className="formTitle">Name:</label>

            <input type="text" />
            <br />
            <label className="formTitle">Email:</label>

            <input type="text" />
            <br />
            <label className="formTitle">Branch:</label>

            <select className="resortBranch" name="resortBranch">
              <option value="" disabled selected>
                Choose a Branch:
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <br />
            <br />
            <label className="formTitle">Rooms:</label>
            <br />

            <input
              type="checkbox"
              className="room1"
              name="room1"
              value="SingleBed"
            />
            <label for="room1"> Single Bed</label>

            <input
              type="checkbox"
              className="room2"
              name="room2"
              value="Double Bed"
              style={{ marginLeft: "3vw" }}
            />
            <label for="room2"> Double Bed</label>

            <input
              type="checkbox"
              className="room3"
              name="room3"
              value="Special Suite"
              style={{ marginLeft: "3vw" }}
            />
            <label for="room3"> Special Suite</label>

            <input
              type="checkbox"
              className="room4"
              name="room4"
              value="Penthouse"
              style={{ marginLeft: "3vw" }}
            />
            <label for="room4"> Penthouse</label>
            <br />
            <br />
            <label className="formTitle">Other Requirments:</label>

            <input type="text" />
            <input
              type="submit"
              value="Submit"
              href="submitPage"
              onClick={handleClick}
              style={{
                marginTop: "8vh",
                marginLeft: "23vw",
              }}
            />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Reservations;
