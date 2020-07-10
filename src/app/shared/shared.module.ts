import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductQunatityComponent } from "./comp/product-qunatity/product-qunatity.component";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { ProductCardComponent } from "./comp/product-card/product-card.component";

@NgModule({
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    //NgModule.forRoot(),
  ],
  declarations: [ProductCardComponent, ProductQunatityComponent],
  exports: [
    ProductCardComponent,
    ProductQunatityComponent,
    CommonModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    //NgbModule.forRoot().ngModule,
  ],
  providers: [],
})
export class SharedModule {}
