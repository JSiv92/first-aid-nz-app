import React from "react";
import "./Footer.css";

const Footer = () => {
  //get date for copyright
  const year = new Date().getFullYear();

  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list">
              <li>address</li>
              <li>phone</li>
              <li>email</li>
            </ul>
          </div>
          <div className="col">
            <ul className="list">
              <li>address</li>
              <li>phone</li>
              <li>email</li>
            </ul>
          </div>
          <div className="col">
            <ul className="list">
              <li>address</li>
              <li>phone</li>
              <li>email</li>
            </ul>
          </div>
        </div>
        <br />
        <div className="row">
          <p>{`© ${year} First Aid NZ Ltd`}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
