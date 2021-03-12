export class ShoppingCartItem {  
  key: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;

  constructor(init?: Partial<ShoppingCartItem>) {
    this.key = init["product"]["key"];
    this.title = init["product"]["title"];
    this.imageUrl = init["product"]["imageUrl"];
    this.price = init["product"]["price"];
    this.quantity = init["quantity"];
  }

  get totalPrice() {
    return this.quantity * this.price;
  }
}
