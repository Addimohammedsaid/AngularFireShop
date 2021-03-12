import { FooterComponent } from "./comp/footer/footer.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./comp/login/login.component";
import { NavBarComponent } from "./comp/nav-bar/nav-bar.component";

@NgModule({
  imports: [SharedModule, RouterModule.forChild([])],
  declarations: [
    NavBarComponent,    
    LoginComponent,
    FooterComponent,
  ],
  exports: [NavBarComponent, FooterComponent],
})
export class CoreModule {}
