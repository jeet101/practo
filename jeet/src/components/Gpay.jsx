import "./Gpay.css";

import gpay from "../img/gpay.png";
import { useHistory } from "react-router-dom";

export const Gpay = () => {
  const history = useHistory();
  return (
    <div className="DebitCard-container-g">
      <img src={gpay} />
      <div className="DebitCard-text-g">
        <input placeholder="Google Pay UPI ID" type="text" />
        <label>@</label>
        <input placeholder="bankname" type="text" />
      </div>
      <button
        onClick={() => {
          history.push("/Booked");
        }}
      >
        Pay
      </button>
    </div>
  );
};
