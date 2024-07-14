import React from "react";
import RouteApp from "./routes/RouteApp.jsx";
import  store  from "./storeToolkit/store.js";
import {Provider} from "react-redux"

const App = () => {
  return (
    <Provider store={store}>
      <RouteApp />
    </Provider>
  );
};
export default App;
