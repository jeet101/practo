import logo from "../img/logo.png";
import vector from "../img/Vector.png";
import "./Navigation_bar.css";
import { Link } from "react-router-dom";
export const Navigation_bar = () => {
  return (
    <>
      <div className="main">
        <div className="lift">
          <img src={logo} className="logo-img" />
        </div>
        <div className="mid">
          <div>
            <Link to="/Find Dr"> <h5>Find Doctors</h5></Link>
           
            <p>Book an appointment</p>
          </div>
          <div>
            <h5>Find Doctors</h5>
            <p>Book an appointment</p>
          </div>
          <div>
            <h5>Find Doctors</h5>
            <p>Book an appointment</p>
          </div>
          <div>
            <h5>Find Doctors</h5>
            <p>Book an appointment</p>
          </div>
          <div>
            <h5>Find Doctors</h5>
            <p>Book an appointment</p>
          </div>
          <div id="providers">
            <p>
              For Providers <img src={vector} />
            </p>
          </div>
          <div>
            <p>
              For Providers <img src={vector} />
            </p>
          </div>
        </div>
        <div className="right-nav">
          <button className="btn-login">Login/Signup</button>
        </div>
      </div>
    </>
  );
};
