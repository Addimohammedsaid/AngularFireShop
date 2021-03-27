import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map, take, tap } from "rxjs/operators";
import { Order } from "../../../shared/models/order";
import { OrderService } from "../../../shared/services/order.service";

@Component({
  selector: "order-view",
  templateUrl: "./order-view.component.html",
  styleUrls: ["./order-view.component.css"],
})
export class OrderViewComponent {
  order: Order;
  id: number;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {
    this.id = +this.route.snapshot.queryParamMap.get("id");

    if (this.id)
      this.orderService
        .getOrder(this.id)
        .snapshotChanges()
        .pipe(take(1))
        .subscribe((res) => {
          this.order = res.payload.data() as Order;
          console.log(this.order);
        });
  }

}
