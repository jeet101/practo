import "./Result.css";
import { Dr_data } from "../data/Dr_data";
import FAQ_card from "../img/FAQ_card.png";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Likes from "../data/Dr_imgs/Likes.png";
export const Result = () => {
  const history = useHistory();
  const {handelClick} = useContext(AuthContext);
  return (
    <div>
      <div className="contaner_result">
        <div className="left">
          <div className="text">
            <h3>406 doctors available in Bangalore </h3>
            <p>
              Book appointments with minimum wait-time & verified doctor details
            </p>
          </div>
          <div className="list">
            {Dr_data.map((data) => (
              <div  key={data.id}>
                {" "}
                <div className="list-card">
                  <div className="img-div">
                    <img src={data.img} />
                  </div>
                  <div className="info-div">
                    <h4>{data.name}</h4>
                    <p>{data.deperment}</p>
                    <h6>{data.exprence} years experience overall </h6>
                    <div className="location-flex">
                      <h5>{data.location}</h5>
                      <p>{data.Clinics}</p>
                    </div>
                    <p>{data.fee} Consultation fee at clinic </p>
                    <div className="reating-btn">
                      <button><img src={Likes}/>{data.rateing}</button>
                      <h5>{data.stories} Patient Stories </h5>
                    </div>
                  </div>
                  <div className="booking-div">
                    <div>
                      <p>Available Tomorrow</p>
                    </div>

                    <button
                      className="booking-button"
                      onClick={() => {
                        handelClick(data.id)
                        history.push("/Profile");
                      }}
                    >
                      Book Appointment No Booking Fee
                    </button>

                    <button className="video-button">Video Consult</button>
                  </div>
                </div>
                <span></span>
              </div>
            ))}
          </div>
          <div>
            <img src={FAQ_card} />
          </div>
        </div>
        <div className="right">
          <div className="top_text">
            <h4>Provide current location to see dermatologist near you</h4>
            <p>You are seeing results from Bengaluru. See results near you</p>
          </div>
          <div className="mid-btn-grid">
            <button>JP Nagar</button>
            <button>Indiranagar</button>
            <button>Hsr Layout</button>
            <button>Whitefield</button>
            <button>Vijaynagar</button>
          </div>
          <div className="Bottom-location-btn">
            <button className="btn-1">Search Location</button>
            <button className="btn-2">Current Location</button>
          </div>
        </div>
      </div>
    </div>
  );
};
