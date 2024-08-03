import GroupComponent1 from "./GroupComponent1";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section id="stories" className={`ginger-landing-page-inner1 ${className}`}>
      <div className="stories-group">
        <h1 className="stories2">Stories</h1>
        <div className="frame-wrapper2">
          <div className="frame-parent3">
            <div className="group-div">
              <GroupComponent1
                rectangle393896="/rectangle-393896@2x.png"
                harryEmbarkedOnHisFitness="Harry embarked on his fitness journey with determination, yet he couldn't shake off the doubts. He often questioned whether he truly had what it takes to sculpt the body he desired."
              />
              <GroupComponent1
                rectangle393896="/rectangle-393898@2x.png"
                harryEmbarkedOnHisFitness="Jake started his fitness journey with unwavering conviction, but doubts persisted. He often wondered if he had the inner strength to truly achieve the body he dreamed of."
              />
              <GroupComponent1
                rectangle393896="/rectangle-393900@2x.png"
                harryEmbarkedOnHisFitness="Alica on his fitness journey with determination, yet he couldn't shake off the doubts. He often questioned whether he truly had what it takes to sculpt the body he desired."
              />
            </div>
            <div className="view-more-wrapper">
              <h2 className="view-more">View more</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
