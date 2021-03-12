import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductQunatityComponent } from "./comp/product-qunatity/product-qunatity.component";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { ProductCardComponent } from "./comp/product-card/product-card.component";
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular5-data-table";

@NgModule({
  imports: [
    FormsModule,
    DataTableModule,
    CommonModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  declarations: [ProductCardComponent, ProductQunatityComponent],
  exports: [
    ProductCardComponent,
    ProductQunatityComponent,
    CommonModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
})
export class SharedModule {}
