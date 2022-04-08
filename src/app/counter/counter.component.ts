import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // @Input() quote!: Quotes;
  // @Output() itIsComplete= new EventEmitter<boolean>();

  // quoteUpVote(completed:boolean){
  //   this.itIsComplete.emit(completed);
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
