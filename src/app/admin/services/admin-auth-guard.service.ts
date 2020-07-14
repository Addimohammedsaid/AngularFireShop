import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AppUser } from "./../../shared/models/app-user";
import { AuthService } from "./../../shared/services/auth.service";
import { RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AdminAuthGuardService {
  appUser: AppUser;

  constructor(private _auth: AuthService) {}

  canActivate(): Observable<boolean> {
    return this._auth.appUser$.pipe(
      map((appUser) => {
        console.log(appUser.isAdmin);
        return appUser.isAdmin;
      })
    );
  }
}
