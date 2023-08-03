import filtersReducer from "../components/filters/filtersSlice";
import todoReducer from "../components/todo/todoSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    filter: filtersReducer,
    todoList: todoReducer
})

export default rootReducer;