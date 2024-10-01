import { Component } from "../common/Component.js";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.updateCart = this.updateCart.bind(this);
    this.props.cartContext.subscribe(this.updateCart);
  }

  updateCart(cart) {
    const cartQuantity = document.querySelector(".cart-quantity");
    cartQuantity.textContent = this.props.cartContext.getTotalQuantity();
  }

  render() {
    const header = document.createElement("header");
    header.className =
      "bg-[#F6FAF5] py-4 px-6 flex justify-between items-center ";

    const logo = document.createElement("h1");
    logo.className = "text-2xl font-bold text-[#2C2319]";
    logo.textContent = "OOP Store";

    const cartIcon = document.createElement("div");
    cartIcon.className = "relative cursor-pointer";
    cartIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#ABBAA9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <span class="cart-quantity absolute -top-2 -right-2 bg-[#ABBAA9] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
        ${this.props.cartContext.getTotalQuantity()}
      </span>
    `;

    header.appendChild(logo);
    header.appendChild(cartIcon);

    // レスポンシブ対応
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    // const handleMediaQueryChange = (e) => {
    //   if (e.matches) {
    //     cartIcon.style.position = "absolute";
    //     cartIcon.style.top = "1rem";
    //     cartIcon.style.right = "1rem";
    //   } else {
    //     cartIcon.style.position = "static";
    //   }
    // };

    //mediaQuery.addListener(handleMediaQueryChange);
    //handleMediaQueryChange(mediaQuery);

    return header;
  }
}
