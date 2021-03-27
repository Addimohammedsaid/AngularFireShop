import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "../shared/services/auth-guard.service";
import { MyOrdersComponent } from "./components/my-orders/my-orders.component";
import { OrderSuccessComponent } from "./components/order-success/order-success.component";
import { OrderViewComponent } from "./components/order-view/order-view.component";

const routes: Routes = [
  {
    path: "",
    component: MyOrdersComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: ":order",
    component: OrderViewComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "success",
    component: OrderSuccessComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
