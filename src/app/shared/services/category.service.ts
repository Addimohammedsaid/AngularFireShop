import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private db: AngularFireDatabase) {}

  getCategories(): AngularFireList<any> {
    return this.db.list("/categories/", (ref) => {
      let q = ref.orderByChild("name");
      return q;
    });
  }
}
