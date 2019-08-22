import { Component, OnInit } from '@angular/core';
import { UserService} from '../../shared/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  isLoginError : boolean = false;
  constructor(private userService : UserService,private router : Router) { }
 


  ngOnInit() {
  }
 async  OnSubmit(user){
   await  this.userService.userAuthentication(user).then((data : any)=>{
     localStorage.setItem('userToken',data.access_token);
     this.router.navigate(['login']);
   },
   (err : HttpErrorResponse)=>{
     this.isLoginError = true;
   });
 }
 
 }




