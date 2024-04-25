import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import CustomThemeProvider from "./wigets/Theme.jsx";
import { Provider } from 'react-redux';
import { store } from "./ReduxSore/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </CustomThemeProvider>
  </React.StrictMode>
);
