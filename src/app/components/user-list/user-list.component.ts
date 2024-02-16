import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{

  public user:any = [];
  constructor(private auth: AuthService, private api: ApiService){

  }

  ngOnInit(): void {
    this.api.getUsers().subscribe(res =>{
      this.user = res;
    })
  }
}
