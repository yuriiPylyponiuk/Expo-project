import * as types from "./themeActionsTypes";

const initialState = {
  backGroundColor: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_BACKGROUNG_COLOR: {
      return {
        ...state,
        backGroundColor: action.payload,
      };
    }
    case types.RESET_BACKGROUNG_COLOR: {
      return {
        ...state,
        backGroundColor: action.payload,
      };
    }

    default:
      return state;
  }
}
