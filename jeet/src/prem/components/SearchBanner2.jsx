import "./searchBanner.css"
import tick from "./assets/rightMark.png"
import mblscrnshot from "./assets/mblScreenshot.png"
import fortune from "./assets/fortune.png"
import techcrunch from "./assets/techCrunch.png"
import forbs from "./assets/forbes.png"
import Eco from "./assets/Economic Times.png"
import wall from "./assets/wall-street.png"
import TOI from "./assets/TOI.png"
import leftArrow from "./assets/leftArrow.png"
import rightArrow from"./assets/rightArrow.png"
export const SerachBanner2 = () => {
    return (
        <div className="light-white">
               <div className="bottom-list-1">
                    <div style={{backgrundColor:"#E5E5E5"}} className="list-1-full-width">
                        <div className="list-1-container">
                            <div className="list-1-content">
                                <div className="list-1-leftPart">
                                    <div className="list-1-left-highlights">
                                        <div className="list-1-left-title">
                                            <h2 className="h2-inline">Instant appointment with 
doctors.</h2>
                                            <h2 className="h2-bold"> Guaranteed.</h2>
                                        </div>
                                        <div className="content-list">
                                            <ul>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span><bold>100,000</bold> Verified doctors</span>
                                                </li>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span><bold>3M+</bold> Patient recommendations</span>
                                                </li>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span><bold>25M </bold>Patients/year</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-btn">
                                            <button>Find me the right doctor</button>
                                        </div>
                                    <div className="para">
                                        
                                        <span><img src={leftArrow} alt="" /></span>
                                        <span>
                                            <p>
                                                Very helpful. Far easier than doing same things on computer. Allows
                                                    quick and easy search with speedy booking. Even maintains history 
                                                    of doctors visited.
                                            </p>
                                            </span>
                                        <span><img src={rightArrow} alt="" /></span>
                                        
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="list-1-rightPart">
                                    <div>
                                        <img src={mblscrnshot} alt="" />
                                </div>
                                </div> 
                               
                            </div>
                            <div className="sec-row">
                                <div className="row-list sec-row-list">
                                    <div className="row-content">
                                        <img src={fortune} alt="" />
                                        
                                    </div>
                                    <div className="row-content">
                                        <img src={techcrunch} alt="" />
                                        
                                    </div>
                                    <div className="row-content">
                                        <img src={forbs} alt="" />
                                       
                                    </div>
                                    <div className="row-content">
                                        <img src={Eco} alt="" />
                                        
                                    </div>
                                    <div className="row-content">
                                        <img src={wall} alt="" />
                                        
                                    </div>
                                    <div className="row-content">
                                        <img src={TOI} alt="" />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}