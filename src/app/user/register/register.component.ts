import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
