import * as types from "./todoActionsTypes";

const initialState = {
  todoList: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NEW_TODO: {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    }
    default:
      return state;
  }
}
