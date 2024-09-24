import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }
  increaseQuantity() {
    this.props.cartContext.increaseQuantity(this.props.product.id);
  }
  decreaseQuantity() {
    this.props.cartContext.decreaseQuantity(this.props.product.id);
  }
  removeProduct() {
    this.props.cartContext.removeProduct(this.props.product.id);
  }
  render() {
    const cart = document.createElement("li");
    cart.className =
      "flex items-center p-4 rounded-md  first:border-t border-b border-[#E7E7E7]";
    cart.innerHTML = `
      <div class="w-16 h-16 flex-shrink-0 mr-4">
        <img src="${this.props.product.image}" alt="${this.props.product.title}" class="w-full h-full object-cover">
      </div>
      <div class="flex flex-col justify-between flex-grow gap-2">
        <div class="flex flex-col">
          <h3 class="cart-item-title">${this.props.product.title}</h3>
          <p class="cart-item-price">$${this.props.product.price}</p>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <button class="quantity-decrease px-2 py-1 bg-gray-200 rounded-l">-</button>
            <span class="cart-item-quantity px-4">${this.props.quantity}</span>
            <button class="quantity-increase px-2 py-1 bg-gray-200 rounded-r">+</button>
          </div>
          <button class="cart-item-remove">Remove</button>
        </div>
        
      </div>
    `;
    const quantityDecrease = cart.querySelector(".quantity-decrease");
    const quantityIncrease = cart.querySelector(".quantity-increase");
    const cartItemRemove = cart.querySelector(".cart-item-remove");
    quantityDecrease.addEventListener("click", this.decreaseQuantity);
    quantityIncrease.addEventListener("click", this.increaseQuantity);
    cartItemRemove.addEventListener("click", this.removeProduct);
    return cart;
  }
}
