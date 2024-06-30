import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducers";
import { counterReducer } from "./reducers/counterReducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


// npm i redux-thunk
// npm i @redux-devtools/extension