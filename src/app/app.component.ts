import { Router } from "@angular/router";
import { UserService } from "./shared/services/user.service";
import { AuthService } from "./shared/services/auth.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "firebase-shop";

  constructor(
    private _auth: AuthService,
    private _userService: UserService,
    private _router: Router
  ) {
    _auth.user$.subscribe((user) => {
      if (!user) return;
      _userService.save(user);

      _auth.user$.subscribe((user) => {
        if (user) {
          let returnUrl = localStorage.getItem("returnUrl");
          _router.navigateByUrl(returnUrl);
        }
      });
    });
  }
}
