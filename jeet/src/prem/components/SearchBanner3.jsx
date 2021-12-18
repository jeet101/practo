import "./searchBanner.css"
import tick from "./assets/rightMark.png"
import mblscrnshot2 from "./assets/MblScreenshot2.png"
import leftArrow from "./assets/leftArrow.png"
import rightArrow from "./assets/rightArrow.png"
import dot from "./assets/Ellipse-6.png"
export const SerachBanner3 = () => {
    return (
        <div className="dark-white">
               <div className="bottom-list-1">
                    <div style={{backgrundColor:"#E5E5E5"}} className="list-1-full-width">
                        <div className="list-1-container">
                        <div className="list-1-content">
                        <div className="list-1-rightPart">
                                    <div>
                                        <img src={mblscrnshot2} alt="" />
                                </div>
                                </div> 
                                <div className="list-1-leftPart">
                                    <div className="list-1-left-highlights">
                                        <div className="list-1-left-title">
                                            <h2 className="h2-inline">Skip the waiting room.
  </h2>
                                            <h2 className="h2-bold"> Consult with a doctor</h2>
                                        </div>
                                        <div className="content-list">
                                            <ul>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span>Fees starting at<bold> ₹99</bold></span>
                                                </li>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span>Verified doctor respond in 5 minuts</span>
                                                </li>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span>100% Private & confidential</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div style={{width:"381px"}} className="list-btn">
                                        <button>Consult now</button>
                                        <span className="dot"><img src={dot} alt="" />
                                       <span style={{width:"131px"}}>57881 doctors online</span>
                                        </span>
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
                                
                               
                            </div>
                           
                        </div>
                    </div>
                </div>
        </div>
    )
}