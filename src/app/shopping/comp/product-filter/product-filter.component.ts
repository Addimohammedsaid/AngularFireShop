import { CategoryService } from "./../../../shared/services/category.service";
import { Component, OnInit, Input } from "@angular/core";
import { map } from "rxjs/operators";

@Component({
  selector: "app-product-filter",
  templateUrl: "./product-filter.component.html",
  styleUrls: ["./product-filter.component.css"],
})
export class ProductFilterComponent implements OnInit {
  categories: any;

  @Input("category") category;

  constructor(private categoryService: CategoryService) {
    this.categoryService
      .getCategories()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  ngOnInit() {}
}
