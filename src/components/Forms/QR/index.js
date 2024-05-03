import React from "react";
import PayButton from "../../Button";
import { GrVisa } from "react-icons/gr";
import { BsQrCode } from "react-icons/bs";

const VisaQR = () => {
  return (
    <div className="bank-container">
      <div className="visa-cnt">
        <span>
          <GrVisa size={20} />
        </span>

        <div className="scan">
          <h1 className="scan-txt">
            {" "}
            Scan the QR code below in your Ecobank, FirstBank, AccessBank Mobile
            App to complete payment{" "}
          </h1>
          <span className="scan-icon-container">
            <BsQrCode size={70} className="scan-icon" />
          </span>
        </div>
      </div>

      <div className="button-container">
        <PayButton title={"Confirm payment"} />
      </div>
    </div>
  );
};

export default VisaQR;
