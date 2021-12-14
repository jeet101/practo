import { Footer } from "./Footer";
import bannerIMG from "../img/banner.png";
import { Navigation_bar } from "./Navigation_bar";
import './Home.css'
import { Cards } from "./Cards";

export const Home = () => {
  return (
    <>
      <Navigation_bar />
      <div className= 'banner'>
        <img src={bannerIMG} className="banner-img" />
      </div>
      <Cards/>
      <Footer />
    </>
  );
};
