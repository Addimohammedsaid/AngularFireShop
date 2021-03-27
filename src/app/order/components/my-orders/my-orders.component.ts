import { switchMap, map, take } from "rxjs/operators";
import { OrderService } from "../../../shared/services/order.service";
import { AuthService } from "../../../shared/services/auth.service";
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-my-orders",
  templateUrl: "./my-orders.component.html",
  styleUrls: ["./my-orders.component.css"],
})
export class MyOrdersComponent implements OnInit, OnDestroy {
  orders$;

  constructor(private auth: AuthService, private order: OrderService) {}

  ngOnInit() {
    this.auth.userFire$
      .pipe(take(1))
      .subscribe(
        (item) =>
          (this.orders$ = this.order.getOrdersByUser(item.uid).valueChanges())
      );
  }

  ngOnDestroy(): void {}
}
