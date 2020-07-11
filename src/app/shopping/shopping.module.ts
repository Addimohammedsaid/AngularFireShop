import { ShippingFormComponent } from "./comp/shipping-form/shipping-form.component";
import { ShippingCartComponent } from "./comp/shipping-cart/shipping-cart.component";
import { SharedModule } from "./../shared/shared.module";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
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
    RouterModule.forChild([
      { path: "products", component: ProductsComponent },
      { path: "shopping-cart", component: ShippingCartComponent },
      {
        path: "check-out",
        component: CheckOutComponent,
      },
      {
        path: "order-success/:id",
        component: OrderSuccessComponent,
      },
      {
        path: "my/orders",
        component: MyOrdersComponent,
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
    ShippingFormComponent,
  ],
})
export class ShoppingModule {}
