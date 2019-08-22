import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoginError : boolean = false;
  constructor(private userService : UserService,private router : Router) { }
 


  ngOnInit() {
  }
 async OnSubmit(user){
   await  this.userService.registerUser(user).then((data : any)=>{
     localStorage.setItem('userToken',data.access_token);
     this.router.navigate(['Register']);
   },
   (err : HttpErrorResponse)=>{
     this.isLoginError = true;
   });
 }

}
