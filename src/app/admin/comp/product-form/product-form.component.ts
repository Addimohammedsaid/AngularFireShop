import { CategoryService } from "./../../../shared/services/category.service";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"],
})
export class ProductFormComponent implements OnInit {
  categories: any;

  constructor(private categoryService: CategoryService) {
    categoryService
      .getCategories()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe((categories) => {
        this.categories = categories;
        console.log(categories);
      });
  }

  ngOnInit() {}
}
