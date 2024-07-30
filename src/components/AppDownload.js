import DownloadContainer from "./DownloadContainer";
import NameEntry from "./NameEntry";
import Verification from "./Verification";
import PropTypes from "prop-types";
import "./AppDownload.css";

const AppDownload = ({ className = "" }) => {
  return (
    <footer className={`app-download ${className}`}>
      <DownloadContainer
        playstore="/playstore.svg"
        path90="/path90.svg"
        apple="/apple.svg"
        iconFacebook="/icon--facebook.svg"
        iconInstagram="/icon--instagram.svg"
        iconX="/icon--x.svg"
        iconLinkedIn="/icon--linkedin.svg"
      />
      <img className="app-download-child" alt="" src="/vector-32.svg" />
      <div className="form-container1">
        <div className="form-fields1">
          <div className="name-field">
            <div className="name-input">
              <NameEntry />
              <div className="email-field">
                <h1 className="phone-number1">Phone Number</h1>
                <div className="user-email1">
                  <div className="user-email-input">
                    <div className="placeholder">+12345678</div>
                  </div>
                </div>
              </div>
            </div>
            <button className="email-input1">
              <div className="email-value">
                <div className="abcgmailcom1">abc@gmail.com</div>
              </div>
            </button>
          </div>
          <Verification group="/group.svg" union="/union.svg" />
          <div className="link-parent">
            <div className="link3">Privacy Policy</div>
            <div className="link4">Terms of Service</div>
            <div className="link5">Cookies Settings</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

AppDownload.propTypes = {
  className: PropTypes.string,
};

export default AppDownload;
