import "./DrInfo.css";
import Arrow from "../assets/pathArrow.png";
import Dr_image from "../assets/dr-image.png";
import verified from "../assets/verified.png";
import thumbs_up from "../assets/thumbs-up.png";
import camera from "../assets/video.png";
import l_arrow from "../assets/l-arrow.png";
import r_arrow from "../assets/r-arrow.png";
import bottomRev from "../assets/bottom-rev.png";
import { Footer } from "../../components/Footer.jsx";
import { Navigation_bar } from "../../../components/Navigation_bar";
import SearchBar from "../../../components/SearchBar";
import { useHistory } from "react-router-dom";
export const DrInfo = () => {
  const history = useHistory();
  return (
    <div>
      <Navigation_bar />
      <SearchBar />
      <div className="pr-main">
        <div className="pr-container">
          <div className="pr-path">
            <ul>
              <li>Home</li>
              <li>
                <img src={Arrow} alt="" />
              </li>
              <li>Bangalore</li>
              <li>
                <img src={Arrow} alt="" />
              </li>
              <li>Dermatologist</li>
              <li>
                <img src={Arrow} alt="" />
              </li>
              <li>JP Nagar</li>
              <li>
                <img src={Arrow} alt="" />
              </li>
              <li>Dr. Sheelvanthi Natraj.</li>
            </ul>
          </div>
          <div className="pr-first-row">
            <div className="pr-dr-card">
              <div className="pr-dr-img">
                <img src={Dr_image} alt="" />
              </div>
              <div className="pr-dr-info">
                <div className="pr-dr-title">
                  <h3>
                    Dr. Sheelavathi Natraj <span> Profile is claimed</span>
                  </h3>
                  <p>MBBS, DDVL</p>
                  <p>Dermatologist, Cosmetologist</p>
                  <p>17 Years Experience Overall (7 years as a specialist)</p>
                  <div className="pr-verified">
                    <img src={verified} alt="" />
                    <span>Medical Registration Verified</span>
                    <div className="pr-verified">
                      <img src={thumbs_up} alt="" />
                      <span className="pr-green">94%</span>
                      <span>(1197 votes)</span>
                      <p>
                        Dr, Sheelavathi carries an experience of a decade in the
                        field of cosmetology. Doctor also specializes in
                        treating hair treatments, skin treatments and STD.
                        more..
                      </p>
                    </div>
                  </div>
                </div>
                <p className="pr-blue">Share your Story</p>
              </div>
            </div>
            <div className="pr-video-consult">
              <div className="pr-video-1row">
                <div className="pr-video-price">
                  <div>
                    <img src={camera} alt="" />
                  </div>
                  <div>
                    <h6>VIDEO CONSULTATION</h6>
                  </div>
                  <div>
                    <h4>Rs 600</h4>
                  </div>
                </div>
              </div>
              <div className="pr-video-1row">
                <div className="pr-video-price">
                  <div>
                    <img src={l_arrow} alt="" />
                  </div>
                  <div>
                    <p>30th Nov to 5th Dec</p>
                    <p>No Slots available</p>
                  </div>
                  <div>
                    <p>Mon, 6 Dec</p>
                    <p className="pr-No-slot">20 slots available</p>
                  </div>
                  <div>
                    <p>Mon, 7 Dec</p>
                    <p className="pr-No-slot">20 Slots available</p>
                  </div>
                  <div>
                    <img src={r_arrow} alt="" />
                  </div>
                </div>
              </div>
              <div className="pr-slot-jb">
                <div className="pr-slot-img">
                  <img src={Dr_image} alt="" />
                </div>
                <div className="pr-blue-text">Slots Available</div>
                <div className="pr-book-btn">
                  <button
                    onClick={() => {
                      history.push("/Login");
                    }}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
            <div className="pr-bottom">
              <img src={bottomRev} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
