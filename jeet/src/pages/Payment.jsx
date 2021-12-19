import "./Payment.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navbar2 } from "../components/Navbar2";
// import { PaymentButton } from '../components/PaymentButton';

// import '../components/PaymentButton.css'
import React from "react";
import { DebitCard } from "../components/DebitCard";
import { Gpay } from "../components/Gpay";
// import ReactDOM from "react-dom";
// import "./styles.css";

const res = [
  { name: "Debit / Credit Card" },
  { name: "Paytm Wallet" },
  { name: "UPI" },
  { name: "Google Pay" },
  { name: "Amazon Pay" },
  { name: "PhonePe / BHIM UPI" },
  { name: "Net Banking" },
  { name: "Pay Later" },
  { name: "Others" },
];
var logox = true

const Button = ({ message }) => {
  const [condition, setCondition] = React.useState(0);
  const { name ,handelPayOption,payOption} = useContext(AuthContext);
  const handelCondition =(k,data)=>{
    setCondition(k);
    handelPayOption()
  }

  return res.map((data, k) => (
    <button
      key={k}
      className={`button ${condition === k ? "toggled" : ""}`}
      onClick={() => handelCondition(k,data)
      }
    >
      {data.name}
    </button>
  ));
};

export const Payment = () => {
  const { name,payOption } = useContext(AuthContext);
  console.log(logox);
  return (
    <div className="payment-main-jb">
      <Navbar2 />
      <div className="paymant_card">
        <div className="payment-options-flex1">
          <div className="payment-options-left">
            <h4>Payment Options</h4>
          </div>
          <div className="payment-options-right">
            Amout to pay: <h4>₹600</h4>
          </div>
        </div>
        <div className="payment-options-2nd">
          <div className="payment-options-list">
            <Button />
          </div>
          <div className="payment-options-logo">
           {payOption?<DebitCard/>:<Gpay/>}
          </div>
        </div>
      </div>
    </div>
  );
};
