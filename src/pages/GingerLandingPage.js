import React , { useEffect} from 'react';
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent from "../components/FrameComponent";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import DownloadApp from "../components/DownloadApp";
import ContactUsSection from "../components/contactUs"; // Import the new component
import "./GingerLandingPage.css";

const GingerLandingPage = () => {

  useEffect(() => {
    const removeBrTags = () => {
      if (window.innerWidth <= 900) {
        document.querySelectorAll('.welcome-paragraph br').forEach(br => br.remove());
        document.querySelectorAll('.get-the-support br').forEach(br => br.remove());
      }
    };

    // Resize event listener
    window.addEventListener('resize', removeBrTags);

    removeBrTags();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', removeBrTags);
    };
  }, []);


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
            <p className="get-the-support">Get the support you need as a runner with tailored running plans to achieve your goals, <br />
              from training for a faster 5k to completing your first marathon.
            </p>
          </h1>
        </div>
      </section>

      <FrameComponent frame1686552025="pending_1125:1786" />

      <section id='about-us' className="frame-parent">
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



      <section id='contact-us' className="frame-section">
        <div className="contact-us-group">
          <h1 className="contact-us2">Contact us</h1>
          <div className="were-here-to-help-you-on-your-wrapper">
            <h3 className="were-here-to-container">
              <p className="were-here-to">
                We're here to help you on your fitness journey. If you have any questions, feedback, 
                or need support, please reach out to us. Our dedicated team is available to assist you with any
                inquiries.
              </p>
            </h3>
          </div>
          <div className="frame-wrapper1">
            <div className="frame-parent2">
              <img
                className="frame-child1"
                loading="lazy"
                alt=""
                src="/group-1686551905.svg"
              />
              <img
                className="frame-child1"
                loading="lazy"
                alt=""
                src="/group-1686551906.svg"
              />
              <img
                className="frame-child1"
                loading="lazy"
                alt=""
                src="/group-1686551907.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="pexels-runffwpu-2168292-1-icon"
          loading="lazy"
          alt=""
          src="/pexelsrunffwpu2168292-1@2x.png"
        />
      </section>
      

      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      
      <DownloadApp />

      <ContactUsSection /> 
    </div>
  );
};

export default GingerLandingPage;
