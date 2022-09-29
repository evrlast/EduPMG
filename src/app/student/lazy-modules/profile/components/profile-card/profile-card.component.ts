import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  @Input() name: string | null = 'abc'
  @Input() surname: string | null = ''
  @Input() login: string | null = ''
  @Input() email: string | null = ''

  constructor() { }

  ngOnInit(): void {
  }

}
