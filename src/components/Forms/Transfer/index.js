import React, {useState, useEffect} from "react";
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
    <div className="py-10 transition-all ease-in-out delay-150">
      <div className="flex justify-center py-1">
        {" "}
        <span className=" text-gray-400 px-1 text-sm"> Transfer {currency} {amount} to </span>
      </div>
      <div className="rounded-md bg-gray-100 min-h-20 px-10 py-5 flex flex-col justify-center items-center">
        <span className=" text-gray-400 px-1 text-sm"> Paystack Checkout </span>
        <span className="text-xs text-center py-3 text-gray-500"></span>

        <div className="flex flex-col text-center">
          <h1 className="text-xl">Zenith Bank </h1>
          <span className="flex flex-row items-center">
            <h3 className="text-2xl">0004748293 </h3>{" "}
            <BiCopy size={20} className="ml-2 opacity-30" />
          </span>
        </div>

        <span className="text-xs text-center py-3 text-gray-400">
          Expires in 30:{count < 9 ? `0${count}`: count}
        </span>
      </div>

      <div className="grid grid-cols-1 pt-5">
        <PayButton outline={true} title={"I've sent the money"} />
      </div>
    </div>
  );
};

export default Transfer;
