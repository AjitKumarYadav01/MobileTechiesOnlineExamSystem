import { Injectable, inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
class PermissionsService {

  constructor(private route: Router, private auth : AuthService, private toast: NgToastService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { 
      //your logic goes here
      //return true;
      if(this.auth.isLoggedIn()){
        return true;
      }else{
        // Redirect to login page or handle unauthorized access
      this.toast.error({detail:"ERROR", summary: "Please Login First!"})
      this.route.navigate(['/login']);
        return false;
      }

  }  
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(PermissionsService).canActivate(next, state);
}