import "./Otp.css";
import Vectorpencil from "../img/Vectorpencil.png";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

export const Otp = () => {
  const history = useHistory();
  const { otpStatus, otp } = useContext(AuthContext);

  return (
    <div className="Otp-main">
      <h6>We have sent an OTP on</h6>
      <div className="number-icon">
        <h5>+91 1234567890</h5>
        <img src={Vectorpencil} />
      </div>
      <p>OTP</p>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "47ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          autoFocus
          id="standard-basic"
          label="Please enter the 6 digit OTP here to verify"
          value={otp}
        />
      </Box>
      <div className="resendOTP">
        <div>
          <p>Still not received OTP?</p>
          <h6>Get via call</h6>
        </div>
        <h6>Resend OTP</h6>
      </div>
      <button
        onClick={() => {
          history.push("/PatientDetails");
        }}
      >
        Continue to booking
      </button>
    </div>
  );
};
