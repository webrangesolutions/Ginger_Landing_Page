import React, { useState } from 'react';
import './CoachComponent.css';

const coaches = [
  {
    name: "Austin Bill",
    title: "Fitness Coach",
    description1: "Meet our lead coach, with over 7 years of experience in the fitness industry. At Ginger, he brings a wealth of knowledge and a passion for helping clients achieve their fitness goals. His personalized approach and dedication to excellence ensure that each member receives the highest level of guidance and support on their fitness journey.",
    description2: "Our lead coach specializes in a variety of training techniques, from strength conditioning to endurance building, and is committed to continuous learning to stay ahead of industry trends. His motivational coaching style has transformed countless lives, making him an invaluable asset to our team and a beacon of inspiration for our members.",
    image: "/ellipse-10@2x.png"
  },
  {
    name: "Jane Smith",
    title: "Yoga Instructor",
    description1: "Meet our lead coach, with over 7 years of experience in the fitness industry. At Ginger, he brings a wealth of knowledge and a passion for helping clients achieve their fitness goals. His personalized approach and dedication to excellence ensure that each member receives the highest level of guidance and support on their fitness journey.",
    description2: "Our lead coach specializes in a variety of training techniques, from strength conditioning to endurance building, and is committed to continuous learning to stay ahead of industry trends. His motivational coaching style has transformed countless lives, making him an invaluable asset to our team and a beacon of inspiration for our members.",    
    image: "/ellipse-10-1@2x.png"
  },
  {
    name: "Mr. Harry",
    title: "Fitness Coach",
    description1: "Meet our lead coach, with over 7 years of experience in the fitness industry. At Ginger, he brings a wealth of knowledge and a passion for helping clients achieve their fitness goals. His personalized approach and dedication to excellence ensure that each member receives the highest level of guidance and support on their fitness journey.",
    description2: "Our lead coach specializes in a variety of training techniques, from strength conditioning to endurance building, and is committed to continuous learning to stay ahead of industry trends. His motivational coaching style has transformed countless lives, making him an invaluable asset to our team and a beacon of inspiration for our members.",    
    image: "/new.jpg"
  },
  // Add more coaches as needed
];

const CoachComponent = () => {
  const [currentCoachIndex, setCurrentCoachIndex] = useState(0);

  const handleNext = () => {
    setCurrentCoachIndex((prevIndex) => (prevIndex + 1) % coaches.length);
  };

  const handlePrevious = () => {
    setCurrentCoachIndex((prevIndex) => (prevIndex - 1 + coaches.length) % coaches.length);
  };

  const { name, title, description1, description2, image } = coaches[currentCoachIndex];
  const nextCoach = coaches[(currentCoachIndex + 1) % coaches.length];

  return (
    <div className="container">
      <div className="leftPart">
        <h1 className="title">Coach Connect</h1>
        <h1 className="sub-title">Personalized Fitness Guidance</h1>
        <p className="paragraph">
          With Ginger, receive customized workout plans and expert advice from our elite coaches, 
          committed to guiding you every step of the way towards achieving your fitness goals.
        </p>
        <div className="dotsContainer">
          {coaches.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentCoachIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
      <div className="rightPart">
        <div className="cardContainer">
          <div className="card">
            <div>
                <div className="coach-image-parent">
                    <div className="coach-image">
                    <img
                        className="lead-coach-photo"
                        loading="lazy"
                        alt=""
                        src={image}
                    />
                    <div className="coach-name">
                        <div className="austin-bill-parent">
                        <div className="austin-bill">{name}</div>
                        <div className="subtitle">
                            {title}
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
                        <p className="with-ginger-receive">{description1}</p>
                    </div>
                    <div className="meet-our-lead-container">
                        <p className="with-ginger-receive">{description2}</p>
                    </div>
                  </div>
                </div>
            </div>
          <div className="card nextCard">
            {/* <div className="coachImageContainer">
              <img className="coachImage" src={nextCoach.image} alt={`${nextCoach.name}`} />
            </div>
            <div className="coachDetails">
              <h2 className="coachName">{nextCoach.name}</h2>
              <h3 className="coachTitle">{nextCoach.title}</h3>
            </div> */}

            <div>
              <div className="coach-image-parent">
                <div className="coach-image">
                    <img
                        className="lead-coach-photo"
                        loading="lazy"
                        alt=""
                        src={nextCoach.image}
                    />
                    <div className="coach-name">
                        <div className="austin-bill-parent">
                          <div className="austin-bill">{nextCoach.name}</div>
                        <div className="subtitle">
                            {nextCoach.title}
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
                        <p className="with-ginger-receive">{nextCoach.description1}</p>
                    </div>
                    <div className="meet-our-lead-container">
                        <p className="with-ginger-receive">{nextCoach.description2}</p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        <div className="buttonContainer">
          <img
            onClick={handlePrevious}
            src="/group-1686551959.svg"
            alt="back-button"
            className="buttonImage"
          />
          <img
            onClick={handleNext} 
            src="/group-1686551958.svg"
            alt="forward-button"
            className="buttonImage"
          />
        </div>
      </div>
    </div>
  );
};

export default CoachComponent;
