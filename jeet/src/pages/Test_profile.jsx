import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

export const Test_profile = () => {
  const { newData, id } = useContext(AuthContext);
  const history = useHistory();
  return (
    <div>
      <h1>{id}</h1>
      <p>{newData[0].name}</p>
      <button
        onClick={() => {
          history.push("/Login");
        }}
      >
        Book an appointment
      </button>
    </div>
  );
};
