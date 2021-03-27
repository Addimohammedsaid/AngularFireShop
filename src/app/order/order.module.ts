import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { MyOrdersComponent } from "./components/my-orders/my-orders.component";
import { OrderSuccessComponent } from "./components/order-success/order-success.component";
import { OrderViewComponent } from "./components/order-view/order-view.component";
import { OrderRoutingModule } from "./order-routing.module";

@NgModule({
  declarations: [MyOrdersComponent, OrderSuccessComponent, OrderViewComponent],
  imports: [OrderRoutingModule, SharedModule],
})
export class OrderModule {}
