import PropTypes from "prop-types";
import { useState } from "react";
import "./Verification.css";

const Verification = ({ className = "", group }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`verification ${className}`}>
      <div className="human-check">
        <div className="agreement">
          <div 
            className={`checkbox ${isChecked ? "checked" : ""}`} 
            onClick={handleCheckboxClick}
          >
            {isChecked && <span className="tick">✔</span>}
          </div>
          <div className="human-label">
            <div className="i-am-human">I am human</div>
          </div>
        </div>
      </div>
      <div className="legal">
        <div className="submit-button">
          <img className="group-icon1" alt="" src={group} />
        </div>
        <div className="privacy-terms">Privacy - Terms</div>
      </div>
    </div>
  );
};

Verification.propTypes = {
  className: PropTypes.string,
  group: PropTypes.string,
};

export default Verification;
