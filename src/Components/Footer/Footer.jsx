import React, { useRef } from "react";
import "./Footer.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/Images/135Logo_Website@2x.png";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const redirectRef = useRef({ shouldScroll: false, target: "" });

  // Check if we're on the home page
  const isHomePage = location.pathname === "/" || location.pathname === "";
  // Simple scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  

  // Handle navigation to home page sections from other pages
  const handleNavigateToSection = (sectionId) => {
    if (!isHomePage) {
      redirectRef.current = { shouldScroll: true, target: sectionId };
      navigate("/"); // Navigate to home page
    }
  };

  // Adds useEffect for handling redirections similar to your Header component
  React.useEffect(() => {
    // Handle redirections with scrolling when coming from other pages
    if (isHomePage && redirectRef.current.shouldScroll) {
      setTimeout(() => {
        const element = document.getElementById(redirectRef.current.target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        redirectRef.current = { shouldScroll: false, target: "" };
      }, 100);
    }
  }, [isHomePage, location]);

  return (
    <footer className={`footer ${isHomePage  ? '' : ' '}`}  style={{position: isHomePage ? 'absolute' : ''  , bottom : isHomePage ? '-230px' : '0'  } } >
      <div className="footer-container ">
        {/* Left Section - Logo & About (Takes More Space) */}
        <div className="d-flex justify-content-between main-footer">
        <div className="footer-section about large-section w-25">
          <div className="logo-perent  ">
          <Link to="/" onClick={scrollToTop}>
            <img src={logo} alt="135 Degrees Logo" className="footer-logo mt-5" />
          </Link>
          </div>
          <p className="footer-detail">
          At 135 Degrees, We Believe That Eating Healthy Should Be Easy, Delicious, And Hassle-free. Our Journey Began With A Simple Vision To Provide Fresh, Hygienic, And Professionally Crafted Food That Fits Seamlessly Into Your Busy Lifestyle.
          </p>
        </div>

        <div className="footer-section links small-section mt-4 mt-md-0">
          <h5 className="fw-bold mt-5">Quick Links</h5>
          <ul>
            <li className="">
              <Link to="/" onClick={scrollToTop} className="text-light">Home</Link>
            </li>
            <li>
              {isHomePage ? (
                <Link
                  to="/NewAbout"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  style={{ cursor: "pointer", color:"#291F51" }}
                >
                  About 
                </Link>
              ) : (
                <Link
                to="/NewAbout"
                smooth={true}
                duration={500}
                offset={-80}
                style={{ cursor: "pointer", color:"#291F51"}}
              >
                About 
              </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <Link to="/OurMenu"><span
                className=""
                 style={{ cursor: "pointer", color:"#291F51" }}
              >
                 Menu
              </span>
              </Link>
              ) : (
                <Link to="/OurMenu"><span
                  className=""
                  style={{ cursor: "pointer", color:"#291F51" }}
                >
                   Menu
                </span>
                </Link>
              )}
            </li>
            <li>
           <Link to={'/ContactForm'}>
                <span
                  onClick={() => handleNavigateToSection("contact")}
                  className=""
                   style={{ cursor: "pointer", color:"#291F51" }}
                >
                  Contact 
                </span>
                </Link>
            </li>
          </ul>
        </div>
      </div>
      </div>

      <div className="footer-bottom centered">
        <div className="policy-links d-md-flex gap-1 ">
          <Link to="/PrivacyPolicy" className="privacy-links"> Privacy Policy |</Link>
          <Link to="/CancellationPolicy" className="privacy-links">
            Cancellation Policy |
          </Link>
          <Link to="/TermsandConditions" className="privacy-links"> Terms & Conditions |</Link>
          <Link to="/ShippingPolicy" className="privacy-links"> Shipping Policy</Link>
        </div>
        <p style={{ fontSize: "13px" }}>COPYRIGHT © 2025 <strong>135 DEGREES</strong></p>
        <p style={{ fontSize: "13px" }}>DEVELOPED BY <strong>AYUSH</strong></p>
      </div>
    </footer>
  );
};

export default Footer;