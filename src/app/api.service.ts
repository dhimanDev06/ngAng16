import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getCall(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
  addTest(a:any,b:any){
    if(a > b){
      return a+b
    }else{
      return a-b
    }

  }

}
