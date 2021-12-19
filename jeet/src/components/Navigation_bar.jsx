import logo from "../img/logo.png";
import vector from "../img/Vector.png";
import "./Navigation_bar.css";
import { Link } from "react-router-dom";
export const Navigation_bar = () => {
  return (
    <>
      <div className="main">
        <div className="lift">
          <Link to="/">
           
            <img src={logo} className="logo-img" />
          </Link>
        </div>
        <div className="mid">
          <div>
            <Link to="/Find Dr">
              {" "}
              <h5>Find Doctors</h5>
            </Link>

            <p>Book an appointment</p>
          </div>
          <div>
            <h5>Video Consult</h5>
            <p>Consult top doctors</p>
          </div>
          <div>
            <h5>Medicines</h5>
            <p>Practo pharmacy</p>
          </div>
          <div>
            <h5>Lab Tests</h5>
            <p>Book tests & checkup</p>
          </div>
          <div>
            <h5>Surgeries</h5>
            <p>Expert surgical care</p>
          </div>
          <div id="providers">
            <p>
              For Providers <img src={vector} />
            </p>
          </div>
          <div>
            <p>
            Security & Help <img src={vector} />
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
