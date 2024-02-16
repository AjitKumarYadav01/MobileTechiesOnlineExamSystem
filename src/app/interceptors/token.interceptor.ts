import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler,HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private toast: NgToastService, private route: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> { debugger
     let myToken = this.auth.getToken();
    
    if(myToken) {
      request = request.clone({
        // setHeaders: { Authorization: "Ajit is cool"}
        setHeaders: { Authorization: `Bearer ${myToken}` }  // Bearer "+myToken"
      });
    }
    return next.handle(request).pipe(
      catchError((err: any) => {
        if (err.status === 401) {
          this.toast.warning({ detail: "Warning", summary: "Token is expired, Login again" });
          this.route.navigate(['/login']);
        }
        return throwError(() => new Error("Some other error occurred"));
      })
    );    
  }
}
