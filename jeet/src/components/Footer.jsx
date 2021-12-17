import "./Footer.css";
import logo from '../img/logo_w.png';

export const Footer = () => {
  return (
    <>
      <div className="footermain">
        <div className="top-footer">
          <div>
            <h5>Practo</h5>
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Contact Us</p>
          </div>
          <div>
          <h5>For patients</h5>
            <p>Search for doctors</p>
            <p>Search for clinics</p>
            <p>Book diagnostic tests</p>
            <p>Book full body checkups</p>
            <p>Covid hospital listings</p>
            <p>Read health articles</p>
            <p>Read about medicines</p>
            <p>Practo driive</p>
            <p>Health app</p>
          </div>
          <div>
          <h5>For doctors</h5>
            <p>Practo profile</p>
            <h5>For clinics</h5>
            <p>Ray by Practo</p>
            <p>Practo reach</p>
            <p>Ray tab</p>
            <p>Practo Pro</p>
          </div>
          <div>
          <h5>For hospitals</h5>
            <p>Insta by Practo</p>
            <p>Qikwell by Practo</p>
            <p>Practo profile</p>
            <p>Practo reach</p>
            <p>Practo drive</p>
          </div>
          <div>
          <h5>Practo</h5>
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Contact Us</p>
          </div>
          <div>
          <h5>Practo</h5>
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="bottom">
          <div>
            <img src={logo} className="logo-img_f"/>
           
          </div>
          <h5>Copyright © 2017, Practo. All rights reserved.</h5>
        </div>
      </div>
    </>
  );
};
