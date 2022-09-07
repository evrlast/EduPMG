import {Component} from '@angular/core';
import {AuthorisationService} from "./services/authorisation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'edupmg';

  constructor(private authService: AuthorisationService) {
  }

  ngOnInit(): void {
    this.authService.checkToken()
  }

  $name = this.authService.$name
  $surname = this.authService.$surname
}
