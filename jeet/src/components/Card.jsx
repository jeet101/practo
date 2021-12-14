import "./Cards.css";

export const Card = ({ img }) => {
  return (
    <>
      <div className="card-main">
        <div
          className="card-content-img"
          style={{ backgroundColor: "#AFCFED", width: "100%" }}
        >
          <img src={img} className="card-image" />
        </div>
     
          <h4>Medicines</h4>

          <p>Safe and trusted surgery centers</p>
    
      </div>
    </>
  );
};
