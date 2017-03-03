import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';

@Injectable()
export class AuthService {
  //apiUrl:string="http://localhost:3000/users/";
  apiUrl:string="https://lit-wave-43120.herokuapp.com/users/";
  token:string;
  user:any={};

  constructor(private _http:Http) { 

  }
  isLoggedIn(){
    return localStorage.getItem("token") == null  ? false : true ;
  }
  profileUSer(){
    let token = localStorage.getItem("token");
    let headers = new Headers({'Authorization':token});
    let options = new RequestOptions({headers:headers});
      return this._http.get(`${this.apiUrl}profile`,options);
  }
  registerUSer(user){
      return this._http.post(`${this.apiUrl}register`,user);
  }
  authenticateUser(user){
    return this._http.post(`${this.apiUrl}authenticate`,user)
  }
  saveToken(token,user){
    this.token=token;
    this.user=user;
    localStorage.setItem("token",token);
    localStorage.setItem("user",JSON.stringify(user));
  }
  clearToken(){
    this.token=null;
    this.user=null;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

}
