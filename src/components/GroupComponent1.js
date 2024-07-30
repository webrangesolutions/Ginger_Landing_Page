import PropTypes from "prop-types";
import "./GroupComponent1.css";

const GroupComponent1 = ({
  className = "",
  rectangle393896,
  harryEmbarkedOnHisFitness,
}) => {
  return (
    <div className={`rectangle-parent ${className}`}>
      <img
        className="frame-child4"
        loading="lazy"
        alt=""
        src={rectangle393896}
      />
      <div className="harry-embarked-on-his-fitness-parent">
        <div className="harry-embarked-on-container">
          <p className="harry-embarked-on">{harryEmbarkedOnHisFitness} </p>
        </div>
        <div className="see-more-wrapper">
          <h3 className="see-more">See More</h3>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  rectangle393896: PropTypes.string,
  harryEmbarkedOnHisFitness: PropTypes.string,
};

export default GroupComponent1;
