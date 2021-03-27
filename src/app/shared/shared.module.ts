import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular5-data-table";
import { AngularFirestoreModule } from "@angular/fire/firestore";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence({ synchronizeTabs: true }),
  ],
  exports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
})
export class SharedModule {}
