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
      const { product } = action.payload;
      const { _id, name, price, priceId } = product;
      const existingItemIndex = state.cart.findIndex(
        (item) => item._id === _id
      );

      if (existingItemIndex !== -1) {
        // if a product with the same id exists in the cart, update the quantity
        const updatedCart = state.cart.map((item, index) =>
          index === existingItemIndex ? { ...item, qty: item.qty + 1 } : item
        );

        const totalPrice = calculateTotalPrice(updatedCart);

        return {
          ...state,
          cart: updatedCart,
          totalPrice: totalPrice,
        };
      } else {
        // ff the product doesn't exist, add it to cart
        const newProductId = `${_id}_${Date.now()}`;
        const newProduct = {
          id: newProductId,
          _id,
          name,
          price,
          priceId,
          qty: 1,
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
            // decrease quantity by 1, or remove the item if quantity becomes 0
            const updatedQty = item.qty - 1;
            return updatedQty > 0 ? { ...item, qty: updatedQty } : null;
          }
          return item;
        })
        .filter(Boolean); // filter out null values from the cart

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
          // increment quantity by 1
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
