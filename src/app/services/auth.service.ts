import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "https://localhost:44385/api/User/";
  constructor( private http : HttpClient, private route: Router) {

   }

   signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`, userObj);
   }

   login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj);
   }

   logout(){
    //localStorage.removeItem("token");
    localStorage.clear();
    this.route.navigate(['/login']);
   }

   storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue);
   }

   getToken(){
     return localStorage.getItem('token');
   }

   isLoggedIn(): boolean{
    return !!localStorage.getItem("token");
   }

   
}
