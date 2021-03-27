import { environment } from "../environments/environment";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestore } from "@angular/fire/firestore";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { AdminModule } from "./admin/admin.module";
import { ShoppingModule } from "./shopping/shopping.module";
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),    
    BrowserModule,    
    SharedModule,  
    CoreModule,  
    AdminModule,    
    ShoppingModule,    
    AppRoutingModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
})
export class AppModule {}
