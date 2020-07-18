import { Product } from "./../models/product";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from "@angular/core";
import { take } from "rxjs/internal/operators/take";

@Injectable({
  providedIn: "root",
})
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}

  private create() {
    return this.db.list("/shopping-cart/").push({
      dateCreated: new Date().getTime(),
    });
  }

  async getCarte() {
    let carteId = await this.getOrCreateCarteId();
    return this.db.object("/shopping-cart/" + carteId);
  }

  private async getOrCreateCarteId(): Promise<String> {
    let cartId = localStorage.getItem("cartId");
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem("cartId", result.key);
    return result.key;
  }

  async addToCart(product: Product) {
    let cartId = await this.getOrCreateCarteId();
    let item$ = this.db.object(
      "/shopping-cart/" + cartId + "/items/" + product.key
    );
    item$
      .snapshotChanges()
      .pipe(take(1))
      .subscribe((item) => {
        item$.update({
          product: product,
          quantity:
            (item.payload.exists() ? item.payload.val()["quantity"] : 0) + 1,
        });
      });
  }
}
