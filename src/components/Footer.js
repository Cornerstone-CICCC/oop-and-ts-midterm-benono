import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement("footer");
    footer.className = "bg-[#F6FAF5] py-6 mt-8";
    footer.innerHTML = `
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between items-center">
          <div class="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h2 class="text-xl font-semibold text-[#2C2319]">OOP Store</h2>
            <p class="mt-2 text-sm ">Quality products for your everyday needs</p>
          </div>
          <div class="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <p class="text-sm text-[#2C2319]">&copy; 2024 OOP Store. All rights reserved.</p>
          </div>
          <div class="w-full md:w-1/3 text-center md:text-right">
            <a href="#" class="text-[#ABBAA9] hover:text-[#2C2319] transition-colors mx-2">Privacy Policy</a>
            <a href="#" class="text-[#ABBAA9] hover:text-[#2C2319] transition-colors mx-2">Terms of Service</a>
          </div>
        </div>
      </div>
    `;
    return footer;
  }
}
