import "./searchBanner.css"
import tick from "./assets/rightMark.png"
import mblscrnshot6 from "./assets/mblScreenshot6.png"
import googlePlay from "./assets/googlePlay.png"
import applePlay from "./assets/appStore.png"
import india from "./assets/india-flag.png"
import singapore from "./assets/Flag_of_Singapore.png"
import philippins from "./assets/philippines-flag.png"
import indonesia from "./assets/indonesia-flag.png"
import brazil from "./assets/brazil-flag.png"


export const SerachBanner7 = () => {
    return (
        <div className="dark-white">
               <div className="bottom-list-1">
                    <div style={{backgrundColor:"#E5E5E5"}} className="list-1-full-width">
                        <div className="list-1-container">
                        <div className="list-1-content">
                        <div className="list-1-rightPart">
                                    <div>
                                        <img src={mblscrnshot6} alt="" />
                                </div>
                                </div> 
                                <div className="list-1-leftPart6">
                                    <div className="list-1-left-highlights">
                                        <div className="list-1-left-title">
                                            {/* <h2 className="h2-inline"></h2> */}
                                            <h2 className="h2-bold"> Download the Practo App.</h2>
                                        </div>
                                        <div className="content-list">
                                            <ul>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span>Book appointments and lab tests</span>
                                                </li>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span>Order medicines</span>
                                                </li>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span>Consult doctors online</span>
                                            </li>
                                            <li>
                                                    <img src={tick} alt="" />
                                                    <span>Set medicine reminders</span>
                                            </li>
                                            <li>
                                                    <img src={tick} alt="" />
                                                    <span>Set medicine reminders</span>
                                            </li>
                                            <li>
                                                    <img src={tick} alt="" />
                                                    <span>Read health tips</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div  className="list-btn-play">
                                        <div>
                                            <img src={googlePlay} alt="" />
                                            
                                        </div>
                                        <div>
                                        <img src={applePlay} alt="" />
                                        </div>
                                       
                                        </div>
                                    
                                    </div>
                                </div>
                            
                               
                            </div>
                           
                        </div>
                </div>
                <div className="flags">
                                <div className="flag-cont">
                                <div className="fl-ele">
                                        <div className="fl-img">
                                        <img src={india} alt="" />
                                        </div>
                                        <span>India</span>
                                    </div>
                                    <div className="fl-ele">
                                        <div className="fl-img">
                                        <img src={singapore} alt="" />
                                        </div>
                                        <span>Singapore</span>
                                    </div>
                                    
                                    <div className="fl-ele">
                                        <div className="fl-img">
                                        <img src={philippins} alt="" />
                                        </div>
                                        <span>Philippins</span>
                                    </div>
                                    <div className="fl-ele">
                                        <div className="fl-img">
                                        <img src={indonesia} alt="" />
                                        </div>
                                        <span>Indonesia</span>
                                    </div>
                                    <div className="fl-ele">
                                        <div className="fl-img">
                                        <img src={brazil} alt="" />
                                        </div>
                                        Brazil
                                    </div>
                                </div>
                                </div>
                </div>
        </div>
    )
}