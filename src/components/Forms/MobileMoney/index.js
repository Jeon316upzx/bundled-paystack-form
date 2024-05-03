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
    <div className="bank-container">
      <div className="mobile">
        <span>
          <BiMobile size={24} />
        </span>
        <span className="dial-desc">
          Use the mobile money number below to start payment
        </span>
      </div>

      <form onSubmit={formik.handleSubmit} className="mobile-form">
        <div className="h-26 relative">
          <label htmlFor="card_number" className="label">
            Mobile number
          </label>
          <input
            id={"mobile_number"}
            name={"mobile_number"}
            type="text"
            onChange={formik.handleChange}
            value={formik.values.mobile_number}
            className="input"
            placeholder="0893939302"
          />
        </div>

        <div className="button-container">
          <PayButton title={"Confirm"} />
        </div>
      </form>
    </div>
  );
};

export default MobileMoney;
