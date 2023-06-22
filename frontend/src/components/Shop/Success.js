import React from "react";
import "./Payment.css";

const SuccessPage = () => {
  return (
    <div className="page">
      <div className="content">
        <div className="payment p-5">
          <h2 className="title">Payment Successful</h2>
          <br />
          <p>Thank you for your purchase!</p>
          <p>Please check your email for details regarding your purchase.</p>
          <p>
            For order queries please email us:{" "}
            <a className="text-fanzGreen" href="mailto:info@firstaidnz.co.nz">
              info@firstaidnz.co.nz
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
