import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { url } from '../config/url';

@Injectable()
export class HttpService  {

  constructor(public http:HttpClient) { }

  public login(payload){
    return  this.http.post(`${url.login}`, payload)
  }

}
