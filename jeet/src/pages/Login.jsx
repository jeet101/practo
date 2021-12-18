import { Appointment } from "../components/Appointment";
import { Navigation_bar } from "../components/Navigation_bar";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Otp } from "../components/Otp";
export const Login = () => {
  const [text, setText] = useState();
  const handelChangeText = ({ target }) => {
    setText(target.value);
  };
  const { number, handelAuthNumber, otpStatus } = useContext(AuthContext);
  console.log(number);

  return (
    <>
      <Navigation_bar />
      <div style={{ backgroundColor: "#EFEFEF", height: 620 }}>
        {" "}
        <div className="login-container">
          <div className="login-left">
            <Appointment />
          </div>
          {otpStatus ? (
            <Otp/>
          ) : (
            <div className="login-right">
              <h3>Enter your mobile number</h3>
              <p>Mobile *</p>
              <input
                placeholder="Enter mobile number"
                onChange={handelChangeText}
                value={text}
              />
              <p>You will receive OTP shortly.</p>
              <p>
                We will send appointment related communications on this number.
              </p>
              <button
                onClick={() => {
                  handelAuthNumber(text);
                }}
              >
                Continue
              </button>
            </div>
          )}
        </div>
        <h5 className="h5-login">Go back to my results</h5>
      </div>
    </>
  );
};
