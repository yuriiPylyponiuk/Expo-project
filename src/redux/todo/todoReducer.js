import * as types from "./todoActionsTypes";

const initialState = {
  todoList: [],
  showList: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NEW_TODO: {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
        showList: true,
      };
    }
    case types.DELETE_ONE: {
      return {
        ...state,
        todoList: action.payload,
        showList: true,
      };
    }
    default:
      return state;
  }
}
