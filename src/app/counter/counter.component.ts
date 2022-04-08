import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public counter : number = 0;
    
  increment(){
    this.counter += 1;
  }
  
  decrement(){
    this.counter -= 1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
