export class CartContext {
  constructor() {
    this.cartItems = [];
    this.cartItemsMap = new Map();
    this.listeners = [];
  }

  getCart() {
    return this.cartItems;
  }

  getTotalQuantity() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  getCartSummary() {
    return {
      totalQuantity: this.getTotalQuantity(),
      totalPrice: this.getTotalPrice(),
    };
  }

  addProduct(product) {
    if (this.cartItemsMap.has(product.id)) {
      const item = this.cartItemsMap.get(product.id);
      item.quantity += 1;
    } else {
      const newItem = { product, quantity: 1 };
      this.cartItems.push(newItem);
      this.cartItemsMap.set(product.id, newItem);
    }
    this.notifyListeners();
  }

  increaseQuantity(productId) {
    if (this.cartItemsMap.has(productId)) {
      const item = this.cartItemsMap.get(productId);
      item.quantity += 1;
      this.notifyListeners();
    }
  }

  decreaseQuantity(productId) {
    if (this.cartItemsMap.has(productId)) {
      const item = this.cartItemsMap.get(productId);
      item.quantity -= 1;
      if (item.quantity <= 0) {
        this.removeProduct(productId);
      } else {
        this.notifyListeners();
      }
    }
  }

  removeProduct(productId) {
    if (this.cartItemsMap.has(productId)) {
      const index = this.cartItems.findIndex(
        (item) => item.product.id === productId
      );
      if (index !== -1) {
        this.cartItems.splice(index, 1);
        this.cartItemsMap.delete(productId);
        this.notifyListeners();
      }
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.getCart()));
  }
}
