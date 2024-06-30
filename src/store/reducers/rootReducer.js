import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { photoReducer } from "./photoReducer";
import { themeReducer } from "./themeReducer";


export const rootReducer = combineReducers({
    themeReducer,
    todos: todoReducer,
    photoReducer: photoReducer
    // photos: photosReducer
})