import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {SideNavBarComponent} from "./components/side-nav-bar/side-nav-bar.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ProfileModule} from "./components/profile/profile.module";



@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    SideNavBarComponent
  ],
  exports: [
    HeaderComponent,
    ProfileModule,
    MainComponent,
    SideNavBarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
