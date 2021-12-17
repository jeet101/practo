import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import carosol1 from "../img/carosol1.png";
import "./Home_carosol.css";

class Home_carosol extends Component {
  state = {
    items: [
      { id: 1, title: "item #1" },
      { id: 2, title: "item #2" },
      { id: 3, title: "item #3" },
      { id: 4, title: "item #4" },
      { id: 5, title: "item #5" },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <div className="main-container">
        <Carousel
          style={{ width: "91%", margin: "auto",display: "flex",justifyContent: "center"}}
          focusOnSelect={true}
          itemsToShow={4}
        >
          <div >
            <img src={carosol1} />
            <h4>Gynacologist/Obstetrician</h4>
            <p>
              Get guidance on eating right, weight management and sports
              nutrition
            </p>
          </div>
          <div>
            {" "}
            <img src={carosol1} />
            <h4>Gynacologist/Obstetrician</h4>
            <p>
              Get guidance on eating right, weight management and sports
              nutrition
            </p>
          </div>
          <div>
            {" "}
            <img src={carosol1} />
            <h4>Gynacologist/Obstetrician</h4>
            <p>
              Get guidance on eating right, weight management and sports
              nutrition
            </p>
          </div>
          <div>
            {" "}
            <img src={carosol1} />
            <h4>Gynacologist/Obstetrician</h4>
            <p>
              Get guidance on eating right, weight management and sports
              nutrition
            </p>
          </div>
          <div>
            {" "}
            <img src={carosol1} />
            <h4>Gynacologist/Obstetrician</h4>
            <p>
              Get guidance on eating right, weight management and sports
              nutrition
            </p>
          </div>
          <div>
            {" "}
            <img src={carosol1} />
            <h4>Gynacologist/Obstetrician</h4>
            <p>
              Get guidance on eating right, weight management and sports
              nutrition
            </p>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default Home_carosol;
