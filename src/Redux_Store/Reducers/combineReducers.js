import { combineReducers } from "@reduxjs/toolkit";
import { expenseReducer } from "./Reducers";

const reducer = combineReducers({expenseReducer})

export default reducer;