import React, { useReducer, createContext } from "react";

const initialState = {
  cart: [],
  totalPrice: 0,
};

const Context = createContext({});

const calculateTotalPrice = (cart) => {
  return cart.reduce(
    (total, item) => total + item.qty * item.convertedPrice,
    0
  );
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { name, convertedPrice } = action.payload;
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
          convertedPrice: convertedPrice, // Include the converted price in the cart item
        };

        const totalPrice = calculateTotalPrice([...state.cart, newProduct]);

        return {
          ...state,
          cart: [...state.cart, newProduct],
          totalPrice: totalPrice,
        };
      }
    case "DECREASE_QUANTITY":
      const { id } = action.payload;
      const updatedCart = state.cart
        .map((item) => {
          if (item.id === id) {
            // Decrease quantity by 1, or remove the item if quantity becomes 0
            const updatedQty = item.qty - 1;
            return updatedQty > 0 ? { ...item, qty: updatedQty } : null;
          }
          return item;
        })
        .filter(Boolean); // Filter out null values from the cart

      const totalPrice = calculateTotalPrice(updatedCart);

      return {
        ...state,
        cart: updatedCart,
        totalPrice: totalPrice,
      };

    case "INCREMENT_QUANTITY":
      const { id: incrementId } = action.payload;
      const updatedCartIncrement = state.cart.map((item) => {
        if (item.id === incrementId) {
          // Increment quantity by 1
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });

      const totalPriceIncrement = calculateTotalPrice(updatedCartIncrement);

      return {
        ...state,
        cart: updatedCartIncrement,
        totalPrice: totalPriceIncrement,
      };

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
