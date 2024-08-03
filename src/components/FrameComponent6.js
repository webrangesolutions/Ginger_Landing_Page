import PropTypes from "prop-types";
import { useState } from "react";
import "./FrameComponent6.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const FrameComponent6 = ({ className = "" }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className={`frame-header ${className}`}>
      <div className="frame-container">
        <div className="whatsapp-image-2024-06-03-at-5-wrapper">
          <img
            className="whatsapp-image-2024-06-03-at-5"
            src={`${process.env.PUBLIC_URL}/whatsapp-image-20240603-at-538-1@2x.png`} 
            loading="lazy"
            alt="Ginger Logo"
          />
        </div>
        <div className="frame-wrapper">
          <div className="frame-div">
            <nav className={`frame-nav ${isDrawerOpen ? "open" : ""}`}>
              <nav className="frame-parent1">
                <div className="nav-item">
                  <a className="nav-link">Home</a>
                </div>
                <div className="nav-item">
                  <a className="nav-link" href="#about-us">About us</a>
                </div>
                <div className="nav-item">
                  <a className="nav-link" href="#contact-us">Contact us</a>
                </div>
                <div className="nav-item">
                  <a className="nav-link" href="#stories">Stories</a>
                </div>
                <div className="nav-item">
                  <a className="nav-link" href="#community">Community</a>
                </div>
                <div className="nav-item">
                  <a className="nav-link" href="#coach-connect">Coach connect</a>
                </div>
              </nav>
            </nav>
            <button className="get-started-wrapper">
              <a className="get-started">Get Started</a>
            </button>
            <button className="drawer-icon" onClick={toggleDrawer}>
              <span className="drawer-icon-bar"></span>
              <span className="drawer-icon-bar"></span>
              <span className="drawer-icon-bar"></span>
            </button>
          </div>
        </div>
      </div>

      {isDrawerOpen && (
        <div className={`drawer-menu ${isDrawerOpen ? "open" : ""}`}>
          <div className="nav-item">
            <a className="nav-link">Home</a>
          </div>
          <div className="nav-item">
            <AnchorLink className="nav-link" href="#about-us" onClick={() => setIsDrawerOpen(false)}>About us</AnchorLink>
          </div>
          <div className="nav-item">
            <AnchorLink className="nav-link" href="#contact-us" onClick={() => setIsDrawerOpen(false)}>Contact us</AnchorLink>
          </div>
          <div className="nav-item">
            <AnchorLink className="nav-link" href="#stories" onClick={() => setIsDrawerOpen(false)}>Stories</AnchorLink>
          </div>
          <div className="nav-item">
            <AnchorLink className="nav-link" href="#community" onClick={() => setIsDrawerOpen(false)}>Community</AnchorLink>
          </div>
          <div className="nav-item">
            <AnchorLink className="nav-link" href="#coach-connect" onClick={() => setIsDrawerOpen(false)}>Coach Connect</AnchorLink>
          </div>
        </div>
      )}
    </header>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
