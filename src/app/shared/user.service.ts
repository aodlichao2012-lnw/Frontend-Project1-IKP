import { Injectable, EventEmitter } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaderResponse } from '@angular/common/http';
import { User } from '../shared/data.model';



interface LoginStatus {
  isLoggedIn: boolean;
}

interface RegisterRequest {
  username: string;
  password: string;
  cid: string;
  email?: string;
}

interface RegisterResponse {
  success: boolean;
  token: string;
}

export interface RegisterParameter {
  username: string;
  password: string;
  cid: string;
  email?: string;
}

export interface RegisterResult {
  success: boolean;
  
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public LoggedIn: EventEmitter<LoginStatus> = new EventEmitter();

  readonly rootUrl = 'http://localhost:4200';
  constructor(private http: HttpClient) { }

  async registerUser(user: RegisterParameter): Promise<RegisterResult> {
    const body: RegisterRequest = user;

    var data = "username=" + user.username + "&password=" + user.password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True' });

    var response = await this.http.post<RegisterResponse>
                      (this.rootUrl + '/api/user/register', 
                       data,{headers : reqHeader})
                   .toPromise();

    var result: RegisterResult = { 
      success: response.success 
    };

    return result;
    //return this.http.post(this.rootUrl + '/api/user/register', data,{headers : reqHeader});
  }

  //token?username=asdfsaf&password=asdasetg&grant_type=password
 async userAuthentication(user : RegisterParameter) {
   const body: RegisterRequest = user;
    var data = "username=" + user.username + "&password=" + user.password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True' });
    var response = await this.http.post<RegisterResponse>(this.rootUrl + 
      '/token', data, { headers: reqHeader }).toPromise();

     var result: RegisterResult = { 
      success: response.success 
    };
    return result;
  }

  getUserClaims(){
   return  this.http.get(this.rootUrl+'/api/GetUserClaims');
  }

  

}

