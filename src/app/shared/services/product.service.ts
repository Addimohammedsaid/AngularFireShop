import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class ProductService {

  url:string = "products";

  constructor(private db: AngularFirestore) {}

  create(product) {    
    return this.db.collection(this.url).add(product);
  }

  get list(): AngularFirestoreCollection<any> {
    return this.db.collection(this.url);
  }

  getProduct(key) {
    return this.db.collection(this.url).doc(key);
  }

  update(product, key) {
    return this.db.collection(this.url).doc(key).update(product);
  }

  delete(key) {
    return this.db.collection(this.url).doc(key).delete();
  }
}
