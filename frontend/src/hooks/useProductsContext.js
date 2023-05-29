import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";

export const useProductsContext = () => {
  const context = useContext(ProductsContext);

  //check context is in scope
  if (!context) {
    throw Error(
      "useProductsContext must be used inside ProductsContextProvider"
    );
  }

  return context;
};
