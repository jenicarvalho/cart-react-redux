import React from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Cart from "./Cart";
import cartReducer from "./reducers";

const store = createStore(cartReducer);

store.dispatch({ type: "ADD_TO_CART", payload: { id: 1, item: "iphone x" } });
store.dispatch({ type: "GET_ITEMS_CART" });

function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}

export default App;
