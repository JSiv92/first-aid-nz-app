import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//sass converted css custome theme below
import "./css/main.min.css";
import "./index.css";
//context wrapper
import { ProductsContextProvider } from "./context/ProductsContext";
import { Provider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <Provider>
        <App />
      </Provider>
    </ProductsContextProvider>
  </React.StrictMode>
);
