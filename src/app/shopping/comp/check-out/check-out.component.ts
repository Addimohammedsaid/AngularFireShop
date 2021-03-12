import { AuthService } from "./../../../shared/services/auth.service";
import { OrderService } from "./../../../shared/services/order.service";
import { Subscription } from "rxjs";
import { ShoppingCart } from "./../../../shared/models/shopping-cart";
import { ShoppingCartService } from "src/app/shared/services/shopping-cart.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Order } from "src/app/shared/models/order";
import { Router } from "@angular/router";
import { Shipping } from "src/app/shared/models/shipping.model";

@Component({
  selector: "app-check-out",
  templateUrl: "./check-out.component.html",
  styleUrls: ["./check-out.component.css"],
})
export class CheckOutComponent implements OnInit, OnDestroy {
  shipping : Shipping = {name:"",addressLine1:"",addressLine2:"",city:""};
  cart: ShoppingCart = null;
  cartSubscription: Subscription;
  userSubscription: Subscription;
  userId: string;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService,
    private auth: AuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart();
    this.cartSubscription = cart$.subscribe((e) => (this.cart = e));
    this.userSubscription = this.auth.userFire$.subscribe(
      (e) => (this.userId = e.uid)
    );
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);    
    let key = await this.orderService.placeOrder(order);    
    this.router.navigate(["/order-success", key]);
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
