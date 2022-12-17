const initialState = {
  HakkaNoodles: { count: 0, price: 0 },
  Burger: { count: 0, price: 0 },
  Biryani: { count: 0, price: 0 },
  total: { count: 0, price: 0 },
};

export const CountItemsReducer = (state = initialState, action) => {
  // console.log("Current Situation: ", action);

  const getTotalBill = (type) => {
    switch (type) {
      case "inc":
        return {
          count: state.total.count + 1,
          price: state.total.price + action.payload,
        };
      case "dec":
        return {
          count: state.total.count - 1,
          price: state.total.price - action.payload,
        };
      default:
        return state.total;
    }
  };
  switch (action.type) {
    case "incNoodles":
      return {
        ...state,
        HakkaNoodles: {
          count: state.HakkaNoodles.count + 1,
          price: state.HakkaNoodles.price + 140,
        },
        total: getTotalBill("inc"),
      };

    case "decNoodles":
      return {
        ...state,
        HakkaNoodles: {
          count: state.HakkaNoodles.count - 1,
          price: state.HakkaNoodles.price - 140,
        },
        total: getTotalBill("dec"),
      };

    case "incBurger":
      return {
        ...state,
        Burger: {
          count: state.Burger.count + 1,
          price: state.Burger.price + 125,
        },
        total: getTotalBill("inc"),
      };

    case "decBurger":
      return {
        ...state,
        Burger: {
          count: state.Burger.count - 1,
          price: state.Burger.price - 125,
        },
        total: getTotalBill("dec"),
      };

    case "incBiryani":
      return {
        ...state,
        Biryani: {
          count: state.Biryani.count + 1,
          price: state.Biryani.price + 220,
        },
        total: getTotalBill("inc"),
      };

    case "decBiryani":
      return {
        ...state,
        Biryani: {
          count: state.Biryani.count - 1,
          price: state.Biryani.price - 220,
        },
        total: getTotalBill("dec"),
      };
    default:
      return state;
  }
};
