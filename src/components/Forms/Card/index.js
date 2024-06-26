import React, { useState } from "react";
import PayButton from "../../Button";
import { useMutation, gql } from "@apollo/client";

const MAKE_CARD_PAYMENT = gql`
  mutation CreatePayment($data: PaymentCreateInput!) {
    createPayment(data: $data) {
      id
      cardCvv
      cardNumber
      cardExpiry
    }
  }
`;

const Card = () => {
  const [createPayment] = useMutation(MAKE_CARD_PAYMENT);

  const [card_cvv, setcard_cvv] = useState();
  const [card_number, setcard_number] = useState();
  const [card_expiry_date, setcard_expiry_date] = useState();
  const [loading, setLoading] = useState(false);

  const handleNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    const truncatedValue = value.slice(0, 12);
    // Split the value into groups of 4 characters each
    const groupedValue = truncatedValue.match(/.{1,4}/g);

    // Join the groups with a space separator
    const formattedValue = groupedValue ? groupedValue.join(" ") : "";
    setcard_number(formattedValue);
  };

  const handleCVVChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setcard_cvv(value);
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");

    // Ensure month is in the range 01-12
    if (value.length >= 2) {
      const month = value.slice(0, 2);
      value = month.padEnd(2, "0") + " / " + value.slice(2);
    }

    // Truncate the year to 4 characters
    value = value.slice(0, 9);

    // Update the state with the formatted value
    setcard_expiry_date(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const paymentData = {
      cardCvv: card_cvv,
      cardNumber: card_number,
      cardExpiry: card_expiry_date,
      paymentType: "card",
    };
    createPayment({
      variables: { data: paymentData },
    })
      .then((result) => {
        console.log(result);
        setLoading(false);
      })
      .catch((error) => {
        // Handle any errors
        setLoading(false);
        console.error("Error creating note:", error);
      });
  };

  return (
    <div className="input-form-container">
      <form>
        <div className="input-relative">
          <label
            htmlFor="card_number"
            className="label"
          >
            card number
          </label>
          <input
            id={"card_number"}
            name={"card_number"}
            type="text"
            onChange={handleNumberChange}
            value={card_number}
            className="input"
            placeholder="0000 0000 0000 0000"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-2 pt-5">
          <div className="h-26 relative">
            <label
              htmlFor="card_expiry_date"
              className="label"
            >
              card expiry
            </label>
            <input
              id={"card_expiry_date"}
              name={"card_expiry_date"}
              type="text"
              onChange={handleExpiryChange}
              value={card_expiry_date}
              className="input"
              placeholder="MM / YYYY"
              required
            />
          </div>

          <div className="h-26 relative">
            <label
              htmlFor="card_cvv"
              className="label"
            >
              cvv
            </label>
            <input
              id={"card_cvv"}
              name={"card_cvv"}
              type="text"
              onChange={handleCVVChange}
              value={card_cvv}
              className="input"
              placeholder="123"
              maxLength={3}
              required
            />
          </div>
        </div>
        <div
          className="button-container"
          onClick={(event) => handleSubmit(event)}
        >
          <PayButton amount={600} currency={"NGN"} onClick={handleSubmit} loading={loading} />
        </div>
      </form>
    </div>
  );
};

export default Card;
