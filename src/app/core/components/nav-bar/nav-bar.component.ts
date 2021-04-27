import { ShoppingCartService } from "../../../shared/services/shopping-cart.service";
import { AuthService } from "../../../shared/services/auth.service";
import { Component, OnInit } from "@angular/core";
import { UserModel as UserModel } from "src/app/shared/models/user";
import { Observable } from "rxjs";
import { ShoppingCart } from "src/app/shared/models/shopping-cart";


@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  user: UserModel;
  cart$: Observable<ShoppingCart>;

  constructor(
    private auth: AuthService,
    private shoppingCartService: ShoppingCartService
  ) {}

  async ngOnInit() {
    // subscribe to user data
    this.auth.user$.subscribe((user) => (this.user = user));

    // get data from shopping cart
    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout() {
    this.auth.logout();
  }
}
