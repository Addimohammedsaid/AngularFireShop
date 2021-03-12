import { AngularFireObject } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase";
import { Observable, throwError } from "rxjs";
import { UserService } from "./user.service";
import { UserModel as UserModel } from "../models/user";
import { switchMap } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";


@Injectable({
  providedIn: "root",
})
export class AuthService {
  userFire$: Observable<firebase.User> = this.firebase_auth.authState;

  constructor(
    private firebase_auth: AngularFireAuth,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  login() {
    // get current route or get home route
    let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/";

    // save the route to local storage
    localStorage.setItem("returnUrl", returnUrl);

    // login using firebase auth (google)
    this.firebase_auth.signInWithRedirect(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  logout() {
    // set the return url
    const returnUrl = "/";

    // go to returned url    
    this.router.navigateByUrl(returnUrl);

    this.firebase_auth.signOut();
  }

  get user$(): Observable<UserModel> {
    return this.userFire$.pipe(
      switchMap((user) => {
        if (user) {
          return this.userService.getUser(user.uid).valueChanges();
        }
        return [];
      })
    );
  }
}
