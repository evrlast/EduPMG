import { Component, OnInit, OnChanges } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthorisationService, userLogin} from "../../services/authorisation.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true
  sign_in: FormGroup
  error: BehaviorSubject<string> = new BehaviorSubject<string>('')

  login_validation = {
    type: 'required',
    message: 'Login is required'
  }

  password_validation = {
    type: 'required',
    message: 'Password is required'
  }


  constructor(private fb: FormBuilder, private authService: AuthorisationService) {
    this.sign_in = this.fb.group({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
    this.error = this.authService.error
  }

  login() {
    const user: userLogin = {
      login: this.sign_in.value.login,
      password: this.sign_in.value.password
    }
    if( this.sign_in.valid ) {
      this.authService.login(user)
    }
  }

  ngOnInit(): void {
  }

}
