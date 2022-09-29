import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {MainComponent} from "./components/main/main.component";



@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent
  ],
  exports: [
    HeaderComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    RouterModule
  ]
})
export class SharedModule { }
