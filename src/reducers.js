const initialState = {
  id: 0,
  item: "",
  quantity: 200
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        id: action.payload.id,
        item: action.payload.item,
        quantity: state.quantity + 1
      };
    case "GET_ITEMS_CART":
      return {
        ...state,
        id: state.id,
        item: state.item,
        quantity: state.quantity
      };

    default:
      return state;
  }
}
