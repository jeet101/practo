import "./searchBanner.css"
import tick from "./assets/rightMark.png"
import mblscrnshot4 from "./assets/mblScreenshot4.png"
import leftArrow from "./assets/leftArrow.png"
import rightArrow from "./assets/rightArrow.png"
import dot from "./assets/Ellipse-6.png"
export const SerachBanner5 = () => {
    return (
        <div className="dark-white">
               <div className="bottom-list-1">
                    <div style={{backgrundColor:"#E5E5E5"}} className="list-1-full-width">
                        <div className="list-1-container">
                        <div className="list-1-content">
                        <div className="list-1-rightPart">
                                    <div>
                                        <img src={mblscrnshot4} alt="" />
                                </div>
                                </div> 
                                <div className="list-1-leftPart">
                                    <div className="list-1-left-highlights">
                                        <div className="list-1-left-title">
                                            <h2 className="h2-inline">All your medical records</h2>
                                            <h2 className="h2-bold"> In one secure app.</h2>
                                        </div>
                                        <div className="content-list">
                                            <ul>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span>256-bit end to end encryption</span>
                                                </li>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span>Records are accessible only by you</span>
                                                </li>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span>Access your records across 8000+ centers</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div  className="list-btn">
                                        <button>Find out more</button>
                                       
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