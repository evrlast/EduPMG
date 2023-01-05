import {Component, OnInit} from '@angular/core';
import {AuthorisationService} from "../../../services/authorisation.service";

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  userType: string

  studentNavList = [
      {
        title: 'Головна',
        icon: 'home',
        route: 'main'
      },
      {
        title: 'Аккаунт',
        icon: 'account_box',
        route: 'profile'
      },
      {
        title: 'Доступні курси',
        icon: 'book',
        route: 'courses'
      },
      {
        title: 'Щоденник',
        icon: 'date_range',
        route: ''
      },
      {
        title: 'Заплановані вебінари',
        icon: 'event',
        route: ''
      },
      {
        title: 'Активні вебінари',
        icon: 'schedule',
        route: ''
      },
      {
        title: 'Повідомлення',
        icon: 'mail_outline',
        route: ''
      }
  ]

  teacherNavList = [
    {
      title: 'Головна',
      icon: 'home',
      route: 'main'
    },
    {
      title: 'Аккаунт',
      icon: 'account_box',
      route: 'profile'
    },
    {
      title: 'Створені курси',
      icon: 'book',
      route: 'courses'
    },
    {
      title: 'Створені групи',
      icon: 'face',
      route: 'groups'
    },
    {
      title: 'Заплановані вебінари',
      icon: 'event',
      route: ''
    },
    {
      title: 'Повідомлення',
      icon: 'mail_outline',
      route: ''
    }
  ]


  constructor(private authService: AuthorisationService) {
    this.userType = authService.userType
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  logout() {
    this.authService.logout()
  }

}
