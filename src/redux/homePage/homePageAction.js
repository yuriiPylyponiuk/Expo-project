import * as types from "./homePageActionsTypes";

export const setTodosList = (payload) => {
  return { type: types.ADD_FEW, payload };
};
export const createNew = (payload) => {
  return { type: types.CREATE_NEW, payload };
};
