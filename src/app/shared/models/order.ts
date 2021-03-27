import { ShoppingCart } from "./shopping-cart";

export class Order {
  key : string;
  datePlaced: number;
  items: any[];
  
  constructor(
    public userId: string,
    public shipping: any,
    shoppingCart: ShoppingCart
  ) {

    // get current of created shopping cart
    this.datePlaced = new Date().getTime();

    // mapping items to shoppingCart items
    this.items = shoppingCart.items.map((i) => {
      return {
        product: {
          title: i.title,
          imageUrl: i.imageUrl,
          price: i.price,
        },
        quantity: i.quantity,
        totalPrice: i.totalPrice,
      };
    });
  }
}
