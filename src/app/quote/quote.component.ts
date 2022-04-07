import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quotes[]= [
    new Quotes(1, 'Wine and children speak the truth.'),
    new Quotes(2, 'How you make your bed is how you are going to sleep.'),
    new Quotes(3, 'Wait for the wisest of all counselors, time.'),
    new Quotes(4, 'Wellbeing is attained by little and little, and nevertheless is no little thing itself.'),
    new Quotes(5, 'Madness does not go to the mountains, it goes to people.'),
  ];

  // upVoteQuote(index: number){
  //   this.quotes[index].upVote = !this.quotes[index].upVote;
  // }

  deleteQuote(isComplete:boolean, index: number){
    if (isComplete) {
      let toDelete =confirm(`Are you sure you want to delete ${this.quotes[index].name} ?`)

      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
