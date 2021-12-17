import "./Articlessection.css";
import arpic1 from "../img/arpic1.png";

export const Articlessection = () => {
  return (
    <div className="Articles-main">
      <div className="Articles-left">
        <h2>Read top articles from health experts</h2>
        <p>
          Health articles that keep you informed about good health practices and
          achieve your goals.
        </p>
        <button>See all articles</button>
      </div>
      <div className="Articles-right">
        <div>
          <img src={arpic1} />
          <h5 className="Articles1">CORONA VIRUS</h5>
          <h5 className="Articles2">12 Corona Virus Myths and Facts That You Should be Aware Of</h5>
          <p>Dr. Diana Borgio</p>
        </div>
        <div>
          {" "}
          <img src={arpic1} />
          <h5>CORONA VIRUS</h5>
          <h5>12 Corona Virus Myths and Facts That You Should be Aware Of</h5>
          <p>Dr. Diana Borgio</p>
        </div>
      </div>
    </div>
  );
};
