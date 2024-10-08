import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  render() {
    const product = document.createElement("div");
    product.className =
      "p-5 bg-[#F6FAF5] w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33%-0.5rem)] xl:w-[calc(25%-0.5rem)]  flex flex-col items-center";
    product.innerHTML = `
    <div class="w-full h-60 bg-white flex items-center justify-center overflow-hidden">
  <div class="w-full h-full relative">
    <img 
      src="${this.props.product.image}" 
      alt="${this.props.product.title}" 
      class="absolute inset-0 w-full h-full object-contain"
    >
  </div>
</div>
    <div class='mt-5 w-full text-[#2C2319] flex flex-col jutify-center gap-2'>
      <div class='text-lg text-ellipsis '>${this.props.product.title}</div>
      <div class='text-base'>${this.props.product.price}</div>
      <div class='h-12 truncate text-sm'>${this.props.product.description}</div>
      <button class="bg-transparent hover:bg-[#ABBAA9] text-[#ABBAA9] font-semibold hover:text-white py-2 px-4 border border-[#ABBAA9] hover:border-transparent rounded transition-all duration-300">
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
