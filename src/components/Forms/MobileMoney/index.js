import React from "react";
import { useFormik } from "formik";
import PayButton from "../../Button";
import { BiMobile } from "react-icons/bi";

const MobileMoney = () => {
  const formik = useFormik({
    initialValues: {
      mobile_number: "",
    },
    onSubmit: (values) => {},
  });
  return (
    <div className="py-10 transition-all ease-in-out delay-150">
      <div className="rounded-md bg-gray-100 min-h-20 p-10 flex flex-col justify-center items-center">
        <span>
          <BiMobile size={24} />
        </span>
        <span className="text-xs text-center py-3 text-gray-500">
          Use the mobile money number below to start payment
        </span>
      </div>

      <form onSubmit={formik.handleSubmit} className="pt-2">
        <div className="h-26 relative">
          <label
            htmlFor="card_number"
            className="uppercase absolute top-3 text-[12px] left-4 text-gray-400"
          >
            Mobile number
          </label>
          <input
            id={"mobile_number"}
            name={"mobile_number"}
            type="text"
            onChange={formik.handleChange}
            value={formik.values.mobile_number}
            className="h-26 w-full px-4 pt-8 pb-3  text-sm border-solid border-2 border-gray-100 hover:border-green-50 placeholder-grey-300 rounded-md"
            placeholder="0893939302"
          />
        </div>

        <div className="grid grid-cols-1 pt-5">
          <PayButton title={"Confirm"} />
        </div>
      </form>
    </div>
  );
};

export default MobileMoney;
