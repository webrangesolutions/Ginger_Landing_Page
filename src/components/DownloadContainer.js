import PropTypes from "prop-types";
import "./DownloadContainer.css";

const DownloadContainer = ({
  className = "",
  playstore,
  apple,
  iconFacebook,
  iconInstagram,
  iconX,
  iconLinkedIn,
}) => {
  return (
    <div className={`download-container ${className}`}>
      <div className="download-content">
        <h1 className="download-the-app">{`Download the App Now `}</h1>
        <div className="store-buttons">
          <div className="store-container">
            <div className="store-elements">
              <div className="store-button">
                <button className="store-download-button">
                  <img className="playstore-icon" alt="" src={playstore} />
                  <div className="content">
                    <div className="subtext">Get it on</div>
                    <div className="subtext1">GOOGLE PLAY</div>
                  </div>
                </button>
                <div className="store-download-button1">
                  <img
                    className="apple-icon"
                    loading="lazy"
                    alt=""
                    src={apple}
                  />
                  <div className="content-wrapper">
                    <div className="content1">
                      <div className="download-on-the">Download on the</div>
                      <div className="app-store">App Store</div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="heading2">Also Follow Us On</h1>
            </div>
            <div className="social-media">
              <div className="social-container">
                <div className="social-elements">
                  <img
                    className="icon-facebook"
                    loading="lazy"
                    alt=""
                    src={iconFacebook}
                  />
                  <div className="social-names-container">
                    <div className="facebook">Facebook</div>
                  </div>
                </div>
                <div className="social-elements1">
                  <img
                    className="icon-facebook"
                    loading="lazy"
                    alt=""
                    src={iconInstagram}
                  />
                  <div className="social-names-container">
                    <div className="instagram">Instagram</div>
                  </div>
                </div>
                <div className="linkedin-icon">
                  <img
                    className="icon-facebook"
                    loading="lazy"
                    alt=""
                    src={iconX}
                  />
                  <div className="social-names-container">
                    <div className="twitter">Twitter</div>
                  </div>
                </div>
              </div>
              <div className="text">© 2024 Socials. All rights reserved.</div>
            </div>
          </div>
          <div className="linkedin">
            <div className="linkedin-icon">
              <img
                className="icon-facebook"
                loading="lazy"
                alt=""
                src={iconLinkedIn}
              />
              <div className="social-names-container">
                <div className="linkedin1">LinkedIn</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DownloadContainer.propTypes = {
  className: PropTypes.string,
  playstore: PropTypes.string,
  path90: PropTypes.string,
  apple: PropTypes.string,
  iconFacebook: PropTypes.string,
  iconInstagram: PropTypes.string,
  iconX: PropTypes.string,
  iconLinkedIn: PropTypes.string,
};

export default DownloadContainer;
