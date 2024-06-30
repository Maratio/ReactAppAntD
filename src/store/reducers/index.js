import { combineReducers } from "redux";
import { counterReducer } from "./counterReducers";
import { todoReducer } from "./todoReducer";
import { photoReducer } from "./photoReducer";


export const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer,
    photoReducer: photoReducer
    // photos: photosReducer
})