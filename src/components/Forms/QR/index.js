import React from "react";
import PayButton from "../../Button";
import { GrVisa } from "react-icons/gr";
import { BsQrCode } from "react-icons/bs";


const VisaQR = () => {
  return (
    <div className="py-10 transition-all ease-in-out delay-150">
      <div className="rounded-md bg-gray-100 min-h-20 px-10 py-5 flex flex-col justify-center items-center">
        <span className=" text-gray-400 px-1 text-sm">
          <GrVisa size={20} />
        </span>

        <div className="flex flex-col text-center">
          <h1 className="text-xs py-2"> Scan the QR code below in your Ecobank, FirstBank, AccessBank Mobile App to complete payment </h1>
          <span className="flex flex-row items-center justify-center">
            <BsQrCode size={70} className="opacity-30 mb-3" />
          </span>
        </div>

      </div>

      <div className="grid grid-cols-1 pt-5">
        <PayButton title={"Confirm payment"} />
      </div>
    </div>
  );
};

export default VisaQR;
