import { Injectable, EventEmitter } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaderResponse } from '@angular/common/http';
import { User } from '../shared/data.model';



interface LoginStatus {
  isLoggedIn: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public LoggedIn: EventEmitter<LoginStatus> = new EventEmitter();

  readonly rootUrl = 'http://localhost:4200';
  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    const body: User = {
      username: user.username,
      password: user.password
     
    }
    var data = "username=" + user.username + "&password=" + user.password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/api/User/Register', data,{headers : reqHeader});

    
  }
  //token?username=asdfsaf&password=asdasetg&grant_type=password
  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }

  getUserClaims(){
   return  this.http.get(this.rootUrl+'/api/GetUserClaims');
  }

  

}

