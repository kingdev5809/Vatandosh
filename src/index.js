import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "./reduxToolkit/store";

import Routes from "./routes";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "./assets/style/global.scss";
import "./assets/style/Footer.scss";
import "./assets/style/Header.scss";
import i18 from "./services/i18n/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback="">
      <Provider store={store}>
        <Routes />
      </Provider>
    </Suspense>
  </React.StrictMode>
);