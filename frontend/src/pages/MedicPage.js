//blank react component for page
import React from "react";
import pic1 from "../assets/pic1.webp";
import pic2 from "../assets/pic2.webp";
import pic3 from "../assets/pic3.webp";
import Image from "react-bootstrap/Image";

import "./MedicPage.css";

//components
import PageHeading from "../components/PageHeading";

const MedicPage = () => {
  return (
    <div className="page">
      <div className="content">
        <PageHeading text="Event Medics" />
        <div className="courseInfo">
          <h4>
            <i class="fa-solid fa-truck-medical"></i>
            <strong> Medics & First Aid Stations</strong>
          </h4>
          <hr />

          <div className="p-3 m-3">
            <p>
              <i class="fa-solid fa-shield-heart"></i> Our ambulances and
              self-contained medical caravan allow us to provide First Aid cover
              for small groups to large crowds. We are equipped to cater for
              single day events or overnight functions.
            </p>
            <p>
              <i class="fa-solid fa-shield-heart"></i> Our highly skilled Event
              Medics personnel have extensive industry based experience. First
              Aid NZ personnel have been involved in events at galas, music
              festivals, derbies, sporting fixtures and car rallies.
            </p>
            <p>
              <i class="fa-solid fa-shield-heart"></i> For more information, or
              to make a booking, please email{" "}
              <strong>shelley@firstaidnz.co.nz</strong>
            </p>
          </div>
          <div className="imagesDiv">
            <Image src={pic1} rounded responsive fluid />
            <Image src={pic2} rounded responsive fluid />
            <Image src={pic3} rounded responsive fluid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicPage;
