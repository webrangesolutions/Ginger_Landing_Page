import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "", frame1686552025 }) => {
  return (
    <div className={`down-wrapper ${className}`}>
      <div className="down">
        <h1 className="scroll-down1">Scroll down</h1>
        <div className="down-inner">
          <img
            className="frame-icon"
            loading="lazy"
            alt=""
            src='/frame-1686552025@2x.png'
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  frame1686552025: PropTypes.string,
};

export default FrameComponent;
