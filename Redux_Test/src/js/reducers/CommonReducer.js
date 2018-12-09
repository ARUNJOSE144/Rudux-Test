
const commonReducer = (state = [], action) => {

  switch (action.actionType) {
    case "COMMON_ACTION":
      return [...state, action.payload];
    default:
      return state;
  }
};




export default commonReducer;