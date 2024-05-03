import React from "react";
import PayButton from "../../Button";

export const Bank = () => {
  return (
    <div className="bank-container">
      <div className="dial-container">
        <span className="one31"> 131</span>
        <span className="dial-desc">
          Dial the code below to complete this transaction with your bank's
          code.
        </span>

        <h1> *137 * 33 * 5*448399#</h1>
        <span className="copy">
          Click to copy
        </span>
      </div>

      <div className="button-container">
        <PayButton title={"Or pay with internet banking"} />
      </div>
    </div>
  );
};

export default Bank;
