import logo from "../img/logo.png";
import vector from "../img/Vector.png";
import "./Navbar2.css";
import { Link } from "react-router-dom";
import profileIcon from "../img/profileIcon.png";
import VectorDownArrow from "../img/VectorDownArrow.png";
export const Navbar2 = () => {
  return (
    <>
      <div className="main2">
        <div className="lift">
          <img src={logo} className="logo-img" />
        </div>

        <div className="right-nav2">
          <img src={profileIcon} />
          <img className="VectorDownArrow" src={VectorDownArrow} />
        </div>
      </div>
    </>
  );
};
