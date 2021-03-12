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
    this.productService.list.snapshotChanges().pipe(map((changes) =>
          changes.map((c) => ({ key: c.payload.doc.id, ...c.payload.doc.data() }))
        )
      )
      .pipe(
        switchMap((products) => {
          console.log(products);
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

  //Called once, before the instance is initialize.
  async ngOnInit() {
    this.subscription = (await this.shoppingCartService.getCart()).subscribe(
      (e) => {
        console.log(e);
        this.cart = e;
      }
    );
  }

 //Called once, before the instance is destroyed. 
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
