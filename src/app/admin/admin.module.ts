import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductFormComponent } from "./comp/product-form/product-form.component";
import { AdminProductsComponent } from "./comp/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./comp/admin-orders/admin-orders.component";
import { AuthGuardService } from "../shared/services/auth-guard.service";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: "admin/products/new",
        component: ProductFormComponent,
      },
      {
        path: "admin/products/:id",
        component: ProductFormComponent,
      },
      {
        path: "admin/products",
        component: AdminProductsComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: "admin/orders",
        component: AdminOrdersComponent,
        canActivate: [AuthGuardService],
      },
    ]),
  ],
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
  ],
})
export class AdminModule {}
