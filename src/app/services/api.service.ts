import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

  }
  POST(data:any){

    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');
    const httpOptions = {
      'headers': headers
    };
    return this.http.post(`${environment.swaggs}`,data,httpOptions).pipe(res=>{
      return res})
  }
  Get(profile : number){
    return this.http.get(`${environment.swaggs}`+profile).pipe
    (res=>{return res})
  }






}
