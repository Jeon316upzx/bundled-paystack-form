import React from "react";
import PayButton from "../../Button";

export const Bank = () => {
  return (
    <div className="py-10 transition-all ease-in-out delay-150">
      <div className="rounded-md bg-gray-100 min-h-20 p-10 flex flex-col justify-center items-center">
        <span className="bg-green-400 text-black px-1 text-[1rem]"> 131</span>
        <span className="text-xs text-center py-3 text-gray-500">
          Dial the code below to complete this transaction with your bank's
          code.
        </span>

        <h1> *137 * 33 * 5*448399#</h1>
        <span className="text-xs text-center py-3 text-gray-500">
          Click to copy
        </span>
      </div>

      <div className="grid grid-cols-1 pt-5">
        <PayButton title={"Or pay with internet banking"} />
      </div>
    </div>
  );
};

export default Bank;
