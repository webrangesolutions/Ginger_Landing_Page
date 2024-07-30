import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`frame-section ${className}`}>
      <div className="contact-us-group">
        <h1 className="contact-us2">Contact us</h1>
        <div className="were-here-to-help-you-on-your-wrapper">
          <h3 className="were-here-to-container">
            <p className="were-here-to">
              We're here to help you on your fitness journey. If you have any questions, feedback, 
              or need support, please reach out to us. Our dedicated team is available to assist you with any
              inquiries.
            </p>
          </h3>
        </div>
        <div className="frame-wrapper1">
          <div className="frame-parent2">
            <img
              className="frame-child1"
              loading="lazy"
              alt=""
              src="/group-1686551905.svg"
            />
            <img
              className="frame-child1"
              loading="lazy"
              alt=""
              src="/group-1686551906.svg"
            />
            <img
              className="frame-child1"
              loading="lazy"
              alt=""
              src="/group-1686551907.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="pexels-runffwpu-2168292-1-icon"
        loading="lazy"
        alt=""
        src="/pexelsrunffwpu2168292-1@2x.png"
      />
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
