import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs'
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService : ApiService ) { }

  RegistrationPost(data:any){
      return this.apiService.POST(`/user`+ data).pipe(map(res=>{
          return res
      }))
  }



}
