import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class CategoryService {

  url:string = "categories";

  constructor(private db: AngularFirestore) {}

  // GET
  get list(): AngularFirestoreCollection<any> {    
    return this.db.collection(this.url, (ref)=> {
      return ref.orderBy("name");
    });
  }

}
