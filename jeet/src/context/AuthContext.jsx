import { createContext } from "react";
import { useState } from "react";
import { Dr_data } from "../data/Dr_data";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [id, setId] = useState("");
  const [number, setNumber] = useState();
  const [newData, setNewData] = useState();
  const [otpStatus, setOtpStatus] = useState(false);
  const [otp, setOTP] = useState();
  const handelAuthNumber = (no) => {
    if (no.length === 10) {
      setNumber(no);
      setOtpStatus(true);
      setTimeout(() => {
        setOTP(Math.floor(Math.random() * 1000000 + 1));
      }, 2000);
    }

    // setNumber(no);
  };
  const handelClick = (e) => {
    setId(e);
    console.log(id);
    setNewData(Dr_data.filter((data) => data.id == e));
  };
  return (
    <AuthContext.Provider
      value={{
        id,
        handelClick,
        newData,
        number,
        handelAuthNumber,
        otpStatus,
        otp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
