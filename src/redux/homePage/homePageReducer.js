import * as types from "./homePageActionsTypes";

const initialState = {
  listOfTodos: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NEW_TODO: {
      return {
        ...state,
        listOfTodos: action.payload,
      };
    }
    case types.ADD_FEW: {
      return {
        ...state,
        listOfTodos: action.payload,
      };
    }
    case types.CREATE_NEW: {
      return {
        ...state,
        listOfTodos: action.payload,
      };
    }

    default:
      return state;
  }
}
