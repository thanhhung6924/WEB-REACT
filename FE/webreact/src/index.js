import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import RouterCustom from "./router";
import Globle from "./components/Globle/Globle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Globle>
    <BrowserRouter>
      <RouterCustom></RouterCustom>
    </BrowserRouter>
  </Globle>
);
