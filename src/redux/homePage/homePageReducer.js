import * as types from "./homePageAction";

const initialState = {
  listOfTitles: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NEW_TODO: {
      return {
        ...state,
        listOfTitles: action.payload,
      };
    }

    default:
      return state;
  }
}
