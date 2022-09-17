import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }

  postEmp(data:any)
  {
    return this.http.post<any>("https://dummyjson.com/products/add",data)
    .pipe(map(res=>{return res;}))
  }
  getEmp()
  {
    return this.http.get<any>("https://dummyjson.com/products")
    .pipe(map(res=>{return res;}))
  }
  putEmp(id:number,data:any)
  {
    return this.http.put<any>("https://dummyjson.com/products/1"+id,data)
    .pipe(map(res=>{return res;}))
  }
  deleteEmp(id:number)
  {
    return this.http.delete<any>("https://dummyjson.com/products/1"+id)
    .pipe(map(res=>{return res;}))
  }
}
