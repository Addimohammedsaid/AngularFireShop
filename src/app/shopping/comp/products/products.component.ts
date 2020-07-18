import { Subscription } from "rxjs";
import { ShoppingCartService } from "./../../../shared/services/shopping-cart.service";
import { switchMap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/shared/services/product.service";
import { Product } from "./../../../shared/models/product";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { map } from "rxjs/internal/operators/map";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  cart: any;
  category: any;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {
    this.productService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .pipe(
        switchMap((products) => {
          this.filteredProducts = this.products = products;
          return route.queryParamMap;
        })
      )
      .subscribe((params) => {
        this.category = params.get("category");
        this.filteredProducts = this.category
          ? this.products.filter((e) => e.category === this.category)
          : this.products;
      });
  }

  async ngOnInit() {
    this.subscription = (await this.shoppingCartService.getCarte())
      .snapshotChanges()
      .subscribe((e) => {
        this.cart = e.payload.val();
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
