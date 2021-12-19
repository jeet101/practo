import "./DebitCard.css";
import crdcard from "../img/crdcard.png";
import Check_box from "../img/Check_box.png";
export const DebitCard = () => {
  return (
    <div className="DebitCard-container">
      <img src={crdcard} />
      <div className="DebitCard-text">
        <img src={Check_box} />
        <p>Remember this card (Your CVV won’t be saved)</p>
      </div>
      <button>Pay</button>
    </div>
  );
};
