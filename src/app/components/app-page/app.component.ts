import {Component, OnInit} from '@angular/core';
import {AuthorisationService} from "../../services/authorisation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'edupmg';

  constructor(private authService: AuthorisationService) {
  }

  ngOnInit(): void {
    this.authService.checkToken()
  }
}
