import { AuthGuardService } from "./../shared/services/auth-guard.service";
import { ShippingCartComponent } from "./comp/shipping-cart/shipping-cart.component";
import { SharedModule } from "./../shared/shared.module";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { ProductsComponent } from "./comp/products/products.component";
import { CheckOutComponent } from "./comp/check-out/check-out.component";
import { OrderSuccessComponent } from "./comp/order-success/order-success.component";
import { MyOrdersComponent } from "./comp/my-orders/my-orders.component";
import { ShippingCartSummaryComponent } from "./comp/shipping-cart-summary/shipping-cart-summary.component";
import { ProductFilterComponent } from "./comp/product-filter/product-filter.component";

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      { path: "products", component: ProductsComponent },
      { path: "shopping-cart", component: ShippingCartComponent },
      {
        path: "check-out",
        component: CheckOutComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: "order-success/:id",
        component: OrderSuccessComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: "my/orders",
        component: MyOrdersComponent,
        canActivate: [AuthGuardService],
      },
    ]),
  ],
  declarations: [
    ProductsComponent,
    ShippingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShippingCartSummaryComponent,
    ShippingCartComponent,    
  ],
})
export class ShoppingModule {}
