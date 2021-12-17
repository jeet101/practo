import { Footer } from "../components/Footer";
import bannerIMG from "../img/banner.png";
import offer from "../img/offer.png";
import { Navigation_bar } from "../components/Navigation_bar";
import "./Home.css";
import { Cards } from "../components/Cards";
import SearchBar from "../components/SearchBar";
import BookData from "../Data.json";
import { ConsultCards } from "../components/ConsultCards";
import Home_carosol from "../components/Home_carosol";
import { Articlessection } from "../components/Articlessection";

export const Home = () => {
  return (
    <>
      <Navigation_bar />
      <div className="home-search-bar">
        <div>
          <SearchBar placeholder="Enter a Book Name..." data={BookData} />
        </div>
        <div className="offer">
          <img src={offer} />
        </div>
      </div>

      <div className="banner">
        <img src={bannerIMG} className="banner-img" />
      </div>
      <Cards />
      <ConsultCards />
      <div className="carosol-heading">
        <h3>Book an appointment for an in-clinic consultation</h3>
        <p>Find experienced doctors across all specialities</p>
      </div>
      <Home_carosol />

      <Articlessection />

      <Footer />
    </>
  );
};
