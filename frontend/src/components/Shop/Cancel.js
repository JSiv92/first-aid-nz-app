import React from "react";
import "./Payment.css";

const CancelPage = () => {
  return (
    <div className="page">
      <div className="content">
        <div className="payment p-5">
          <h2 className="cancelTitle">Payment Cancelled</h2>
          <br />
          <p>Your order was cancelled.</p>

          <p>
            For all queries please email us:{" "}
            <a className="text-fanzGreen" href="mailto:info@firstaidnz.co.nz">
              info@firstaidnz.co.nz
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;
