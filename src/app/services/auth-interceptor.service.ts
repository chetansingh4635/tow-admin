import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):any {
    let authRequest:HttpRequest<any>;  
    req.headers.set('Access-Control-Allow-Origin', "http://localhost:4200");
    req.headers.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    req.headers.set('Access-Control-Allow-Headers', 'X-PINGOTHER'); 
    req.headers.set('Access-Control-Max-Age', '1728000'); 
    if (localStorage.getItem('token')) {
      const authToken = localStorage.getItem('token')
      req.headers.set('token', authToken);
    } else {
      authRequest = req.clone({});
    }
    authRequest = req.clone({
        headers: req.headers
      });
    return next.handle(authRequest);
  }
}
