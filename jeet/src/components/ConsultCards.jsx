import "./ConsultCards.css";
import irregularpainfulperiod1 from "../img/irregular-painful+period1.png";

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
          <img src={irregularpainfulperiod1} />
          <h5>Period doubts or Pregnancy</h5>
          <p>CONSULT NOW</p>
        </div>
        <div>
          {" "}
          <img src={irregularpainfulperiod1} />
          <h5>Period doubts or Pregnancy</h5>
          <p>CONSULT NOW</p>
        </div>
        <div>
          {" "}
          <img src={irregularpainfulperiod1} />
          <h5>Period doubts or Pregnancy</h5>
          <p>CONSULT NOW</p>
        </div>
        <div>
          {" "}
          <img src={irregularpainfulperiod1} />
          <h5>Period doubts or Pregnancy</h5>
          <p>CONSULT NOW</p>
        </div>
        <div>
          {" "}
          <img src={irregularpainfulperiod1} />
          <h5>Period doubts or Pregnancy</h5>
          <p>CONSULT NOW</p>
        </div>
      </div>
    </div>
  );
};
