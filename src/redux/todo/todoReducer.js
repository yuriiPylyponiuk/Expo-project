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
        todoList: [action.payload, ...state.todoList],
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
    case types.DONE_ONE: {
      return {
        ...state,
        todoList: action.payload,
        showList: true,
      };
    }
    case types.FILL_FROM_STORE: {
      return {
        ...state,
        todoList: action.payload,
        showList: true,
      };
    }
    case types.RESET_ALL_DATA: {
      return {
        ...state,
        todoList: [],
        showList: false,
      };
    }
    default:
      return state;
  }
}
