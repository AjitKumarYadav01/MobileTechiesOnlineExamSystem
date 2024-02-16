import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent implements OnInit{

  // public user:any = [];
  constructor(private auth: AuthService){

  }
  ngOnInit(): void {
      // this.api.getUsers().subscribe(res =>{
      //   this.user = res;
      // })
  }

  // logout(){
  //   this.auth.logout();
  // }
}


