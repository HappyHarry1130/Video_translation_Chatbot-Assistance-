
import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";
import selectionReducer from "./selectionReducer";
const rootReducer = combineReducers(
    {
        todo: todoReducer,
        counter: counterReducer,
        selections: selectionReducer
    },
);

export default rootReducer;