import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { AdminProductsComponent } from "./components/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./components/admin-orders/admin-orders.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { ProductModule } from "../product/product.module";
import { AdminProductFormComponent } from "./components/admin-product-form/admin-product-form.component";


@NgModule({
  imports: [
    SharedModule,
    ProductModule,
    AdminRoutingModule,        
  ],
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    AdminProductFormComponent
  ],
})

export class AdminModule {}
