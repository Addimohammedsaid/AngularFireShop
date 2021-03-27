import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./core/components/login/login.component";
import { PageNotFoundComponent } from "./core/components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "products" },
  { path: "login", component: LoginComponent },
  {
    path: "products",
    loadChildren: () =>
      import("./product/product.model").then((m) => m.ProductModule),
  },
  {
    path: "order",
    loadChildren: () =>
      import("./order/order.module").then((m) => m.OrderModule),
  },
  {
    path: "shopping",
    loadChildren: () =>
      import("./shopping/shopping.module").then((m) => m.ShoppingModule),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
