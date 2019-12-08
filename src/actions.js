export const addToCart = payload => {
  return {
    type: "ADD_TO_CART",
    payload: payload
  };
};

export const getItemsCart = () => {
  return {
    type: "GET_ITEMS_CART"
  };
};
