import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServerRequestService} from "./server-request.service";
import {Router} from "@angular/router";

export type userLogin = { login: string, password: string }

export type userRegister = {
  name: string,
  surname: string,
  email: string,
  login: string,
  password: string,
  teacherCode: string,
}

export type profile = {

}

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {
  token = ''
  userType = ''

  isLoggedIn: boolean = false

  constructor(private http: HttpClient, private server: ServerRequestService, private router: Router) {
    this.token = localStorage.getItem('token') || ''
    this.userType = localStorage.getItem('type') || ''
    if (this.token !== '') {
      this.isLoggedIn = true;
    }
  }


  async login(user: userLogin) {
    const response = this.server.post<{ accessToken: string, userType: string }>('login', user)
    const subscription = response.subscribe((res) => {
      this.token = res.accessToken
      this.userType = res.userType

      this.isLoggedIn = true

      localStorage.setItem('token', this.token)
      localStorage.setItem('type', this.userType)

      subscription.unsubscribe()
      this.router.navigate([this.userType])
    })
  }

  async logout() {
    this.server.post<null>('logout', null)
    this.token = ''
    this.isLoggedIn = false

    localStorage.removeItem('type')
    localStorage.removeItem('token')

    await this.router.navigate(['/login'])
  }

  async register(user: userRegister) {
    const response = this.server.post<userRegister>('register', user)
    const subscription = response.subscribe((item) => {
      subscription.unsubscribe()
    })
  }

}
