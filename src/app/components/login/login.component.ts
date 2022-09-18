import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthorisationService, userLogin} from "../../services/authorisation.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true
  sign_in: FormGroup

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
