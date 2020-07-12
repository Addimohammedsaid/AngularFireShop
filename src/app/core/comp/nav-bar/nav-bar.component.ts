import { AuthService } from "./../../../shared/services/auth.service";
import { Component, OnInit } from "@angular/core";
import { AppUser } from "src/app/shared/models/app-user";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  appUser: AppUser;

  constructor(private _auth: AuthService) {}

  ngOnInit() {
    this._auth.appUser$.subscribe((appUser) => (this.appUser = appUser));
  }

  logout() {
    this._auth.logout();
  }
}
