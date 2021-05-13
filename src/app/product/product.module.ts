import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductFilterComponent } from "./components/product-filter/product-filter.component";
import { ProductQuantityComponent } from "./components/product-quantity/product-quantity.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductRoutingModule } from "./product-routing.model";


@NgModule({
  imports: [SharedModule, ProductRoutingModule],
  declarations: 
  [
    ProductsComponent,
    ProductFilterComponent,
    ProductCardComponent,   
    ProductQuantityComponent,
  ],
  exports: [    
    ProductFilterComponent,
    ProductCardComponent,  
    ProductQuantityComponent,
  ],
})

export class ProductModule {}
