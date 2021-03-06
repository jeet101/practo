import "./PatinetForm.css";
import Check_box from "../img/Check_box.png";
import whatAPP from "../img/whatAPP.png";
import pacText from "../img/pacText.png";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

export const PatinetForm = () => {
  const [name, setName] = useState("");
  const { handelName ,number } = useContext(AuthContext);
  const history = useHistory();
  console.log("name" + name);
  return (
    <div className="Patient-form-main">
      <h3>Patient Details</h3>
      <div className="radio-group">
        <input type="radio" value="Myself" label="Myself" />
        <label for="Myself">Myself</label>
      </div>
      <div className="radio-group2">
        <input type="radio" value="Someone else" label="Someone else" />
        <label for="Someone else">Someone else</label>
      </div>
      <h5>Please provide following information about patient</h5>
      <div className="form-data">
        <label>Full Name*</label>
        <br />
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Mobile*</label>
        <br />
        <input
          type="text"
          placeholder="Enter your full name"
          value={number}
        />
        <br />
        <label>Email Address</label>
        <br />
        <input type="text" placeholder="Enter your email address (Optional)" />
      </div>
      <div className="whatsAppChackBox">
        <img src={Check_box} />
        <img src={whatAPP} />
        <p>Get updates on Whatsapp number +91 {number}</p>
      </div>
      <h5>Choose a payment option to book appointment</h5>
      <div className="radio-payment1">
        <input type="radio" value="₹600" label="₹600" />
        <div>
          {" "}
          <h6>₹600</h6>
          <p>Pay online</p>
        </div>
      </div>
      <div className="radio-payment1">
        <input type="radio" value="Someone else" label="Someone else" />
        <div>
          {" "}
          <h6>₹600</h6>
          <p>Pay later at clinic</p>
        </div>
      </div>
      <button
        onClick={() => {
          handelName(name);
          history.push("/Payment");
        }}
      >
        Confirm
      </button>
      <p>
        1. Free cancelling and rescheduling are available 2 hours before the
        appointment time.
      </p>
      <p>
        2. After the stipulated time, recheduling will not be available and a
        fee of ₹50 will be applicable for cancellation or no sjow
      </p>
      <p>3. Updates will be sent to +91 {number}</p>
      <img src={pacText} />
      <h5>Safe and secure payments</h5>
    </div>
  );
};
