import * as types from "./themeActionsTypes";

export const setBackgroundColor = (payload) => {
  return { type: types.SAVE_BACKGROUNG_COLOR, payload };
};
export const resertBackgroundColor = (payload) => {
  return { type: types.RESET_BACKGROUNG_COLOR, payload };
};
