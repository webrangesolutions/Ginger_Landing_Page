import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`frame-parent11 ${className}`}>
      <div className="frame-wrapper6">
        <div className="coach-connect-group">
          <h1 className="coach-connect2">Coach Connect</h1>
          <div className="personalized-fitness-guidance-wrapper">
            <h2 className="personalized-fitness-guidance">
              Personalized Fitness Guidance
            </h2>
          </div>
          <div className="with-ginger-receive-customize-wrapper">
            <h3 className="with-ginger-receive-container">
              <p className="with-ginger-receive">With Ginger, receive customized workout plans and expert advice from our elite coaches, 
                                                 committed to guiding you every step of the way towards achieving your fitness goals.
              </p>
            </h3>
          </div>
          <div className="frame-wrapper7">
            <img
              className="frame-child8"
              loading="lazy"
              alt=""
              src="/group-1686551961.svg"
            />
          </div>
        </div>
      </div>
      <div className="frame-parent12">
        <div className="frame-parent13">
          <div className="frame-wrapper8">
            <div className="frame-parent14">
              <div className="coach-image-parent">
                <div className="coach-image">
                  <img
                    className="lead-coach-photo"
                    loading="lazy"
                    alt=""
                    src="/ellipse-10@2x.png"
                  />
                  <div className="coach-name">
                    <div className="austin-bill-parent">
                      <div className="austin-bill">Austin Bill</div>
                      <div className="british-olympic-coach">
                        British Olympic Coach
                      </div>
                      <div className="coach-stars">
                        <img
                          className="coach-stars-child"
                          alt=""
                          src="/group-1686551905-1.svg"
                        />
                        <img
                          className="coach-stars-child"
                          alt=""
                          src="/group-1686551906-1.svg"
                        />
                        <img
                          className="coach-stars-child"
                          alt=""
                          src="/group-1686551907-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lead-coach-title">
                  <div className="lead-coach-label">
                    <div className="lead-coach">{`Lead Coach `}</div>
                  </div>
                </div>
              </div>
              <div className="coach-description">
                <div className="meet-our-lead-container">
                  <p className="with-ginger-receive">Meet our lead coach, with over 7 years of experience in the fitness industry. At Ginger, 
                                                    he brings a wealth of knowledge and a passion for helping clients achieve their fitness goals.
                                                    His personalized approach and dedication to excellence ensure that each member receives the highest 
                                                    level of guidance and support on their fitness journey.
                  </p>
                </div>
                <div className="meet-our-lead-container">
                  <p className="with-ginger-receive">Our lead coach specializes in a variety of training techniques, from strength 
                                                    conditioning to endurance building, and is committed to continuous learning to stay ahead of industry trends.
                                                    His motivational coaching style has transformed countless lives, making him an invaluable asset to our 
                                                    team and a beacon of inspiration for our members.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent15">
            <img
              className="frame-child9"
              loading="lazy"
              alt=""
              src="/group-1686551959.svg"
            />
            <img
              className="frame-child9"
              loading="lazy"
              alt=""
              src="/group-1686551958.svg"
            />
          </div>
        </div>
        <div className="coach-card-large">
          <div className="coach-background" />
          <div className="coach-info-large">
            <div className="coach-name-large">
              <div className="austin-bill-group">
                <div className="austin-bill1">Austin Bill</div>
                <div className="british-olympic-coach1">
                  British Olympic Coach
                </div>
              </div>
            </div>
            <div className="coach-expertise-large">
              <div className="coach-label-large">
                <div className="lead-coach">Lead Coach </div>
              </div>
              <div className="meet-our-lead-container1">
                <p className="with-ginger-receive">Meet our lead coach, with over 7 years of experience in the fitness industry.
                                                  At Ginger, he brings a wealth of knowledge and a passion for helping clients 
                                                  achieve their fitness goals. His personalized approach and dedication to excellence
                                                  ensure that each member receives the highest level of guidance and support on their fitness journey.
                                                  <br /> <br />
                                                  Our lead coach specializes in a variety of training techniques, from strength 
                                                  conditioning to endurance building, and is committed to continuous learning to stay ahead of industry trends.
                                                  His motivational coaching style has transformed countless lives, making him an invaluable asset to our 
                                                  team and a beacon of inspiration for our members.
                </p>
              </div>
            </div>
            <div className="coach-details-large">
              <img
                className="coach-photo-large"
                alt=""
                src="/ellipse-10-1@2x.png"
              />
              <img
                className="coach-details-large-child"
                alt=""
                src="/group-1686551905-1.svg"
              />
              <img
                className="coach-details-large-item"
                alt=""
                src="/group-1686551906-1.svg"
              />
              <img
                className="coach-details-large-inner"
                alt=""
                src="/group-1686551907-1.svg"
              />
              <div className="experience-background" />
              <div className="training-background" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
