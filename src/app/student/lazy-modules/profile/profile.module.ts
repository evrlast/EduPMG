import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import {MatCardModule} from "@angular/material/card";
import { ProfileCardComponent } from './components/profile-card/profile-card.component';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatCardModule
  ]
})
export class ProfileModule { }
