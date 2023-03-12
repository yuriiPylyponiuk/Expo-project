import { combineReducers } from "redux";
import ListOfTodos from "./homePage/homePageReducer";
import ThemeReducer from "./theme/themeReducer";
import TodoReducer from "./todo/todoReducer";

export const rootReducer = combineReducers({
  todo: TodoReducer,
  titles: ListOfTodos,
  theme: ThemeReducer,
});
