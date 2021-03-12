import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "./shared/services/user.service";
import { AuthService } from "./shared/services/auth.service";
import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "FireShop";

  constructor(
    private auth: AuthService,
    private userService: UserService,
    private router: Router,
  ){}

  ngOnInit(){    

    // on auth change
    this.auth.userFire$.subscribe((user) => {      
      // if user exist return null
      if (!user) return;

      // else update user
      this.userService.saveUser(user);

      // return to saved route
      let returnUrl = localStorage.getItem("returnUrl");
      if (!returnUrl) return;

      localStorage.removeItem("returnUrl");
      this.router.navigateByUrl(returnUrl);
      
    }, (error) => {
      console.log('error')       
    });
  }  


  ngOnDestroy(){}
}
