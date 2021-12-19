import "./ConsultCards.css";
import irregularpainfulperiod1 from "../img/irregular-painful+period1.png";
import Acne1 from "../img/Acne1.png";
import aa2 from "../img/aa2.png";
import coughing1 from "../img/coughing1.png";
import Vectoraa3 from "../img/Vectoraa3.png";
import asdd5 from "../img/asdd5.png";

export const ConsultCards = () => {
  return (
    <div className="ConsultCard-main">
      <div className="ConsultCard-top">
        <div>
          <h3>Consult top doctors online for any health concern</h3>
          <p>
            Private online consultations with verified doctors in all
            specialists
          </p>
        </div>
        <div>
          <button>View all specialities</button>
        </div>
      </div>
      <div className="ConsultCard-bottom">
        <div>
          <img src={irregularpainfulperiod1} />
          <h5>Period doubts or Pregnancy</h5>
          <p>CONSULT NOW</p>
        </div>
        <div>
          {" "}
          <img src={Acne1} />
          <h5>Acne, pimple or skin issues</h5>
          <p>CONSULT NOW</p>
        </div>
        <div>
          {" "}
          <img src={asdd5} />
          <h5>Performance issues in bed</h5>
          <p>CONSULT NOW</p>
        </div>
        <div>
          {" "}
          <img src={coughing1} />
          <h5>Cold, cough or fever</h5>
          <p>CONSULT NOW</p>
        </div>
        <div>
          {" "}
          <img src={coughing1} />
          <h5>Child not feeling well</h5>
          <p>CONSULT NOW</p>
        </div>
        <div>
          {" "}
          <img src={asdd5} />
          <h5>Period doubts or Pregnancy</h5>
          <p>CONSULT NOW</p>
        </div>
      </div>
    </div>
  );
};
