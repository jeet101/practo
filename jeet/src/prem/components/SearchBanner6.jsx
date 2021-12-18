import "./searchBanner.css"
import tick from "./assets/rightMark.png"
import mblscrnshot5 from "./assets/mblScreenshot5.png"
import fortune from "./assets/suguna.png"
import techcrunch from "./assets/pratiksha.png"
import forbs from "./assets/nmc.png"
import Eco from "./assets/vps.png"

import leftArrow from "./assets/leftArrow.png"
import rightArrow from"./assets/rightArrow.png"
export const SerachBanner6 = () => {
    return (
        <div className="light-white">
               <div className="bottom-list-1">
                    <div style={{backgrundColor:"#E5E5E5"}} className="list-1-full-width">
                        <div className="list-1-container">
                            <div className="list-1-content">
                                <div className="list-1-leftPart6">
                                    <div className="list-1-left-highlights">
                                        <div className="list-1-left-title">
                                            <h2 className="h2-inline">Leading Healthcare Providers.</h2>
                                            <h2 className="h2-bold"> Trust us for Business.</h2>
                                        </div>
                                        <div className="content-list">
                                            <ul>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span>Get seen by 25M+ patients on Practo.com</span>
                                                </li>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span>The most advanced software for clinics and hospitals</span>
                                                </li>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span>State of the art business analytics for enterprises</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-btn">
                                            <button>Learn more</button>
                                        </div>
                                    <div className="para">
                                        
                                        <span><img src={leftArrow} alt="" /></span>
                                        <span>
                                            <p>
                                            Enjoying all the programs that too through one app but for Physico 
                                                people please add a column of notes instead of precription.    
                                            </p>
                                            </span>
                                        <span><img src={rightArrow} alt="" /></span>
                                        
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="list-1-rightPart6">
                                    <div>
                                        <img src={mblscrnshot5} alt="" />
                                </div>
                                </div> 
                               
                            </div>
                            <div className="sec-row6">
                                <div className="row-list sec-row-list6">
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
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}