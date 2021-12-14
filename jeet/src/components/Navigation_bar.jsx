import logo from '../img/logo.png';
import './Navigation_bar.css';

export const Navigation_bar = ()=>{
  return (
    <>
    <div className="main">
        <div className="lift">
            <img src={logo} className="logo-img"/>
        </div>
        <div className="mid">
            <div>
              <h5>Find Doctors</h5>
              <p>Book an appointment</p>
            </div>
            <div>
            <h5>Find Doctors</h5>
              <p>Book an appointment</p>
            </div>
            <div>
            <h5>Find Doctors</h5>
              <p>Book an appointment</p>
            </div>
            <div>
            <h5>Find Doctors</h5>
              <p>Book an appointment</p>
            </div>
            <div>
            <h5>Find Doctors</h5>
              <p>Book an appointment</p>
            </div>
            <div id="providers">
              <p>For Providers</p>
            </div>
            <div>
              <p>For Providers</p>
            </div>
        </div>
        <div className="right">
<button className="btn-login">Login/Signup</button>
        </div>
    </div>
    </>
  )
}