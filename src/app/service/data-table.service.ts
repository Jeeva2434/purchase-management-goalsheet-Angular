import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  baseUrl:string = 'https://crudcrud.com/api/9f1c3260e7b94835a7a693a04f02eeac'
  constructor(private http:HttpClient) { }

  postdata(data:any):
    Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/unicorns`,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
 
  getdata(){
    return this.http.get<any>(`${this.baseUrl}/unicorns`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateData(data:any,id:number){
    return this.http.put(`${this.baseUrl}/unicorns`+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deletedata(id:number){
    return this.http.delete<any>(`${this.baseUrl}/unicorns/`+id)
    .pipe(map((res:any)=>{
       return res;
    }))
  }

}
