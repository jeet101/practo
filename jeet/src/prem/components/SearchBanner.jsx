
import "./searchBanner.css"
import list1 from "./assets/consultDoctor.svg"
import securityPng from "./assets/security_1 1.png"
import tick from "./assets/rightMark.png"
import row1 from "./assets/B-row1.png"
import row2 from "./assets/B-row2.png"
import row3 from "./assets/B-row3.png"
import row4 from "./assets/B-row4.png"
import  SearchBar  from "../../components/SearchBar";
import { Link } from "react-router-dom"
export const SerachBanner = () => {
    return (
        <div className="dark-white">
            <div className="container">
                <div className="bannerImg">
                    <div className="cont-h1">
                        <h1>Your home for health</h1>
                        <Link to="/Scarch"> <h4>Find and Book</h4> </Link>
                        
                    </div>
                    <div>
                        <SearchBar/>
                    </div>
                    

                </div>
                <div className="suggesions">
                        <div className="suggesion-list">
                         
                        </div>
                </div>
                <div className="bottom-list-1">
                    <div className="list-1-full-width">
                        <div className="list-1-container">
                            <div className="list-1-content">
                                <div className="list-1-leftPart">
                                    <div className="list-1-left-highlights">
                                        <div className="list-1-left-title">
                                            <h2 className="h2-inline">Safety of your data is our</h2>
                                            <h2 className="h2-bold">top priority.</h2>
                                        </div>
                                        <div className="content-list">
                                            <ul>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span>Multi-level security checks</span>
                                                </li>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span>Multiple data backups</span>
                                                </li>
                                                <li>
                                                    <img src={tick} alt="" />
                                                    <span>Stringent data privacy policies</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-btn">
                                            <button>Read more</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-1-rightPart">
                                    <div>
                                        <img src={securityPng} alt="" />
                                </div>
                                </div> 
                               
                            </div>
                            <div className="sec-row">
                                <div className="row-list">
                                    <div className="row-content">
                                        <img src={row1} alt="" />
                                        <p>256-bit encryption</p>
                                    </div>
                                    <div className="row-content">
                                        <img src={row2} alt="" />
                                        <p>ISO 27001 certified</p>
                                    </div>
                                    <div className="row-content">
                                        <img src={row3} alt="" />
                                        <p>HIPA <br /> compliant centers</p>
                                    </div>
                                    <div className="row-content">
                                        <img src={row4} alt="" />
                                        <p>DSCI member</p>
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