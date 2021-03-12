import { switchMap, map } from "rxjs/operators";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { Router, CanActivate, RouterStateSnapshot } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(private _auth: AuthService, private router: Router) {}

  canActivate(route, state: RouterStateSnapshot) {
    return this._auth.userFire$.pipe(
      map((user) => {
        if (user) return true;
        this.router.navigate(["/login"], {
          queryParams: { returnUrl: state.url },
        });
        return false;
      })
    );
  }
}
