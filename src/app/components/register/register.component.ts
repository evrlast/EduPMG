import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {AuthorisationService, userRegister} from "../../services/authorisation.service";
import {BehaviorSubject} from "rxjs";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide1: boolean = true
  hide2: boolean = true
  passwordAreNotEqual: boolean | undefined
  registerForm: FormGroup
  error: BehaviorSubject<string> = new BehaviorSubject<string>('')

  account_validation_messages = {
    'name': [
      {type: 'required', message: 'Name is required'},
      {type: 'minlength', message: 'Name must be at least 2 characters long'},
      {type: 'maxlength', message: 'Name cannot be more than 25 characters long'},
    ],
    'surname': [
      {type: 'required', message: 'Surname is required'},
      {type: 'minlength', message: 'Surname must be at least 2 characters long'},
      {type: 'maxlength', message: 'Surname cannot be more than 30 characters long'},
    ],
    'login': [
      {type: 'required', message: 'Login is required'},
      {type: 'minlength', message: 'Login must be at least 5 characters long'},
      {type: 'maxlength', message: 'Login cannot be more than 20 characters long'},
      {type: 'pattern', message: 'Your login must contain only numbers and letters'},
      {type: 'validUsername', message: 'Your login has already been taken'}
    ],
    'email': [
      {type: 'required', message: 'Email is required'},
      {type: 'pattern', message: 'Enter a valid email'}
    ],
    'password': [
      {type: 'required', message: 'Password is required'},
      {type: 'minlength', message: 'Password must be at least 8 characters long'},
      {
        type: 'passwordInvalid',
        message: 'Your password must contain at least one uppercase, one lowercase, and one number'
      }
    ],
    'confirmPassword': [
      {type: 'required', message: 'Confirmation password is required'},
    ]
  }


  constructor(private fb: FormBuilder, private authService: AuthorisationService) {
    this.registerForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.min(2),
        Validators.max(25)]),
      surname: new FormControl('', [
        Validators.required,
        Validators.min(2),
        Validators.max(30)]),
      email: new FormControl('', [
        Validators.required,
        Validators.email]),
      login: new FormControl('', [
        Validators.required,
        Validators.min(5),
        Validators.max(20),
        this.forbiddenLoginValidator(/^\w+$/)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        this.forbiddenPasswordValidator()]),
      confirmPassword: new FormControl('', [
        Validators.required]),
      teacherCode: new FormControl('')
    }, {validator: this.matchPassword()})
    this.error = authService.error
  }

  register() {
    if (this.registerForm.valid) {
      const user: userRegister = {
        name: this.registerForm.value.name,
        surname: this.registerForm.value.surname,
        email: this.registerForm.value.email,
        login: this.registerForm.value.login,
        password: this.registerForm.value.password,
        teacherCode: this.registerForm.value.teacherCode
      }
      this.authService.register(user)
    }
  }

  ngOnInit(): void {
  }

  private forbiddenLoginValidator(loginRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isForbidden = !loginRe.test(control.value)
      return isForbidden ? {forbiddenLogin: {value: control.value}} : null
    };
  }

  private forbiddenPasswordValidator(): ValidatorFn {
    let passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    return (control: AbstractControl): ValidationErrors | null => {
      const isForbidden = !passwordRegex.test(control.value)
      return isForbidden ? {forbiddenPassword: {'passwordInvalid': true}} : null
    };
  }

  private matchPassword(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const password = control.value.password;
      const confirm = control.value.confirmPassword;

      if (password != confirm) {
        this.passwordAreNotEqual = true
        return {'noMatch': true}
      } else {
        this.passwordAreNotEqual = false
      }

      return null

    }
  }

}
