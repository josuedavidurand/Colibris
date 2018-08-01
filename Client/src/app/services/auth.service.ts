import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { isString } from 'util';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  admin:boolean = false;
  docu:boolean = false;
  prof:boolean = false;
  connected:boolean = false;
  token:string;

  constructor(private route:Router, private http:HttpClient) { }

  setAuth(bool, el){
    console.log("bool, el", bool, el);
    this[el]=bool;
    sessionStorage.setItem(el, bool.toString());
    this.connected = bool;
    sessionStorage.setItem('connected', bool.toString());
    console.log("connected : ", sessionStorage.getItem('connected'));
  }

  getAuth() {
    switch (true) {
        case isString(sessionStorage.getItem('prof')):
            this.prof = eval(sessionStorage.getItem('prof'));
            break;
        case isString(sessionStorage.getItem('docu')):
            this.docu = eval(sessionStorage.getItem('docu'));
            break;
        case isString(sessionStorage.getItem('admin')):
            this.admin = eval(sessionStorage.getItem('admin'));
            break;
        case isString(sessionStorage.getItem('connected')):
            this.connected = eval(sessionStorage.getItem('connected'));
            console.log("sessionStorage = ", sessionStorage.getItem('connected'));
            break;
    }
  }

  deconnect(){
    this.prof=false;
    this.docu=false;
    this.admin=false;
    this.route.navigateByUrl("/");
  }

  // getToken(){
  //   this.token="";
  //   sessionStorage.setItem("authToken", this.token);
  // }

}
