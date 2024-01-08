import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular16';
  constructor(private api: ApiService) {}
  ngOnInit() {
    // this.callApi();
  }
  record:any;
  getData(){
    this.callApi();
  }
  clear(){
    this.record = []
  }
  callApi(){
    this.api.getCall().subscribe(res =>{
      this.record = res;
      console.log(res)
    })
  }
}
