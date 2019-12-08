import React, { Component } from "react";

import { connect } from "react-redux";

class Cart extends Component {
  render() {
    return (
      <div>
        <h1>Meu Carrinho</h1>
        <h2>Item: {this.props.item}</h2>
        <p>id: {this.props.id}</p>
        <p>Total de itens: {this.props.quantity}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    id: state.id,
    item: state.item,
    quantity: state.quantity
  };
}

export default connect(mapStateToProps)(Cart);
