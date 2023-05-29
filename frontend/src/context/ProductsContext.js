import React from "react";
import { createContext, useReducer } from "react";

//the PROVIDER component defines context and provides data//

//context class (these are so u can share data between components)
export const ProductsContext = createContext();

export const productsReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        products: action.payload,
      };
    case "CREATE_PRODUCT":
      return {
        products: [action.payload, ...state.products],
      };
    default:
      return state;
  }
};

//let components access this context by wrapping in a context provider component:
export const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, { products: null });

  return (
    <ProductsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};
