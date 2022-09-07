import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuToggleService} from "../services/menu-toggle.service";
import {MatDrawer} from "@angular/material/sidenav";

type course = {
  name: string;
  src: string;
}

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer | undefined

  courses: course[] | undefined

  constructor(private toggleService: MenuToggleService) {
    this.courses = [{name: 'a', src: 'b'}, {name: 'a', src: 'b'}, {name: 'a', src: 'b'}]
  }


  ngOnInit(): void {
    this.toggleService.$onToggle.subscribe((value: boolean) => {
      this.drawer?.toggle()
    })

  }

  ngOnDestroy(): void {
    this.toggleService.$onToggle.unsubscribe()
  }

  menuToggle() {

  }

}
