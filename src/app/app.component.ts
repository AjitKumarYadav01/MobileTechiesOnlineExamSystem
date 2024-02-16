import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'MobileTechiesOnlineExamSystem_UI';
  
  constructor(private route: Router, private auth: AuthService){

  }
  ngOnInit(): void {
      
  }
  logout(){
    this.auth.logout();
  }
  
}


