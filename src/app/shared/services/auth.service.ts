import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase";
import { Observable } from "rxjs";
import { User } from "../models/app-user";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private firebase_auth: AngularFireAuth,
    private userService: UserService
  ) {}

  login() {
    this.firebase_auth.signInWithRedirect(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  logout() {
    this.firebase_auth.signOut();
  }
}
