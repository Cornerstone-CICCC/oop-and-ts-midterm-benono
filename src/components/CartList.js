import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: {} };
    this.updateCart = this.updateCart.bind(this);
    this.props.cartContext.subscribe(this.updateCart);
    this.productsListElement = null;
    this.cartElement = null;
    this.summaryElement = null;
  }

  updateCart(cart) {
    // cart is coming from context
    this.state.cart = cart;

    // Clear the current ul
    this.productsListElement.innerHTML = "";

    // Iterate over cart items
    this.state.cart.forEach((item) => {
      const cartItem = new CartItem({
        product: item.product,
        quantity: item.quantity,
        cartContext: this.props.cartContext,
      });
      this.productsListElement.appendChild(cartItem.render());
    });
    this.summaryElement.innerHTML = `
      <p>Total Quantity: ${this.props.cartContext.getTotalQuantity()}</p>
      <p>Total Price: $${this.props.cartContext.getTotalPrice()}</p>
    `;
  }

  render() {
    const cartElement = document.createElement("div");
    cartElement.className = "mt-2 p-4 bg-white rounded-md";
    cartElement.innerHTML = `
      <h3>Shopping Cart</h3>
      <ul></ul>
    `;

    this.cartElement = cartElement;
    const summary = document.createElement("div");
    this.summaryElement = summary;
    this.cartElement.appendChild(summary);
    this.productsListElement = cartElement.querySelector("ul");

    return cartElement;
  }
}
