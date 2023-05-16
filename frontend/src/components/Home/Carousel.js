import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

const Slides = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="slide fluid d-block w-100"
          src="medic1.png slide&bg=373940"
          alt="Event Medics"
        />
        <Carousel.Caption>
          <h3 className="display-4">Event Medics</h3>
          <p>
            Our highly skilled Event Medic personnel have extensive industry
            based experience
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="slide fluid w-100"
          src="https://pixabay.com/images/id-850489/ slide&bg=282c34"
          alt="Courses"
        />
        <Carousel.Caption>
          <h3 className="display-4">First Aid Courses</h3>
          <p>
            We pride ourself in the development and delivery of high quality
            NZQA accredited First Aid education
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="slide fluid w-100"
          src=" slide&bg=20232a"
          alt="Drug Screening"
        />
        <Carousel.Caption>
          <h3 className="display-4">Drug Screening</h3>
          <p>
            First Aid NZ can assist you in your workplace to provide a range of
            drug screening services
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="slide fluid d-block w-100"
          src="img.png slide&bg=20232a"
          alt="Health Screening"
        />
        <Carousel.Caption>
          <h3 className="display-4">Health Screening</h3>
          <p>
            We offer blood pressure, diabetes and hearing checks in the
            workplace.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slides;
