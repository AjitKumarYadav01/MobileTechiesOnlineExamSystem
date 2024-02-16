import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = "https://localhost:44385/api/User/";
  constructor( private http : HttpClient, private route: Router) {

   }

   getUsers(){
    return this.http.get(this.baseUrl);
    }
}