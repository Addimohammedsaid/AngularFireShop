import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserModel } from "../../shared/models/user";
import { AuthService } from "./../../shared/services/auth.service";
import { RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AdminAuthGuardService {
  appUser: UserModel;

  constructor(private _auth: AuthService) {}

  canActivate(): Observable<boolean> {
    return this._auth.user$.pipe(
      map((appUser) => {        
        return appUser.isAdmin;
      })
    );
  }
}
