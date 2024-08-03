import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section id="community" className={`ginger-landing-page-inner2 ${className}`}>
      <div className="join-the-ginger-community-parent">
        <h1 className="join-the-ginger">Join the Ginger Community</h1>
        <div className="frame-wrapper3">
          <div className="frame-parent4">
            <div className="frame-parent5">
              <div className="frame-parent6">
                <div className="ellipse-parent">
                  <div className="ellipse-div" />
                  <div className="div">1</div>
                </div>
                <div className="ellipse-parent">
                  <div className="ellipse-div" />
                  <div className="div1">2</div>
                </div>
              </div>
              <div className="frame-wrapper4">
                <div className="frame-parent7">
                  <div className="join-the-community-parent">
                    <h2 className="join-the-community">Join the community</h2>
                    <h3 className="stay-motivated-and-container">
                      <p className="stay-motivated-and">
                        Stay motivated and accountable by joining a private community of thousands of runners all over the world.
                      </p>
                    </h3>
                  </div>
                  <div className="join-events-competitions-parent">
                    <h2 className="join-the-community">Join events & competitions</h2>
                    <h3 className="stay-motivated-and-container">
                      <p className="stay-motivated-and">Sign up for our in-person running events that include trail runs, time-trials and social run club meet-ups.</p>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent8">
              <div className="frame-parent9">
                <div className="ellipse-parent">
                  <div className="ellipse-div" />
                  <div className="div2">3</div>
                </div>
                <div className="ellipse-parent">
                  <div className="ellipse-div" />
                  <div className="div1">4</div>
                </div>
              </div>
              <div className="frame-wrapper5">
                <div className="frame-parent10">
                  <div className="get-discounts-offers-parent">
                    <h2 className="join-the-community">Get discounts & offers</h2>
                    <h3 className="stay-motivated-and-container">
                      <p className="stay-motivated-and">We've partnered with leading nutrition, apparel, events and supplement providers 
                                                        to offer exclusive discounts for runners.</p>
                    </h3>
                  </div>
                  <div className="support-from-our-coaching-team-parent">
                    <h2 className="join-the-community">
                      Support from our coaching team
                    </h2>
                    <h3 className="our-friendly-running-container">
                      <p className="stay-motivated-and">
                        Our friendly running coaches and customer support team are always on hand if you have any questions - just message us in-app.
                      </p>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
