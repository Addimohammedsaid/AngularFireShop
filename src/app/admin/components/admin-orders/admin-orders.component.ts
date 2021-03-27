import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Order } from "src/app/shared/models/order";
import { OrderService } from "src/app/shared/services/order.service";

@Component({
  selector: "admin-orders",
  templateUrl: "./admin-orders.component.html",
  styleUrls: ["./admin-orders.component.css"],
})
export class AdminOrdersComponent implements OnInit {
  orders : Order[];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getOrders().snapshotChanges().pipe(map((changes) =>
    changes.map((c:any) => ({ key: c.payload.doc.id, ...c.payload.doc.data() }))
  )
).subscribe((orders) => { this.orders = orders; });

  }

  deleteOrder(key){
    this.orderService.deleteOrder(key);
  }
}
