import { ProductService } from "./../../../shared/services/product.service";
import { CategoryService } from "./../../../shared/services/category.service";
import { Component, OnInit } from "@angular/core";
import { map, take, switchMap } from "rxjs/operators";

import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"],
})
export class ProductFormComponent implements OnInit {
  categories: any;
  product: any = [];
  id: any;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    categoryService
      .list
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.doc.id, ...c.payload.doc.data() }))
        )
      )
      .subscribe((categories) => {
        this.categories = categories;
      });

    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id)
      this.productService
        .getProduct(this.id)
        .valueChanges()
        .pipe(take(1))
        .subscribe((res) => {
          this.product = res;
        });
  }

  ngOnInit() {}

  save(product) {
    if (this.id) this.productService.update(product, this.id);
    else this.productService.create(product);

    this.router.navigate(["/admin/products/"]);
  }

  delete() {
    if (!confirm("are you sure you want to delete it ?")) return null;
    this.productService.delete(this.id);
    this.router.navigate(["/admin/products/"]);
  }
}
