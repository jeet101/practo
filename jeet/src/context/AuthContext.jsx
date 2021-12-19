import { createContext } from "react";
import { useState } from "react";
import { Dr_data } from "../data/Dr_data";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [id, setId] = useState("");
  const [number, setNumber] = useState();
  const [newData, setNewData] = useState();
  const [name, setName] = useState("");
  const [otpStatus, setOtpStatus] = useState(false);
  const [otp, setOTP] = useState();
  const[payOption,setPayOption] = useState(true)
  const handelName = (n) => {
    setName(n);
  };
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
  const handelPayOption = ()=>{
setPayOption(!payOption);
  }
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
        handelName,
        name,
        payOption,
        handelPayOption,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
