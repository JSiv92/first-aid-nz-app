import React, { useReducer, createContext } from "react";

const initialState = {
  cart: [],
  totalPrice: 0,
};

const Context = createContext({});

const calculateTotalPrice = (cart) => {
  return cart.reduce((total, item) => total + item.qty * item.price, 0);
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { name } = action.payload;
      const existingItem = state.cart.find((item) => item.name === name);

      if (existingItem) {
        // If a product with the same name exists in the cart, update the quantity+1
        const updatedCart = state.cart.map((item) =>
          item.name === name && item.id === existingItem.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );

        const totalPrice = calculateTotalPrice(updatedCart);

        return {
          ...state,
          cart: updatedCart,
          totalPrice: totalPrice,
        };
      } else {
        // If the product doesn't exist, add it to cart
        const newProductId = `${name}_${Date.now()}`;
        const newProduct = {
          id: newProductId,
          ...action.payload,
          qty: 1,
        };

        const totalPrice = calculateTotalPrice([...state.cart, newProduct]);

        return {
          ...state,
          cart: [...state.cart, newProduct],
          totalPrice: totalPrice,
        };
      }
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch, totalPrice: state.totalPrice }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
