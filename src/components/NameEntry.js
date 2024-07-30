import PropTypes from "prop-types";
import "./NameEntry.css";

const NameEntry = ({ className = "" }) => {
  return (
    <div className={`name-entry ${className}`}>
      <h2 className="name">Name</h2>
      <div className="name-value">
        <div className="entered-name">
          <input className="user-name" placeholder="David" type="text" />
        </div>
      </div>
    </div>
  );
};

NameEntry.propTypes = {
  className: PropTypes.string,
};

export default NameEntry;
