import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  counter:number = 0
  add(){
    this.counter = this.counter + 1
  }
  remove(){
    let v = this.counter;
    if(v > 0){
      this.counter = this.counter - 1
    }
  }
}
