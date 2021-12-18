import "./Appointment.css";
import clinic_icon from "../img/clinic icon.png";
import Vectordata from "../img/Vectordata.png";
import Vectortime from "../img/Vectortime.png";
import sapphire_skin from "../img/sapphire-skin.png";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export const Appointment = () => {
  const { newData } = useContext(AuthContext);
  return (
    <>
      <div className="Appointment-main">
        <div className="Appointment-1st">
          <img src={clinic_icon} />
          <h4>In-clinic Appointment</h4>
        </div>
        <div className="Appointment-2nd">
          <div className="Appointment-date">
            <div className="Appointment-flex-date">
              <img src={Vectordata} />
              <div style={{ display: "flex" ,paddingTop: 3 }}>
                On <h5 >Dec 01, 2021</h5>
              </div>
            </div>
            <h6>Change date & time</h6>
          </div>
          <div className="time-flex-jb">
            <img src={Vectortime} />
            <h5>At 11:40 AM</h5>
          </div>
        </div>
        <div className="Appointment-3nd">
          <div>
            <img src={newData[0].img} />
          </div>
          <div style={{paddingTop:5}}>
            <h5>Dr. Sheelavathi Nataraj</h5>
            <p>MBBS, DDVL</p>
            <p>Dermatologist, Cosmetologist</p>
          </div>
        </div>
        <div className="Appointment-4">
          <div >
            <img src={sapphire_skin} />
          </div>
          <div style={{paddingTop:5,paddingLeft:9}}>
            <h5>Sapphire Skin & Aesthetics Clinic </h5>
            <p>
              718, Hansa Plaza, 1st Floor, 24th Main Road, J P Nagar 6th phase,
              Bangalore - 560078, Bangalore
            </p>
            <h6>Get directions</h6>
          </div>
        </div>
      </div>
    </>
  );
};
