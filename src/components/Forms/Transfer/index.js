import React, { useState, useEffect } from "react";
import PayButton from "../../Button";
import { BiCopy } from "react-icons/bi";

const Transfer = ({ currency, amount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the count by 1 until it reaches 30
      if (count < 30) {
        setCount(count + 1);
      }
    }, 1000); // Update the count every 1000 milliseconds (1 second)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [count]);
  return (
    <div className="bank-container">
      <div className="transfer-money">
        {" "}
        <span className="transfer">
          {" "}
          Transfer {currency} {amount} to{" "}
        </span>
      </div>
      <div className="checkout-container">
        <span className=" checkout-title"> Paystack Checkout </span>

        <div className="zenith-container">
          <h1 className="zenith">Zenith Bank </h1>
          <span className="bank-acct-cont">
            <h3 className="acct">0004748293 </h3>{" "}
            <BiCopy size={20} className="copy-acct" />
          </span>
        </div>

        <span className="expires">
          Expires in 30:{count < 9 ? `0${count}` : count}
        </span>
      </div>

      <div className="button-container">
        <PayButton outline={true} title={"I've sent the money"} />
      </div>
    </div>
  );
};

export default Transfer;
