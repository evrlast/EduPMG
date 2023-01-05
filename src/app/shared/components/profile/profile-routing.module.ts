import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProfileComponent} from "./components/profile/profile.component";
import {ProfileResolver} from "./resolver/profile.resolver";

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    resolve: {routeData: ProfileResolver}
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProfileRoutingModule { }
