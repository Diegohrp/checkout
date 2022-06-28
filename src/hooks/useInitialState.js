import React from 'react';
import initialState from '../initialState';

function useInitialState() {
  const [state, setState] = React.useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload),
    });
  };

  const addToBuy = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };
  return {
    state,
    addToCart,
    removeFromCart,
    addToBuy,
  };
}

export { useInitialState };
