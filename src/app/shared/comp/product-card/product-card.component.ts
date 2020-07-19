import { ShoppingCartService } from "./../../services/shopping-cart.service";
import { Product } from "./../../models/product";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"],
})
export class ProductCardComponent {
  @Input("product") product: Product;
  @Input("showActions") showActions = false;
  @Input("shoppingCart") shoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) {}

  addToCart() {
    this.shoppingCartService.addToCart(this.product);
  }

  getQuantity() {
    if (!this.shoppingCart) return 0;
    let item = this.shoppingCart.items[this.product.key];
    return item ? item.quantity : 0;
  }

  removeFromCart() {
    this.shoppingCartService.removeFromCart(this.product);
  }
}
