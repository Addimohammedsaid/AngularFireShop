import { UserModel } from "../models/user";
import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { AngularFireList } from "@angular/fire/database";

@Injectable({
  providedIn: "root",
})
export class UserService {

  url : string = "users";

  constructor(private db: AngularFirestore) {}

  saveUser(user: firebase.User) {    
    // add or update firebase user into database  
    this.db.collection(this.url).doc(user.uid).set({
      name: user.displayName,
      email: user.email,
      isAdmin: false,
    }, {merge: true});
  }

  getUser(uid: string): AngularFirestoreDocument<UserModel> {
    return this.db.collection(this.url).doc(uid);
  }
}
