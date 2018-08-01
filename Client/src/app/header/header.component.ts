import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    title: string;

    public constructor(private titleService: Title, private authService: AuthService) {
        this.title = this.titleService.getTitle();
        console.log("Title = " + this.title);
        console.log("prof = ", authService.prof)
        console.log("docu = ", authService.docu)
        console.log("admin = ", authService.admin)
        console.log("connected = ", authService.connected)
    }
  
    ngOnInit() {}
}