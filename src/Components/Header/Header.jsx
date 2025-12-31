import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Header.css";
import logo from "../../assets/Images/135LOGO.png";
import secondlogo from "../../assets/Images/135Logo_Website@2x.png";
import { RxCross2 } from "react-icons/rx";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [header ,  setheader]=  useState(true)
  console.log('activeMenu: ', activeMenu);
  const location = useLocation();
  const navigate = useNavigate();
  const redirectRef = useRef({ shouldScroll: false, target: "" });

  const openWhatsApp = () => {
    const phoneNumber = "+917863870341";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const isTermsPage =
    location.pathname === "/TermsandConditions" ||
    location.pathname === "/CancellationPolicy" ||
    location.pathname === "/PrivacyPolicy" ||
    location.pathname === "/NewAbout"||
    location.pathname === "/ContactForm"||
    location.pathname === "/ShippingPolicy"||
    location.pathname.startsWith("/Detail");   
  const isMenuPage = location.pathname === "/OurMenu";
  const isHomePage = location.pathname === "/" || location.pathname === "";

  useEffect(() => {
    if (isHomePage) {
      setActiveMenu("home");
    } else if (location.pathname === "/OurMenu") {
      setActiveMenu("menu");
    } else if (location.pathname === "/ContactForm") {
      setActiveMenu("contact");
    } else if (location.pathname === "/NewAbout") {
      setActiveMenu("about");
    }
  }, [location.pathname, isHomePage, isTermsPage]);

  const handleLinkClick = (menuItem) => {
    setActiveMenu(menuItem);
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

 

  const getLinkClass = (menuItem) => {
    return `${activeMenu === menuItem ? "active green-color" : menuOpen || isHomePage ? "text-light" : "text-dark"}`;
  };

  return (
    <div>
      {header && <div className="top-header position-relitive">
        Free Delivery UPTO 1KM
       <span style={{position:"absolute" , right:"10px" , cursor:"pointer"}}  onClick={()=>setheader(false)}><RxCross2 /></span>
      </div>
      }
      <nav className={`header-navbar ${menuOpen ? "black text-light" : ""}`}>
        <div className="header-nav-container">

          {/* Nav Links */}
          <ul className={`header-nav-links ${menuOpen  ? "header-active text-light" : "mt-2 text-dark"}`} style={{top: `${header ? "" : '0px'}`}}>
            <li>
              <Link
                onClick={() => handleLinkClick("home")}
                to="/"
                className={getLinkClass("home")}
              >
                Home
              </Link>
            </li>
            <li>
  <Link
    to="/NewAbout"
    onClick={() => handleLinkClick("about")}
    className={`nav-button ${getLinkClass("about")}`}
  >
    About
  </Link>
</li>
            <li>
              <Link to="/OurMenu">
                <button
                  className={`nav-button ${getLinkClass("menu")}`}
                  onClick={() => handleLinkClick("menu")}
                >
                  Menu
                </button>
              </Link>
            </li>
            <li>
              <Link to={'/ContactForm'}>
                <button 
                onClick={() => handleLinkClick("contact")}
                  className={`nav-button ${getLinkClass("contact")}`}
                >
                  Contact
                </button>
                </Link>
            </li>

            <div className="header-mobile-icons">
              <FaWhatsapp
                className="fs-3"
                onClick={openWhatsApp}
                style={{ cursor: "pointer" }}
              />
              <Link to="https://www.instagram.com/135degrees.in/" target="_blank">
                <FaInstagram className={`fs-3 ${menuOpen ? "text-light" : "text-white"}`} />
              </Link>
            </div>
          </ul>
          {/* Logo */}
          <div className="header-logo">
            <a href="/">
              <img src={`${menuOpen || isHomePage? logo : secondlogo}`} alt="logo" className="header-logo" />
            </a>
          </div>
          {/* Icons */}
          <div className="header-icons">
            <FaWhatsapp
              className={`fs-3 ${isTermsPage || isMenuPage || menuOpen ? "text-dark" : ""}`}
              onClick={openWhatsApp}
              style={{ cursor: "pointer" }}
            />
            <Link to="https://www.instagram.com/135degrees.in/" target="_blank">
              <FaInstagram className={`fs-3 ${isTermsPage || isMenuPage || menuOpen ? "text-dark" : "text-light"}`} />
            </Link>
          </div>
          {/* Toggle Button */}
          <button
            className={`header-menu-btn ${menuOpen ? "header-open" : isTermsPage || isMenuPage ? "text-dark" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </div>
  );
}
