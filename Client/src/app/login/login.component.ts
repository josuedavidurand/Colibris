import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user:object = {mailConnexion:"", mdpConnexion:""};

  constructor(private route:Router, public authService:AuthService) { }

  ngOnInit() { 
    this.authService.deconnect(); //recup
    console.log('Test ngOnInit')
  }

  soumission(f) {
    if (f.value.mailConnexion && f.value.mdpConnexion) {
      // this.authService.setAuth(true, f.value.mailConnexion);
      console.log("f.value = ", f.value);
      if ((f.value.mailConnexion=="professeur@gmail.com") && (f.value.mdpConnexion=="mdp")) {
        this.authService.setAuth(true, "prof");
        this.route.navigateByUrl("/series");  
        console.log("c'est un prof")
      }
      else if ((f.value.mailConnexion=="documentaliste@gmail.com") && (f.value.mdpConnexion=="mdp")) {
        this.authService.setAuth(true, "docu");
        this.route.navigateByUrl("/series"); 
        console.log("c'est un docu")
      }
      else if ((f.value.mailConnexion=="administrateur@gmail.com") && (f.value.mdpConnexion=="mdp")) {
        this.authService.setAuth(true, "admin");
        this.route.navigateByUrl("/utilisateurs");  
        console.log("c'est un admin")
      }
      else {
        console.log("Au moins un champ n'est pas correct!")
      }
    }
    else {
      console.log("Au moins un champ n'est pas rempli!")
    }
  }
}