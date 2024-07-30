import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`e-commerce-landing-page-child ${className}`}>
      <header className="rectangle-group">
        <img className="frame-child11" alt="" src="/rectangle-3938931@2x.png" />
        <div className="navigation">
          <img
            className="whatsapp-image-2024-06-03-at-51"
            loading="lazy"
            alt=""
            src="/whatsapp-image-20240603-at-538-1@2x.png"
          />
          <div className="menu-buttons">
            <div className="buttons-one">
              <nav className="buttons-two">
                <nav className="button-container">
                  <a className="home2">Home</a>
                  <a className="about-us3">About us</a>
                  <a className="contact-us3">Contact us</a>
                  <a className="stories3">Stories</a>
                  <a className="community2">Community</a>
                  <a className="coach-connect3">Coach connect</a>
                </nav>
              </nav>
              <button className="get-started-container">
                <a className="get-started1">Get Started</a>
              </button>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
