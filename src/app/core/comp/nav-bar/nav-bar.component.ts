import { AuthService } from "./../../../shared/services/auth.service";
import { Component, OnInit } from "@angular/core";
import { User } from "src/app/shared/models/app-user";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  user: User;

  constructor(private _auth: AuthService) {}

  ngOnInit() {}

  logout() {
    this._auth.logout();
  }
}
