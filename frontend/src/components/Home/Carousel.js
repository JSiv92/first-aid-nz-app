import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import medics from "../../assets/events.png";
import drugs from "../../assets/drugscreening.png";
import health from "../../assets/healthscreening.png";
import courses from "../../assets/courses.png";

const Slides = () => {
  return (
    <Carousel>
      <Carousel.Item interval={6000}>
        <div className="tintDiv">
          <img
            className="slide fluid d-block w-100"
            src={medics}
            alt="Event Medics"
          />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <div className="tintDiv">
          <img
            className="slide fluid w-100"
            src={courses}
            alt="Courses"
            to="/courses"
          />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <div className="tintDiv">
          <img className="slide fluid w-100" src={drugs} alt="Drug Screening" />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <div className="tintDiv">
          <img
            className="slide fluid d-block w-100"
            src={health}
            alt="Health Screening"
          />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slides;
