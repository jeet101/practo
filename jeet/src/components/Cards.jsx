import { Card } from './Card';
import './Cards.css';
import cardImg3 from "../img/card1.png";
import cardImg1 from "../img/cardimg1.png";
import cardImg2 from "../img/cardImg2.png";
import cardImg4 from "../img/cardimg4.png";
import cardImg5 from "../img/cardimg5.png";
export const Cards = () => {
  return (
    <>
    <div className="cards-main">
     <Card img = {cardImg1}/>
     <Card img = {cardImg2}/>
     <Card img = {cardImg3}/>
     <Card img = {cardImg4}/>
     <Card img = {cardImg5}/>
    </div>
    </>
  )
}