import { combineReducers } from "redux";
import { photoReducer } from "./photoReducer";
import { themeReducer } from "./themeReducer";


export const rootReducer = combineReducers({
    themeReducer,
    photoReducer
})