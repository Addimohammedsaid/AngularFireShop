import { AngularFireObject } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase";
import { Observable } from "rxjs";
import { UserService } from "./user.service";
import { AppUser } from "../models/app-user";
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private firebase_auth: AngularFireAuth,
    private userService: UserService
  ) {
    this.user$ = firebase_auth.authState;
  }

  login() {
    this.firebase_auth.signInWithRedirect(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  logout() {
    this.firebase_auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.pipe(
      switchMap((user) => {
        if (user) return this.userService.get(user.uid).valueChanges();
        return Observable;
      })
    );
  }
}
