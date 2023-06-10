import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const CourseList = () => {
  return (
    <div className="courseInfo">
      <h4>
        <i class="fa-solid fa-hand-holding-heart"></i>
        <strong> Courses We Offer</strong>
      </h4>
      <hr />
      <p>
        Please contact{" "}
        <strong>
          <a href="mailto:helen@firstaidnz.co.nz">helen@firstaidnz.co.nz</a>
        </strong>{" "}
        for all course inquiries
      </p>
      <p className="text-center p-3">
        <i class="fa-solid fa-triangle-exclamation"></i> If you need to be
        assessed against NZQA Standards,{" "}
        <mark>please advise at time of booking</mark>.
      </p>

      <Container>
        <Row>
          <Col className="border solid p-3" sm={12} md={6}>
            <p className="h5 text-fanzGreen">
              <strong>Workplace First Aid</strong>
            </p>
            <p className="text-fanzLightGreen">
              <em>
                <small>
                  NZQA Unit Standards: 6401, 6402 & 6400 (4 credits) - must be
                  requested at time of booking
                </small>
              </em>
            </p>
            <p>
              Learners credited with these standards will be able to assess and
              manage a range of life threatening situations using acceptable
              first aid practices until medical help arrives.
            </p>
          </Col>
          <Col className="border solid p-3" sm={12} md={6}>
            <p className="h5 text-fanzGreen">
              <strong>Workplace First Aid Refresher</strong>
            </p>
            <p className="text-fanzLightGreen">
              <em>
                <small></small>
              </em>
            </p>
            <p>
              Refresher training for those who have completed Workplace First
              Aid
            </p>
          </Col>
          <Col className="border solid p-3" sm={12} md={6}>
            <p className="h5 text-fanzGreen">
              <strong>Workplace First Aid Express</strong>
            </p>
            <p className="text-fanzLightGreen">
              <em>
                <small>
                  NZQA Unit Standards: 6402 & 6401 (2 credits) - must be
                  requested at time of booking
                </small>
              </em>
            </p>
            <p>
              Learners credited with these two standards will be able to assess
              an emergency situation for hazards, assess and manage patient/s
              for life-threatening conditions and provide appropriate first aid
              responses.
            </p>
          </Col>
          <Col className="border solid p-3" sm={12} md={6}>
            <p className="h5 text-fanzGreen">
              <strong>Electrical Competency Course</strong>
            </p>
            <p className="text-fanzLightGreen">
              <em>
                <small>In compliance with EWRB standards.</small>
              </em>
            </p>
            <p>
              Covers the EWRB requirements for registration or renewal of a
              practicing licence for electricians, electrical apprentices and
              electrical workers.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="border solid p-3" sm={12} md={6}>
            <p className="h5 text-fanzGreen">
              <strong>Child First Aid</strong>
            </p>
            <p className="text-fanzLightGreen">
              <em>
                <small>NZQA Unit Standards: 25459 (1 credit) </small>
              </em>
            </p>
            <p>
              Learners credited with this standard will be able to provide first
              aid for young children.
            </p>
          </Col>
          <Col className="border solid p-3" sm={12} md={6}>
            <p className="h5 text-fanzGreen">
              <strong>Basic Life Support</strong>
            </p>
            <p className="text-fanzLightGreen">
              <em>
                <small>NZQA Unit Standards: 6402 (1 credit)</small>
              </em>
            </p>
            <p>
              Learners credited with these standards will be able to do first
              aid for life threatening conditions
            </p>
          </Col>
          <Col className="border solid p-3" sm={12} md={6}>
            <p className="h5 text-fanzGreen">
              <strong>Outdoor First Aid</strong>
            </p>
            <p className="text-fanzLightGreen">
              <em>
                <small></small>
              </em>
            </p>
            <p>
              Learners are able to assess a patient's condition & manage
              long-term emergency care in an outdoor recreation enviroment.
            </p>
          </Col>
          <Col className="border solid p-3" sm={12} md={6}>
            <p className="h5 text-fanzGreen">
              <strong>Poolside & Rescue First Aid</strong>
            </p>
            <p className="text-fanzLightGreen">
              <em>
                <small>NZQA Unit Standards: on request</small>
              </em>
            </p>
            <p>
              A course specifically designed for those people working around
              swimming pools
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="border solid p-3" sm={12} md={6}>
            <p className="h5 text-fanzGreen">
              <strong>Recreational & Fitness Centre First Aid</strong>
            </p>
            <p className="text-fanzLightGreen">
              <em>
                <small>NZQA Unit Standards: on request</small>
              </em>
            </p>
            <p>
              This course is specifically designed for people working at
              gymnasiums and/or are involved in sport.
            </p>
          </Col>
          <Col className="border solid p-3" sm={12} md={6}>
            <p className="h5 text-fanzGreen">
              <strong>Demonstrate Knowledge & Use of an AED</strong>
            </p>
            <p className="text-fanzLightGreen">
              <em>
                <small></small>
              </em>
            </p>
            <p>
              Learners on this course will be able to demonstrate the use of an
              AED, be able to recognise when an AED is required and have the
              ability to demonstrate effective management of the emergency
              situation.
            </p>
          </Col>
          <Col className="border solid p-3" sm={12} md={6}>
            <p className="h5 text-fanzGreen">
              <strong>Backcare & Manual Handling</strong>
            </p>
            <p className="text-fanzLightGreen">
              <em>
                <small></small>
              </em>
            </p>
            <p>
              Designed for people who want to understand the function of the
              spine. They will be able to identfy risk factors for back injury,
              apply back care techniques and control measures to reduce the risk
              of back injury.
            </p>
          </Col>
          <Col className="border solid p-3" sm={12} md={6}>
            <p className="h5 text-fanzGreen">
              <strong>Health & Safety in the Workplace</strong>
            </p>
            <p className="text-fanzLightGreen">
              <em>
                <small>NZQA Unit Standards: 497 (3 credits)</small>
              </em>
            </p>
            <p>
              Learners credited with this unit standard will be competent in
              identifying and describing legislative rights and responsibilities
              for workplace health and safety, describe the systems approach to
              workplace health and safety and explain how hazards are defined in
              the HSE Act.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseList;
