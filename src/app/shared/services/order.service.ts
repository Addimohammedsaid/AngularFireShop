import { ShoppingCartService } from "src/app/shared/services/shopping-cart.service";
import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class OrderService {

  url : string = "orders";

  constructor(
    private db: AngularFirestore,
    private shoppingCartService: ShoppingCartService
  ) {}

  async placeOrder(order) {
    // generate key
    const key = this.db.createId();   

    await this.db.collection(this.url).doc(key).set(Object.assign({}, order));
    
    // clear cart after order    
    await this.shoppingCartService.clearCart();

    return key;
  }

  getOrders() {
    return this.db.collection(this.url);
  }

  getOrdersByUser(userId: string): AngularFirestoreCollection<any> {
    return this.db.collection(this.url , (ref) => {
      let q = ref.where("userId","==", userId);
      return q;
    });
  }
}
