import { Component } from "../common/Component.js";
import { ProductList } from "./ProductList.js";
import { CartList } from "./CartList.js";

export class App extends Component {
  render() {
    const container = document.createElement("div");
    container.className = "mx-auto";
    container.innerHTML = `
    <h1>products</h1>
    <div class='content-wrapper flex flex-col lg:flex-row gap-4 px-10 justify-center'>
      <div class='cart w-full lg:w-[40%] lg:max-w-[450px]  lg:order-2'></div>
      <div class='product-list w-full lg:w-[60%]  lg:order-1'></div>
    </div>
    `;

    //const wrapper = container.querySelector(".content-wrapper");
    const productList = new ProductList({
      cartContext: this.props.cartContext,
    });
    const cartList = new CartList({
      cartContext: this.props.cartContext,
    });
    container.querySelector(".cart").appendChild(cartList.render());

    // fetch & mount
    productList.mount(container.querySelector(".product-list"));

    return container;
  }
}
