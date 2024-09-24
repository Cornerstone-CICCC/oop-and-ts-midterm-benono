import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  render() {
    const product = document.createElement("div");
    product.className = "m-2 p-5 bg-slate-700";
    product.innerHTML = `
    <div class="w-48 h-48 flex-shrink-0">
        <img src="${this.props.product.image}" alt="${this.props.product.title}" class="w-full h-full object-cover overflow-clip">
      </div>
    <div class='mt-5 w-48 text-gray-100 flex flex-col jutify-center gap-2'>
      <div class='text-lg text-ellipsis '>${this.props.product.title}</div>
      <div class='text-base'>${this.props.product.price}</div>
      <div class='h-12 truncate text-sm'>${this.props.product.description}</div>
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Add to Cart
      </button>
    </div>
    `;
    product.querySelector("button").addEventListener("click", () => {
      this.props.cartContext.addProduct(this.props.product);
    });

    return product;
  }
}
