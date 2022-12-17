export const incrementOrder = (price, index) => {
  return {
    type: "inc",
    payload: { price, index },
  };
};

export const decrementOrder = (price, index) => {
  return {
    type: "dec",
    payload: { price, index },
  };
};
