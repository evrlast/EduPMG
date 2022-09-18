import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {ServerRequestService} from "./server-request.service";
import {Router} from "@angular/router";

export type userLogin = { login: string, password: string }
export type userRegister = {
  name: string,
  surname: string,
  email: string,
  login: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {
  token = ''
  $login = new BehaviorSubject<string>('')
  $name = new BehaviorSubject<string>('')
  $surname = new BehaviorSubject<string>('')
  $email = new BehaviorSubject<string>('')
  userType: string = ''

  isLoggedIn: boolean = false

  constructor(private http: HttpClient, private server: ServerRequestService, private router: Router) {
  }

  checkToken() {
    this.token = localStorage.getItem('token') || ''
    if (this.token != '') {
      const isAllowed = this.server.post<{ allowed: boolean }>('loginWithToken', {token: this.token})
        .subscribe((res) => {
          this.isLoggedIn = res.allowed
          if (this.isLoggedIn) {
            this.decodeData()
          }
          else {
            localStorage.removeItem('token')
            this.token = ''
          }
          isAllowed.unsubscribe()
        })
    }
  }

  decodeData() {
    const data = JSON.parse(window.atob(this.token))

    this.$login.next(data.login)
    this.$name.next(data.name)
    this.$surname.next(data.surname)
    this.$email.next(data.email)
    this.userType = data.type
  }

  async login(user: userLogin) {
    const response = this.server.post<{ token: string }>('login', user)
    const subscription = response.subscribe((res) => {
      this.token = res.token

      this.decodeData()

      this.isLoggedIn = true
      localStorage.setItem('token', this.token)
      subscription.unsubscribe()
      this.router.navigate(['student'])
    })
  }

  async logout() {
    this.server.post<null>('logout', null)
    this.token = ''
    this.isLoggedIn = false
    this.$login.next('')
    this.$name.next('')
    this.$surname.next('')
    this.$email.next('')
    localStorage.removeItem('total')
    this.router.navigate(['/login'])
  }

  async register(user: userRegister) {
    const response = this.server.post<userRegister>('register', user)
    const subscription = response.subscribe((item) => {
      console.log(item)
      subscription.unsubscribe()
    })
  }

}
