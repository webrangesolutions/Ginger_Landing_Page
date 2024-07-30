import DownloadContainer from "./DownloadContainer";
import NameEntry from "./NameEntry";
import Verification from "./Verification";
import PropTypes from "prop-types";
import "./DownloadApp.css";

const DownloadApp = ({ className = "" }) => {
  return (
    <footer className={`download-app ${className}`}>
      <DownloadContainer
        playstore="/playstore.svg"
        apple="/apple.svg"
        iconFacebook="/icon--facebook.svg"
        iconInstagram="/icon--instagram.svg"
        iconX="/icon--x.svg"
        iconLinkedIn="/icon--linkedin.svg"
      />
      <img className="footer-curve-icon" alt="" />
      <div className="footer1">
        <div className="footer-content1">
          <form className="form-container">
            <div className="form-fields">
              <NameEntry />
              <div className="email-input">
                <h3 className="phone-number">Phone Number</h3>
                <input
                  className="phone-box"
                  placeholder="+12345678"
                  type="text"
                />
              </div>
            </div>
            <h3 className="email">Email</h3>
            <div className="user-email">
              <input
                  className="email-box"
                  placeholder="abi@gmail.com"
                  type="text"
                />              
            </div>
          </form>
          <Verification group="/group.svg" union="/union.svg" />
          <div className="footer-links">
            <div className="link">Privacy Policy</div>
            <div className="link1">Terms of Service</div>
            <div className="link2">Cookies Settings</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

DownloadApp.propTypes = {
  className: PropTypes.string,
};

export default DownloadApp;
