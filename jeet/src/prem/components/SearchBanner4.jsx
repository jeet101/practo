import "./searchBanner.css"
import tick from "./assets/rightMark.png"
import mblscrnshot3 from "./assets/mblScreenshot3.png"
import dot from "./assets/Ellipse-8.png"
import leftArrow from "./assets/leftArrow.png"
import rightArrow from"./assets/rightArrow.png"
export const SerachBanner4 = () => {
    return (
        <div className="light-white">
               <div className="bottom-list-1">
                    <div style={{backgrundColor:"#E5E5E5"}} className="list-1-full-width">
                        <div className="list-1-container">
                            <div className="list-1-content">
                                <div className="list-1-leftPart">
                                    <div className="list-1-left-highlights">
                                        <div className="list-1-left-title">
                                            <h2 className="h2-inline">Get all your medicines.</h2>
                                            <h2 className="h2-bold">Everytime. On time.</h2>
                                        </div>
                                        <div className="content-list">
                                            <ul>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span>Guaranteed availability</span>
                                                </li>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span>Over 130,000+ genuine medicines</span>
                                                </li>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span>Home delivery in 24 hrs</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div style={{width:"451px"}} className="list-btn list-grid">
                                        <button>Order medicines</button>
                                        <div className="dot">
                                        <span className="dot"><img src={dot} alt="" />
                                                 - Last order delivered 5 mins ago in Krishnarajapura,Bengaluru` 
                                            </span>
                                            </div>
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
                                        <img src={mblscrnshot3} alt="" />
                                </div>
                                </div> 
                               
                            </div>
                            
                        </div>
                    </div>
                </div>
        </div>
    )
}