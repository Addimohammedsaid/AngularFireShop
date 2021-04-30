import { FooterComponent } from "./components/footer/footer.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./components/login/login.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([])],
  declarations: [
    NavBarComponent,    
    LoginComponent,
    FooterComponent,
    PageNotFoundComponent,
    HeroComponent,
  ],
  exports: [NavBarComponent, FooterComponent],
})
export class CoreModule {}
