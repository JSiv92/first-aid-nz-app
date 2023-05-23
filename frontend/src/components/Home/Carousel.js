import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import medics from "../../assets/events.png";
import health from "../../assets/healthscreening.png";
import courses from "../../assets/courses.png";

const Slides = () => {
  return (
    <Carousel>
      <Carousel.Item interval={9000}>
        <div className="tintDiv">
          <Link to="/courses">
            <img className="slide fluid w-100" src={courses} alt="Courses" />
          </Link>
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={6000}>
        <div className="tintDiv">
          <Link to="/medics">
            <img
              className="slide fluid w-100"
              src={medics}
              alt="Event Medics"
            />
          </Link>
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={6000}>
        <div className="tintDiv">
          <Link to="/screening">
            <img
              className="slide fluid w-100"
              src={health}
              alt="Health Screening"
            />
          </Link>
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slides;
