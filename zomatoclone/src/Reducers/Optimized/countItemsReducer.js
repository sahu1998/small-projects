import data from "../../data.json";

const initialState = {
  data,
  totalBill: {
    count: 0,
    bill: 0,
  },
};

export const CountItemsReducer = (state = initialState, action) => {
  //   console.log("Reducer state: ", state);

  switch (action.type) {
    // case "inc":
    //   var tempInc = [...state.data];
    //   var tempObj = tempInc[action.payload.index];
    //   tempObj = {
    //     ...tempObj,
    //     count: tempObj.count + 1,
    //   };
    //   console.log("konsa khana: ", action.payload.price);
    //   tempInc[action.payload.index] = tempObj;
    //   return {
    //     data: tempInc,
    //     totalBill: {
    //       count: state.totalBill.count + 1,
    //       bill: state.totalBill.bill + action.payload.price,
    //     },
    //   };
    case "inc":
      var tempInc = [...state.data];
      tempInc[action.payload.index] = {
        ...tempInc[action.payload.index],
        count: tempInc[action.payload.index].count + 1,
      };
      return {
        data: tempInc,
        totalBill: {
          count: state.totalBill.count + 1,
          bill: state.totalBill.bill + action.payload.price,
        },
      };
    case "dec":
      var tempDec = [...state.data];
      var tempObjDec = tempDec[action.payload.index];
      tempObjDec = {
        ...tempObjDec,
        count: tempObjDec.count - 1,
      };
      tempDec[action.payload.index] = tempObjDec;
      return {
        data: tempDec,
        totalBill: {
          count: state.totalBill.count - 1,
          bill: state.totalBill.bill - action.payload.price,
        },
      };
    default:
      return state;
  }
};
