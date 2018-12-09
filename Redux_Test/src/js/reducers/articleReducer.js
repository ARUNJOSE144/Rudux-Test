import {
  ADD_ARTICLE,
  DELETE_ARTICLE
} from "../constants/action-types";

const articleReducer = (state = [], action) => {
  //alert("inside the Article action reducer----"+action.type);
  switch (action.type) {

    case ADD_ARTICLE:
      return [...state, action.payload];

    case DELETE_ARTICLE:
      return [...state, action.payload];
    default:
      return state;


  }
};

export default articleReducer;