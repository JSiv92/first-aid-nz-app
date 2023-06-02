import React, { useReducer, createContext } from "react";

const initialState = {
  cart: {},
};

const Context = createContext({});

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, name, price } = action.payload;
      const existingItem = state.cart[id];

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          qty: existingItem.qty + 1,
        };

        return {
          ...state,
          cart: {
            ...state.cart,
            [id]: updatedItem,
          },
        };
      } else {
        const newItem = {
          id,
          name,
          price,
          qty: 1,
        };

        return {
          ...state,
          cart: {
            ...state.cart,
            [id]: newItem,
          },
        };
      }

    case "REMOVE_FROM_CART":
      const { [action.payload]: removedItem, ...restOfCart } = state.cart;
      return {
        ...state,
        cart: restOfCart,
      };

    default:
      return state;
  }
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
