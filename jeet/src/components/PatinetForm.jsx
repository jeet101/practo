import "./PatinetForm.css";
import Check_box from "../img/Check_box.png";
import whatAPP from "../img/whatAPP.png";
export const PatinetForm = () => {
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
        <input type="text" placeholder="Enter your full name" />
        <br />
        <label>Mobile*</label>
        <br />
        <input
          type="text"
          placeholder="Enter your full name"
          value="8777271248"
        />
        <br />
        <label>Email Address</label>
        <br />
        <input type="text" placeholder="Enter your email address (Optional)" />
      </div>
      <div className="whatsAppChackBox">
        <img src={Check_box} />
        <img src={whatAPP} />
        <p>Get updates on Whatsapp number +91 {8777271248}</p>
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
    </div>
  );
};