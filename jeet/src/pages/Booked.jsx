import { Navbar2 } from "../components/Navbar2";
import "./Booked.css";
import Footer2x from "../img/Footer2x.png";
import { Appointment } from "../components/Appointment";
import Confirmation from "../img/Confirmation.png";
import Primebenefitscard from "../img/Primebenefitscard.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export const Booked = () => {
  const{name,number} =useContext(AuthContext);
  return (
    <div className="booked-j">
      <Navbar2 />
      <div className="booked-main-j">
        <div className="login-left">
          <Appointment />
        </div>
        <div className="booked-right-j">
          <div className="booked-1st-j">
            <img src={Confirmation} />

            <h3>Appointment Confirmed</h3>
          </div>
          <div className="booked-2nd-j">
            <p>Your appointment ID is 34584201</p>
            <p>We have sent you and email and SMS with the details.</p>
            <p>This appointment is covered under Prime</p>
          </div>

          <img src={Primebenefitscard} />
          <div className="pacintDe-jb">
            <p>Patient Name</p>
            <h6>{name}</h6>
            <p>Email</p>
            <h6>test@gmail.com</h6>
            <p>Mobile</p>
            <h6>{number}</h6>
          </div>
          <div className="booked-last-jb">
            <button>Cancel appointment</button>
            <button>Reschedule</button>
          </div>
        </div>
      </div>
      <img src={Footer2x} />
    </div>
  );
};
