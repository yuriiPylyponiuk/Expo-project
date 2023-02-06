import * as types from "./todoActionsTypes";

export const addNewTodo = (payload) => {
  return { type: types.ADD_NEW_TODO, payload };
};
