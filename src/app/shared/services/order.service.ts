import { ShoppingCartService } from "src/app/shared/services/shopping-cart.service";
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  url: string = "orders";

  constructor(
    private db: AngularFirestore,
    private shoppingCartService: ShoppingCartService
  ) {}

  //========== POST =============
  async placeOrder(order) {
    // generate key
    const key = this.db.createId();

    await this.db.collection(this.url).doc(key).set(Object.assign({}, order));

    // clear cart after order
    await this.shoppingCartService.clearCart();

    return key;
  }

  //========== GET =============
  getOrders() {
    return this.db.collection(this.url);
  }

  getOrder(key) {
    return this.db.collection(this.url).doc(key);
  }

  getOrdersByUser(userId: string): AngularFirestoreCollection<any> {
    return this.db.collection(this.url, (ref) => {
      let q = ref.where("userId", "==", userId);
      return q;
    });
  }

  //========== DELETE =============
  deleteOrder(key: string) {
    this.db.collection(this.url).doc(key).delete();
  }
}
