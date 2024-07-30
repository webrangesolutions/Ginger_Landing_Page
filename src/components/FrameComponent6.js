import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <header className={`frame-header ${className}`}>
      <div className="frame-container">
        <div className="whatsapp-image-2024-06-03-at-5-wrapper">
          <img
            className="whatsapp-image-2024-06-03-at-5"
            src={`${process.env.PUBLIC_URL}/whatsapp-image-20240603-at-538-1@2x.png`} 
            loading="lazy"
            alt="whatsapp"
          />
        </div>
        <div className="frame-wrapper">
          <div className="frame-div">
            <nav className="frame-nav">
              <nav className="frame-parent1">
                <div className="nav-item">
                  <a className="nav-link">Home</a>
                </div>
                <div className="nav-item">
                  <a className="nav-link">About us</a>
                </div>
                <div className="nav-item">
                  <a className="nav-link">Contact us</a>
                </div>
                <div className="nav-item">
                  <a className="nav-link">Stories</a>
                </div>
                <div className="nav-item">
                  <a className="nav-link">Community</a>
                </div>
                <div className="nav-item">
                  <a className="nav-link">Coach connect</a>
                </div>
              </nav>
            </nav>
            <button className="get-started-wrapper">
              <a className="get-started">Get Started</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
