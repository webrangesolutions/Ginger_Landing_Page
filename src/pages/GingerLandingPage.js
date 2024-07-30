import React from 'react';
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent from "../components/FrameComponent";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import DownloadApp from "../components/DownloadApp";
import ContactUsSection from "../components/contactUs"; // Import the new component
import "./GingerLandingPage.css";

const GingerLandingPage = () => {
  return (
    <div className="ginger-landing-page">
      <div className="background-container">
        <img 
          className="landing-page-image" 
          src="/rectangle-393893@2x.png" 
          alt="Landing" 
        />
        <FrameComponent6 />
      </div>
      <section className="ginger-landing-page-inner">
        <div className="take-your-running-to-the-next-parent">
          <h1 className="take-your-running">
            Take your running to the next level!
          </h1>
          <h1 className="get-the-support-container">
            <p className="get-the-support">Get the support you need as a runner with tailored running plans to achieve your goals,<br />
              from training for a faster 5k to completing your first marathon.
            </p>
          </h1>
        </div>
      </section>

      <FrameComponent frame1686552025="pending_1125:1786" />

      <section className="frame-parent">
        <div className="about-us-parent">
          <h1 className="about-us">About Us</h1>
          <h3 className="welcome-to-ginger-container">
            <p className="welcome-paragraph">
              Welcome to Ginger! We empower you to achieve your <br /> wellness goals with personalized workouts,
              expert <br />nutrition advice, and a supportive community. Join us <br />to transform your life, one workout at a time.<br />
              Embrace a fitter, happier you with FitLife!
            </p>
          </h3>
        </div>
        <img
          className="image-11-icon"
          loading="lazy"
          alt="About Us Image"
          src="/image-11@2x.png"
        />
      </section>

      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      
      <DownloadApp />

      <ContactUsSection /> 
    </div>
  );
};

export default GingerLandingPage;
