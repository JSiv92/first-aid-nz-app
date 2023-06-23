import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CourseLocations = () => {
  return (
    <div className="courseInfo">
      <h4>
        <i class="fa-solid fa-location-dot"></i>
        <strong> Course Locations</strong>
      </h4>
      <hr />
      <Row className="gx-5 gy-5">
        <Col sm={12} md={6}>
          <h5 className="text-fanzGreen text-center">North Auckland</h5>
          <p>
            <strong>Venue</strong> - Milford Cruising Club
          </p>
          <p>
            <strong>Address</strong> - 24 Craig Road, Milford
          </p>
          <p>
            <i class="fa-solid fa-square-parking fa-xl"></i> Street Parking
            Available
          </p>
          <div className="responsive-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.1892416928454!2d174.76320701235218!3d-36.76602737477448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d39e4fb5deda9%3A0x696135d42a99cf94!2s24%20Craig%20Road%2C%20Milford%2C%20Auckland%200620!5e0!3m2!1sen!2snz!4v1687492460522!5m2!1sen!2snz"
              title="north"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <h5 className="text-fanzGreen text-center">Central Auckland</h5>
          <p>
            <strong>Venue</strong> - Epsom Community Centre
          </p>
          <p>
            <strong>Address</strong> - 202 Gillies Ave, Epsom
          </p>
          <p>
            <i class="fa-solid fa-square-parking fa-xl"></i> Parking Available
          </p>
          <div className="responsive-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.149206468936!2d174.76854227679146!3d-36.88677868163244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d462a316c0735%3A0x9fbcadcc9b286144!2sEpsom%20Community%20Centre!5e0!3m2!1sen!2snz!4v1687492146900!5m2!1sen!2snz"
              allowfullscreen=""
              title="epsom"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>

      <hr />

      <Row className="gx-5 gy-5">
        <Col sm={12} md={6}>
          <h5 className="text-fanzGreen text-center">West Auckland</h5>
          <p>
            <strong>Venue</strong> - Te Atatu Peninsula Community Centre
          </p>
          <p>
            <strong>Address</strong> - 595 Te Atatu Road, Te Atatu Peninsula
          </p>
          <p>
            <i class="fa-solid fa-square-parking fa-xl"></i> Parking Available
          </p>

          <div className="responsive-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12772.095993382503!2d174.63395005541994!3d-36.841901299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4086897e2b51%3A0x57c43ed83c2b0b33!2sTe%20Atatu%20Peninsula%20Community%20Centre%20and%20Library!5e0!3m2!1sen!2snz!4v1687493304557!5m2!1sen!2snz"
              title="west"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <h5 className="text-fanzGreen text-center">South Auckland</h5>
          <p>
            <strong>Venue</strong> - Electrical Industry Training Building
          </p>
          <p>
            <strong>Address</strong> - 501F Mt Wellington Highway, Mt Wellington
          </p>
          <p>
            <i class="fa-solid fa-square-parking fa-xl"></i> Parking Available
          </p>

          <div className="responsive-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.6056911532705!2d174.83821561235834!3d-36.9236910835815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d49d96f740a83%3A0x24e9bd3846274d9!2sElectrical%20Industry%20Training%20Limited!5e0!3m2!1sen!2snz!4v1687493381058!5m2!1sen!2snz"
              title="south"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>

      <hr />

      <Row className="gx-5 gy-5">
        <Col sm={12} md={6}>
          <h5 className="text-fanzGreen text-center">East Auckland</h5>
          <p>
            <strong>Venue</strong> - Pakuranga Tennis Club
          </p>
          <p>
            <strong>Address</strong> - 101 Pigeon Mountain Rd, Half Moon Bay /
            Pakuranga
          </p>
          <p>
            <i class="fa-solid fa-square-parking fa-xl"></i> Gill Road, opposite
            the Tennis Club, by the reserve.
          </p>
          <p>
            {" "}
            <i class="fa-solid fa-triangle-exclamation fa-sm"></i> Please avoid
            using tennis club parking on Wednesdays.
          </p>

          <div className="responsive-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.149206468936!2d174.76854227679146!3d-36.88677868163244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d462a316c0735%3A0x9fbcadcc9b286144!2sEpsom%20Community%20Centre!5e0!3m2!1sen!2snz!4v1687492146900!5m2!1sen!2snz"
              allowfullscreen=""
              title="epsom"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <h5 className="text-fanzGreen text-center">Tauranga</h5>
          <p>
            <strong>Venue</strong> - Tauranga Volunteer Coastguard (Gresham
            Room)
          </p>
          <p>
            <strong>Address</strong> - 72 Keith Allen Drive, Sulphur Point
          </p>
          <p>
            <i class="fa-solid fa-square-parking fa-xl"></i> Parking Available
          </p>
          <p>
            {" "}
            <br />
          </p>

          <div className="responsive-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2580.331769445319!2d176.16718431626356!3d-37.661798347951844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6ddbf882cf2ae9%3A0xc3f9f28f50a6cc9f!2sTauranga%20Volunteer%20Coastguard%20Association!5e0!3m2!1sen!2snz!4v1687491035373!5m2!1sen!2snz"
              title="tga"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>

      <hr />
    </div>
  );
};

export default CourseLocations;
