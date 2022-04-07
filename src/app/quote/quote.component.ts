import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]= [
    {id:1, name:"Wine and children speak the truth."},
    {id:2, name:"How you make your bed is how you are going to sleep."},
    {id:3, name:"Wait for the wisest of all counselors, time."},
    {id:4, name:"Wellbeing is attained by little and little, and nevertheless is no little thing itself."},
    {id:5, name:"Madness does not go to the mountains, it goes to people."},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
