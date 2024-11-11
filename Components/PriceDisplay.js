import React from "react";

const PriceDisplay = ({ data }) => {
  const totalPrice = data.reduce((acc, item) => acc + item.prix, 0);

  return (
    <div>
      <h2>Total Price: {totalPrice.toLocaleString()} $ </h2>
    </div>
  );
};

export default PriceDisplay;
